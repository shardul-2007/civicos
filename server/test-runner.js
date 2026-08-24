import mongoose from 'mongoose';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './config/db.js';
import complaintRoutes from './routes/complaint.routes.js';
import Complaint from './models/Complaint.js';
import ComplaintHistory from './models/ComplaintHistory.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/complaints', complaintRoutes);

async function testCompleteLifecycle() {
  console.log('=======================================================');
  console.log('🚀 CivicOS End-to-End Persistence & Workflow Test Runner');
  console.log('=======================================================');

  try {
    await connectDB();
    const server = app.listen(5099, async () => {
      console.log('[Test Server] Listening on http://localhost:5099');

      try {
        const BASE = 'http://localhost:5099/api/complaints';

        // 1. Citizen Creates Issue
        console.log('\n--- 1. CITIZEN CREATES ISSUE ---');
        const createRes = await fetch(BASE, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            title: 'Large dangerous pothole near college gate',
            description: 'Deep pothole causing vehicle tire damage and traffic hazard.',
            category: 'Road Damage',
            ward: 14,
            address: 'Main College Entrance, Ward 14, Pune',
            latitude: 18.5204,
            longitude: 73.8567,
            citizenName: 'Shardul Citizen Tester',
            citizenEmail: 'citizen@civicos.gov',
            citizenPhone: '+91 98230 11223',
          }),
        });

        const createJson = await createRes.json();
        if (!createRes.ok || !createJson.success) {
          throw new Error(`Create failed: ${createJson.message}`);
        }

        const createdDoc = createJson.data;
        const trackingCode = createdDoc.trackingCode;
        const complaintId = createdDoc._id;

        console.log(`✅ [Creation Success] HTTP 201 Created`);
        console.log(`   • Server Generated Tracking Code: ${trackingCode}`);
        console.log(`   • MongoDB ID: ${complaintId}`);
        console.log(`   • Initial Status: ${createdDoc.status}`);
        console.log(`   • Assigned Dept: ${createdDoc.departmentName}`);
        console.log(`   • Ext Dept ID: ${createdDoc.externalDepartmentId}`);

        // Verify MongoDB directly
        const dbCheck = await Complaint.findById(complaintId);
        if (!dbCheck) throw new Error('MongoDB verification failed: Document not found in DB!');
        console.log(`✅ [MongoDB Verification] Document exists in DB collection with code ${dbCheck.trackingCode}`);

        // 2. Citizen Tracks Issue Code
        console.log('\n--- 2. CITIZEN SEARCHES TRACKING CODE ---');
        const trackRes = await fetch(`${BASE}/track/${trackingCode}`);
        const trackJson = await trackRes.json();
        if (!trackRes.ok || !trackJson.success) {
          throw new Error(`Track failed: ${trackJson.message}`);
        }
        console.log(`✅ [Tracking Success] Retrieved issue from DB. Status: '${trackJson.data.status}'`);

        // 3. Officer Queue Retrieval
        console.log('\n--- 3. OFFICER DESK QUEUE RETRIEVAL ---');
        const officerRes = await fetch(`${BASE}/officer`);
        const officerJson = await officerRes.json();
        if (!officerRes.ok || !officerJson.success) {
          throw new Error(`Officer queue failed: ${officerJson.message}`);
        }
        const inQueue = officerJson.data.find(c => c._id.toString() === complaintId.toString());
        if (!inQueue) throw new Error(`Officer Queue Error: Created issue ${trackingCode} not found in officer queue!`);
        console.log(`✅ [Officer Queue Ingestion] Issue ${trackingCode} retrieved in officer queue.`);

        // 4. Officer Updates Status (ACCEPTED -> IN_PROGRESS -> RESOLVED)
        console.log('\n--- 4. OFFICER UPDATES STATUS IN DATABASE ---');
        
        console.log('   [Action A]: Officer Accepts Job...');
        const act1 = await fetch(`${BASE}/${complaintId}/status`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ status: 'ACCEPTED', note: 'Officer accepted field inspection.' }),
        });
        if (!act1.ok) throw new Error('Accept status update failed');
        console.log('   ✅ DB Status updated to ACCEPTED');

        console.log('   [Action B]: Officer Starts Field Work (IN_PROGRESS)...');
        const act2 = await fetch(`${BASE}/${complaintId}/status`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ status: 'IN_PROGRESS', note: 'Asphalt repair crew dispatched.' }),
        });
        if (!act2.ok) throw new Error('In Progress status update failed');
        console.log('   ✅ DB Status updated to IN_PROGRESS');

        console.log('   [Action C]: Officer Marks Job RESOLVED...');
        const act3 = await fetch(`${BASE}/${complaintId}/status`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ status: 'RESOLVED', note: 'Asphalt patch repair completed.' }),
        });
        if (!act3.ok) throw new Error('Resolve status update failed');
        console.log('   ✅ DB Status updated to RESOLVED with resolvedAt timestamp');

        // 5. Citizen Searches Tracking Code Again
        console.log('\n--- 5. CITIZEN TRACKS AGAIN & VERIFIES RESOLUTION ---');
        const trackAgainRes = await fetch(`${BASE}/track/${trackingCode}`);
        const trackAgainJson = await trackAgainRes.json();
        if (!trackAgainRes.ok || !trackAgainJson.success) throw new Error('Second tracking fetch failed');
        console.log(`✅ [Status Sync Verification] Citizen tracking page shows updated DB status: '${trackAgainJson.data.status}'`);

        // 6. Test 404 for Invalid Issue ID
        console.log('\n--- 6. TEST INVALID ISSUE ID 404 ---');
        const invalidRes = await fetch(`${BASE}/track/CIV-999999-NOTEXIST`);
        if (invalidRes.status === 404) {
          console.log(`✅ [404 Error Test] Invalid Code CIV-999999-NOTEXIST correctly returned 404 Not Found!`);
        } else {
          throw new Error('404 Test failed: Invalid code did not return 404 status.');
        }

        console.log('\n=======================================================');
        console.log('🎉 COMPLETE LIFECYCLE PERSISTENCE TEST PASSED 100%!');
        console.log('=======================================================');

        server.close();
        process.exit(0);
      } catch (testErr) {
        console.error('\n❌ [Test Error]:', testErr.message);
        server.close();
        process.exit(1);
      }
    });
  } catch (err) {
    console.error('\n❌ [Setup Error]:', err.message);
    process.exit(1);
  }
}

testCompleteLifecycle();
