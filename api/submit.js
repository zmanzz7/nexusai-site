export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const data = req.body;
  const SG_KEY = process.env.SENDGRID_API_KEY;

  // Format the email body
  const lines = Object.entries(data).map(([k, v]) => {
    const label = k.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
    const val = Array.isArray(v) ? v.join(', ') : v;
    return `<tr><td style="padding:8px 12px;border-bottom:1px solid #eee;font-weight:600;color:#333;vertical-align:top;width:200px">${label}</td><td style="padding:8px 12px;border-bottom:1px solid #eee;color:#555">${val || '—'}</td></tr>`;
  }).join('');

  const html = `
    <div style="font-family:-apple-system,sans-serif;max-width:700px;margin:0 auto">
      <h2 style="color:#6366f1">New Lead Questionnaire Submission</h2>
      <p style="color:#888">From: ${data.contact_name || 'Unknown'} at ${data.business_name || 'Unknown'}</p>
      <table style="width:100%;border-collapse:collapse;margin-top:16px">${lines}</table>
      <p style="margin-top:24px;padding:16px;background:#f0f0ff;border-radius:8px;color:#333">
        <strong>Quick Assessment:</strong><br>
        Revenue: ${data.revenue || '?'} | Employees: ${data.employees || '?'} | Budget: ${data.budget || '?'} | Timeline: ${data.timeline || '?'}
      </p>
    </div>`;

  try {
    const sgRes = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${SG_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        personalizations: [{ to: [{ email: 'zaronwald@gmail.com' }] }],
        from: { email: 'leads@zachary-aronwald.com', name: 'NexusAI Leads' },
        subject: `🔥 New Lead: ${data.business_name || 'Unknown'} (${data.revenue || '?'} rev, ${data.budget || '?'} budget)`,
        content: [{ type: 'text/html', value: html }]
      })
    });
    if (sgRes.ok || sgRes.status === 202) return res.status(200).json({ ok: true });
    const err = await sgRes.text();
    console.error('SendGrid error:', err);
    return res.status(500).json({ error: 'Email failed' });
  } catch (e) {
    console.error('Error:', e);
    return res.status(500).json({ error: 'Server error' });
  }
}
