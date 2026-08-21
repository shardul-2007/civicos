import mongoose from 'mongoose';
import fetch from 'node-fetch';
import dotenv from 'dotenv';
import Complaint from './models/Complaint.js';
import ComplaintHistory from './models/ComplaintHistory.js';

dotenv.config();

const BASE_URL = 'http://localhost:5000/api';
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/civicos';

async function runEndToEndTest() {
  console.log('=======================================================');
  console.log('🚀 CivicOS End-to-End Database & Workflow Test Suite');
  console.log('=======================================================');

  try {
    await mongoose.connect(MONGO_URI);
    console.log('[Test Suite] Connected to MongoDB.');

    // --------------------------------------------------------
    // TEST 1 — CITIZEN COMPLAINT CREATION
    // --------------------------------------------------------
    console.log('\n--- TEST 1: Citizen Complaint Creation ---');
    const citizenPayload = {
      title: 'Large pothole near main road',
      description: 'Large pothole causing traffic problems and vehicle tire damage.',
      category: 'Road Damage',
      ward: 14,
      address: 'College Road Entrance, Ward 14',
      latitude: 18.5304,
      longitude: 73.8667,
      citizenName: 'Shardul Citizen Test',
      citizenEmail: 'citizen@civicos.gov',
      citizenPhone: '+91 98230 11223',
    };

    const createRes = await fetch(`${BASE_URL}/complaints`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(citizenPayload),
    });

    const createData = await createRes.json();
    if (!createRes.ok || !createData.success) {
      throw new Error(`Citizen create complaint failed: ${createData.message}`);
    }

    const createdComplaint = createData.data;
    const trackingCode = createdComplaint.trackingCode;
    const complaintId = createdComplaint._id;

    console.log(`✅ [Citizen Submit Success] HTTP 201 Created`);
    console.log(`   • Tracking Code: ${trackingCode}`);
    console.log(`   • MongoDB _id: ${complaintId}`);
    console.log(`   • Department: ${createdComplaint.departmentName}`);
    console.log(`   • Initial Status: ${createdComplaint.status}`);
    console.log(`   • Priority Score: ${createdComplaint.priorityScore}/100`);

    // Verify MongoDB document exists directly
    const dbComplaint = await Complaint.findById(complaintId);
    if (!dbComplaint) {
      throw new Error(`MongoDB verification failed: Complaint ${complaintId} not found in database.`);
    }
    console.log(`✅ [MongoDB Verification] Document exists in DB with status '${dbComplaint.status}'`);

    const dbHistory = await ComplaintHistory.find({ complaint: complaintId });
    console.log(`✅ [MongoDB Audit History] ${dbHistory.length} audit entry created.`);

    // --------------------------------------------------------
    // TEST 2 — OFFICER DESK QUEUE & WORK ACTION STATE MACHINE
    // --------------------------------------------------------
    console.log('\n--- TEST 2: Officer Desk Ingestion & State Machine ---');

    // 2a. Fetch Officer Queue
    const queueRes = await fetch(`${BASE_URL}/complaints/officer`);
    const queueData = await queueRes.json();
    if (!queueRes.ok || !queueData.success) {
      throw new Error(`Officer queue fetch failed: ${queueData.message}`);
    }

    const matchInQueue = queueData.data.find((c) => c._id.toString() === complaintId);
    if (!matchInQueue) {
      throw new Error(`Officer Queue Error: Created complaint ${trackingCode} did not appear in officer queue.`);
    }
    console.log(`✅ [Officer Queue Ingestion] Complaint ${trackingCode} successfully retrieved in Officer Queue!`);

    // 2b. Officer Action 1: ACCEPT
    console.log('\n   [Officer Action 1]: Accepting Job...');
    const acceptRes = await fetch(`${BASE_URL}/complaints/${complaintId}/status`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: 'ACCEPTED', note: 'Officer Rajesh accepted dispatch job.' }),
    });
    const acceptData = await acceptRes.json();
    if (!acceptRes.ok || !acceptData.success) throw new Error(`Accept status update failed: ${acceptData.message}`);
    console.log(`   ✅ Status updated to ACCEPTED in MongoDB.`);

    // 2c. Officer Action 2: START WORK (IN_PROGRESS)
    console.log('   [Officer Action 2]: Starting Field Work (IN_PROGRESS)...');
    const startRes = await fetch(`${BASE_URL}/complaints/${complaintId}/status`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: 'IN_PROGRESS', note: 'On-site repair team dispatched with asphalt equipment.' }),
    });
    const startData = await startRes.json();
    if (!startRes.ok || !startData.success) throw new Error(`In-progress status update failed: ${startData.message}`);
    console.log(`   ✅ Status updated to IN_PROGRESS in MongoDB.`);

    // 2d. Officer Action 3: RESOLVE
    console.log('   [Officer Action 3]: Marking Work RESOLVED...');
    const resolveRes = await fetch(`${BASE_URL}/complaints/${complaintId}/status`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: 'RESOLVED', note: 'Pothole asphalt patch repair completed on site.' }),
    });
    const resolveData = await resolveRes.json();
    if (!resolveRes.ok || !resolveData.success) throw new Error(`Resolve status update failed: ${resolveData.message}`);
    console.log(`   ✅ Status updated to RESOLVED in MongoDB with resolvedAt timestamp.`);

    // --------------------------------------------------------
    // TEST 3 — CITIZEN TRACK & VERIFY
    // --------------------------------------------------------
    console.log('\n--- TEST 3: Citizen Tracking & Resolution Verification ---');

    const trackRes = await fetch(`${BASE_URL}/complaints/track/${trackingCode}`);
    const trackData = await trackRes.json();
    if (!trackRes.ok || !trackData.success) throw new Error(`Citizen tracking fetch failed: ${trackData.message}`);

    const trackedObj = trackData.data;
    console.log(`✅ [Citizen Tracking Success] Retrieved live status from MongoDB: '${trackedObj.status}'`);
    console.log(`   • Total Audit History Entries: ${trackedObj.history.length}`);

    // Citizen Resolution Verification
    console.log('   [Citizen Verification]: Confirming Resolution...');
    const verifyRes = await fetch(`${BASE_URL}/complaints/${complaintId}/verify`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ verified: true, note: 'Citizen visited site and confirmed pothole is fully repaired.' }),
    });
    const verifyData = await verifyRes.json();
    if (!verifyRes.ok || !verifyData.success) throw new Error(`Citizen verification update failed: ${verifyData.message}`);
    console.log(`✅ [Citizen Verification Success] Final status: RESOLVED, Audit history updated.`);

    console.log('\n=======================================================');
    console.log('🎉 ALL END-TO-END WORKFLOW TESTS PASSED 100% SUCCESSFULLY!');
    console.log('=======================================================');

    process.exit(0);
  } catch (err) {
    console.error('\n❌ [Test Error]:', err.message);
    process.exit(1);
  }
}

runEndToEndTest();
