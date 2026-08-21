import fetch from 'node-fetch';

async function testOverviewApi() {
  console.log('[TestOverview] Testing http://localhost:5000/api/dashboard/overview ...');
  try {
    const res = await fetch('http://localhost:5000/api/dashboard/overview');
    const data = await res.json();
    if (res.ok && data.success) {
      console.log('✅ [Overview API Success] HTTP 200 OK');
      console.log(`   • Total Complaints: ${data.data.totalComplaints}`);
      console.log(`   • Open: ${data.data.open}`);
      console.log(`   • City Health Score: ${data.data.cityHealthScore}/100`);
      console.log(`   • Needs Attention Count: ${data.data.needsAttention.length}`);
    } else {
      console.error('❌ [Overview API Failed]', res.status, data);
    }
  } catch (err) {
    console.error('❌ [Overview Request Error]', err.message);
  }
}

testOverviewApi();
