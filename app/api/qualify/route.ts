import { NextRequest, NextResponse } from 'next/server';

const PASS_THRESHOLD = 60;

function scoreAnswers(answers: Record<string, string>): { score: number; qualified: boolean } {
  let score = 0;

  const revenueMap: Record<string, number> = {
    '<$5K': 0, '$5K-$20K': 5, '$20K-$50K': 10, '$50K-$100K': 12, '$100K+': 15,
  };
  score += revenueMap[answers.monthly_revenue] ?? 0;

  const empMap: Record<string, number> = {
    '1-5': 5, '6-20': 10, '21-50': 10, '50+': 10,
  };
  score += empMap[answers.employees] ?? 0;

  const hoursMap: Record<string, number> = {
    '<5 hrs': 0, '5-15 hrs': 5, '15-30 hrs': 10, '30+ hrs': 15,
  };
  score += hoursMap[answers.manual_hours] ?? 0;

  // Hard fail: budget too low
  if (answers.budget === '<$1K') {
    return { score: 0, qualified: false };
  }
  const budgetMap: Record<string, number> = {
    '$1K-$3K': 5, '$3K-$7K': 10, '$7K-$15K': 15, '$15K+': 20,
  };
  score += budgetMap[answers.budget] ?? 0;

  // Hard fail: not decision maker
  if (answers.decision_maker === 'No') {
    return { score: 0, qualified: false };
  }
  const dmMap: Record<string, number> = { 'Yes, fully': 15, 'Yes, jointly with a partner': 7 };
  score += dmMap[answers.decision_maker] ?? 0;

  const timelineMap: Record<string, number> = {
    'Just exploring': 2, 'Within 1-3 months': 10, 'ASAP': 15,
  };
  score += timelineMap[answers.timeline] ?? 0;

  if (answers.success_vision?.trim().length > 10) score += 5;

  return { score, qualified: score >= PASS_THRESHOLD };
}

async function saveToCRM(email: string, name: string, token: string, answers: Record<string, string>, score: number, qualified: boolean) {
  try {
    const Database = (await import('better-sqlite3')).default;
    const db = new Database(process.env.CRM_DB_PATH!);
    db.prepare(`
      UPDATE audit_leads SET answers_json = ?, score = ?, status = ? WHERE token = ?
    `).run(JSON.stringify(answers), score, qualified ? 'qualified' : 'disqualified', token);
    db.close();
  } catch {
    // No local DB on Vercel — that's fine
  }
}

export async function POST(req: NextRequest) {
  try {
    const { token, answers } = await req.json();

    if (!token || !answers) {
      return NextResponse.json({ error: 'Missing token or answers' }, { status: 400 });
    }

    // Decode token to get email/name (works without DB)
    let email = '', name = '';
    try {
      const decoded = JSON.parse(Buffer.from(token, 'base64url').toString());
      email = decoded.email;
      name = decoded.name;
    } catch {
      return NextResponse.json({ error: 'Invalid or expired link' }, { status: 400 });
    }

    if (!email) {
      return NextResponse.json({ error: 'Invalid or expired link' }, { status: 400 });
    }

    const { score, qualified } = scoreAnswers(answers);

    await saveToCRM(email, name, token, answers, score, qualified);

    return NextResponse.json({
      qualified,
      score,
      calendlyUrl: qualified ? process.env.NEXT_PUBLIC_CALENDLY_URL : null,
    });
  } catch (err) {
    console.error('Qualify error:', err);
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 });
  }
}
