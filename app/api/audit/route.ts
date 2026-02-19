import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';
import { randomUUID } from 'crypto';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

// Try to write to local CRM — fails gracefully on Vercel
async function saveToCRM(name: string, email: string, token: string) {
  try {
    const Database = (await import('better-sqlite3')).default;
    const db = new Database(process.env.CRM_DB_PATH!);
    db.prepare(`
      INSERT INTO contacts (name, email, source, status)
      VALUES (?, ?, 'site-audit-form', 'new')
      ON CONFLICT(email) DO UPDATE SET name = excluded.name, updated_at = datetime('now')
    `).run(name, email);
    const contact = db.prepare('SELECT id FROM contacts WHERE email = ?').get(email) as { id: number };
    db.prepare(`
      INSERT INTO audit_leads (email, name, token, status, contact_id)
      VALUES (?, ?, ?, 'pending', ?)
    `).run(email, name, token, contact.id);
    db.close();
  } catch {
    // No local DB on Vercel — that's fine, email still sends
  }
}

export async function POST(req: NextRequest) {
  try {
    const { name, email } = await req.json();

    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email required' }, { status: 400 });
    }

    // Token encodes the email so qualify page works without DB lookup
    const token = Buffer.from(JSON.stringify({ email, name, id: randomUUID() })).toString('base64url');

    await saveToCRM(name, email, token);

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ai.zachary-aronwald.com';
    const qualifyUrl = `${siteUrl}/qualify?token=${token}`;

    await sgMail.send({
      to: email,
      from: {
        email: process.env.SENDGRID_FROM_EMAIL || 'zach@zachary-aronwald.com',
        name: 'Zach at FlowAI',
      },
      subject: "You're one step away — complete your qualification",
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; color: #1A1A2E;">
          <div style="background: #0F2240; padding: 32px 40px; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px;">FlowAI</h1>
          </div>
          <div style="background: #FAFAF8; padding: 40px; border-radius: 0 0 12px 12px; border: 1px solid #e5e5e5; border-top: none;">
            <h2 style="color: #0F2240; margin-top: 0;">Hey ${name}, thanks for reaching out!</h2>
            <p style="font-size: 16px; line-height: 1.6; color: #444;">
              I personally review every inquiry to make sure I can actually deliver results for your business. Before we schedule anything, I need about 2 minutes of your time to understand your situation.
            </p>
            <p style="font-size: 16px; line-height: 1.6; color: #444;">
              Please complete the short qualification questionnaire below — it helps me figure out exactly where I can save you the most time.
            </p>
            <div style="text-align: center; margin: 32px 0;">
              <a href="${qualifyUrl}" style="background: #D4920A; color: white; padding: 16px 32px; border-radius: 8px; text-decoration: none; font-weight: 700; font-size: 18px; display: inline-block;">
                Complete My Questionnaire →
              </a>
            </div>
            <p style="font-size: 14px; color: #888; text-align: center;">
              This link is unique to you. Takes about 2 minutes.
            </p>
            <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 32px 0;" />
            <p style="font-size: 14px; color: #888;">
              — Zach Aronwald<br>Founder, FlowAI<br>
              <a href="https://ai.zachary-aronwald.com" style="color: #D4920A;">ai.zachary-aronwald.com</a>
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true, message: 'Check your email for next steps!' });
  } catch (err) {
    console.error('Audit form error:', err);
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 });
  }
}
