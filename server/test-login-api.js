import fetch from 'node-fetch';

async function testApiLogins() {
  const accounts = [
    { email: 'admin@civicos.gov', password: 'admin123', expectedRole: 'ADMIN' },
    { email: 'officer@civicos.gov', password: 'officer123', expectedRole: 'OFFICER' },
    { email: 'citizen@civicos.gov', password: 'citizen123', expectedRole: 'CITIZEN' },
  ];

  console.log('[TestApiLogins] Testing HTTP Auth API endpoints...');

  for (const acc of accounts) {
    try {
      const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: acc.email, password: acc.password }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        console.log(`✅ [HTTP Login Success] Email: ${acc.email} | Role: ${data.user.role} | Token length: ${data.token.length}`);
      } else {
        console.error(`❌ [HTTP Login Failed] Email: ${acc.email} | Status: ${res.status} | Message: ${data.message}`);
      }
    } catch (err) {
      console.error(`❌ [HTTP Request Error] Email: ${acc.email} | Error: ${err.message}`);
    }
  }
}

testApiLogins();
