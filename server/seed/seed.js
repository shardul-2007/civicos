import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import User from '../models/User.js';
import Department from '../models/Department.js';
import Ward from '../models/Ward.js';
import Complaint from '../models/Complaint.js';
import ComplaintHistory from '../models/ComplaintHistory.js';
import Incident from '../models/Incident.js';
import Prediction from '../models/Prediction.js';
import { generateTrackingCode } from '../utils/tracking.js';
import { calculatePriorityScore } from '../services/priority.service.js';
import { calculateDueDate } from '../services/sla.service.js';

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/civicos';
const IS_LARGE_SEED = process.env.LARGE_SEED === 'true';
const SEED_COUNT = IS_LARGE_SEED ? 10000 : 520;

// Center coordinates (Metro City Base)
const BASE_LAT = 18.5204;
const BASE_LNG = 73.8567;

const DEPARTMENTS = [
  { name: 'Roads Department', code: 'ROADS', description: 'Road maintenance, pothole patching, and paving', icon: 'Car', color: '#ef4444' },
  { name: 'Water & Drainage', code: 'WATER', description: 'Clean water distribution, sewage mains, and drainage', icon: 'Droplets', color: '#3b82f6' },
  { name: 'Sanitation', code: 'SAN', description: 'Solid waste management and street cleaning', icon: 'Trash2', color: '#10b981' },
  { name: 'Electrical Services', code: 'ELEC', description: 'Streetlight grid, transformers, and power distribution', icon: 'Zap', color: '#f59e0b' },
  { name: 'Public Safety', code: 'SAFE', description: 'Emergency hazards, tree falls, and structural safety', icon: 'ShieldAlert', color: '#8b5cf6' },
  { name: 'General Services', code: 'GEN', description: 'Parks, civic amenities, and general queries', icon: 'Building', color: '#6b7280' },
];

const CATEGORIES = [
  { name: 'Road Damage', deptCode: 'ROADS', subs: ['Pothole', 'Surface Collapse', 'Broken Curb', 'Tar Degradation'] },
  { name: 'Water Leakage', deptCode: 'WATER', subs: ['Pipe Burst', 'Clean Water Loss', 'Valve Leak', 'Low Pressure'] },
  { name: 'Drainage', deptCode: 'WATER', subs: ['Clogged Drain', 'Sewer Overflow', 'Stagnant Water', 'Gutter Blockade'] },
  { name: 'Garbage', deptCode: 'SAN', subs: ['Uncollected Waste', 'Illegal Dumping', 'Overflowing Bin', 'Hazardous Litter'] },
  { name: 'Streetlight', deptCode: 'ELEC', subs: ['Outage', 'Flickering Lamp', 'Damaged Pole', 'Exposed Wiring'] },
  { name: 'Public Safety', deptCode: 'SAFE', subs: ['Fallen Tree', 'Open Manhole', 'Unsafe Structure', 'Loose Cable'] },
  { name: 'Other', deptCode: 'GEN', subs: ['Encroachment', 'Noise Violation', 'Park Maintenance'] },
];

const SEVERITY_LEVELS = ['CRITICAL', 'HIGH', 'MEDIUM', 'LOW'];
const STATUSES = ['SUBMITTED', 'ASSIGNED', 'ACCEPTED', 'IN_PROGRESS', 'RESOLVED', 'REJECTED'];

const SAMPLE_CITIZENS = [
  { name: 'Rahul Sharma', email: 'rahul.s@gmail.com', phone: '+91 98230 11223' },
  { name: 'Priya Patel', email: 'priya.p@yahoo.com', phone: '+91 98450 33445' },
  { name: 'Amitav Ghosh', email: 'amitav.g@outlook.com', phone: '+91 97110 55667' },
  { name: 'Neha Deshmukh', email: 'neha.d@gmail.com', phone: '+91 99880 77889' },
  { name: 'Sunil Verma', email: 'sunil.v@gmail.com', phone: '+91 96540 99001' },
];

// Key scenario duplicate templates for hackathon story
const DUPLICATE_TEMPLATES = [
  { title: 'Huge pothole near college gate and bikes are falling', category: 'Road Damage', ward: 14, offsetLat: 0.0008, offsetLng: 0.0005 },
  { title: 'Road damage outside MIT college entrance', category: 'Road Damage', ward: 14, offsetLat: 0.0009, offsetLng: 0.0006 },
  { title: 'Big crater near college gate causing traffic slowdown', category: 'Road Damage', ward: 14, offsetLat: 0.0007, offsetLng: 0.0004 },
  { title: 'Severe sewage overflow near Ward 14 market square', category: 'Drainage', ward: 14, offsetLat: 0.0012, offsetLng: 0.0015 },
  { title: 'Drainage blocked and stinking water flooded the road', category: 'Drainage', ward: 14, offsetLat: 0.0011, offsetLng: 0.0014 },
  { title: 'Massive foul sewage leak outside bakery in Ward 14', category: 'Drainage', ward: 14, offsetLat: 0.0013, offsetLng: 0.0016 },
];

async function seedDatabase() {
  try {
    console.log(`[Seed] Connecting to MongoDB: ${MONGO_URI}...`);
    await mongoose.connect(MONGO_URI);

    console.log('[Seed] Wiping existing database collections...');
    await Promise.all([
      User.deleteMany({}),
      Department.deleteMany({}),
      Ward.deleteMany({}),
      Complaint.deleteMany({}),
      ComplaintHistory.deleteMany({}),
      Incident.deleteMany({}),
      Prediction.deleteMany({}),
    ]);

    // 1. Seed Departments
    console.log('[Seed] Seeding Departments...');
    const createdDepts = await Department.insertMany(DEPARTMENTS);
    const deptMap = {};
    createdDepts.forEach((d) => (deptMap[d.code] = d));

    // 2. Seed Wards
    console.log('[Seed] Seeding 20 Wards...');
    const wardDocs = [];
    for (let i = 1; i <= 20; i++) {
      wardDocs.push({
        number: i,
        name: `Ward ${i} - ${['Central', 'North', 'East', 'South', 'West', 'Metro', 'Tech Zone', 'Harbor', 'Riverside', 'Highland'][i % 10]}`,
        population: 15000 + i * 2500,
        complaintCount: 0,
      });
    }
    const createdWards = await Ward.insertMany(wardDocs);

    // 3. Seed Users (Admin, Officer, Citizens)
    console.log('[Seed] Seeding Users...');

    const adminUser = await User.create({
      name: 'Municipal Admin Commander',
      email: 'admin@civicos.gov',
      password: 'admin123',
      role: 'ADMIN',
      phone: '+91 99000 00001',
    });

    const roadsOfficer = await User.create({
      name: 'Chief Officer Rajesh Kumar',
      email: 'officer@civicos.gov',
      password: 'officer123',
      role: 'OFFICER',
      phone: '+91 99000 00002',
      department: deptMap['ROADS']._id,
      ward: 14,
    });

    const waterOfficer = await User.create({
      name: 'Inspector Meera Nair',
      email: 'water.officer@civicos.gov',
      password: 'officer123',
      role: 'OFFICER',
      phone: '+91 99000 00003',
      department: deptMap['WATER']._id,
      ward: 14,
    });

    const demoCitizen = await User.create({
      name: 'Citizen Demo User',
      email: 'citizen@civicos.gov',
      password: 'citizen123',
      role: 'CITIZEN',
      phone: '+91 98230 11223',
    });

    // 4. Seed Complaints
    console.log(`[Seed] Generating ${SEED_COUNT} realistic complaints...`);

    const complaintsToInsert = [];
    const now = new Date();

    // First insert the explicit hackathon demo complaints (Duplicate Cluster in Ward 14)
    for (let i = 0; i < DUPLICATE_TEMPLATES.length; i++) {
      const tmpl = DUPLICATE_TEMPLATES[i];
      const trackingCode = generateTrackingCode();
      const lat = BASE_LAT + (tmpl.ward * 0.015) + tmpl.offsetLat;
      const lng = BASE_LNG + (tmpl.ward * 0.015) + tmpl.offsetLng;

      const catInfo = CATEGORIES.find((c) => c.name === tmpl.category);
      const deptObj = deptMap[catInfo.deptCode];

      const createdAt = new Date(now.getTime() - (i + 1) * 3600 * 1000); // last few hours
      const { dueAt } = calculateDueDate(tmpl.category, 'HIGH', true, createdAt);

      complaintsToInsert.push({
        trackingCode,
        citizen: demoCitizen._id,
        citizenName: demoCitizen.name,
        citizenEmail: demoCitizen.email,
        citizenPhone: demoCitizen.phone,
        title: tmpl.title,
        description: `${tmpl.title}. Dangerous situation for commuters, immediate municipal intervention required.`,
        image: 'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&w=800&q=80',
        category: tmpl.category,
        subCategory: catInfo.subs[0],
        severity: 'HIGH',
        priorityScore: 87 - i * 2,
        safetyRisk: true,
        department: deptObj._id,
        departmentName: deptObj.name,
        assignedOfficer: roadsOfficer._id,
        ward: tmpl.ward,
        location: { type: 'Point', coordinates: [lng, lat] },
        address: `College Gate Road, Ward ${tmpl.ward}`,
        status: i === 0 ? 'ASSIGNED' : 'SUBMITTED',
        duplicateCount: 2,
        dueAt,
        createdAt,
      });
    }

    // Generate remaining random synthetic complaints
    for (let i = DUPLICATE_TEMPLATES.length; i < SEED_COUNT; i++) {
      const trackingCode = generateTrackingCode();

      const catObj = CATEGORIES[i % CATEGORIES.length];
      const category = catObj.name;
      const subCategory = catObj.subs[i % catObj.subs.length];
      const deptObj = deptMap[catObj.deptCode];

      const wardNum = (i % 20) + 1;
      const lat = BASE_LAT + (wardNum * 0.012) + (Math.random() * 0.008 - 0.004);
      const lng = BASE_LNG + (wardNum * 0.012) + (Math.random() * 0.008 - 0.004);

      const citizen = SAMPLE_CITIZENS[i % SAMPLE_CITIZENS.length];

      let severity = SEVERITY_LEVELS[i % SEVERITY_LEVELS.length];
      let status = STATUSES[i % STATUSES.length];

      // Ensure Ward 14 has many SLA violations and critical items for demo
      if (wardNum === 14 && i % 3 === 0) {
        severity = 'CRITICAL';
      }

      const safetyRisk = severity === 'CRITICAL' || severity === 'HIGH';

      // Spread created dates over past 10 days
      const daysAgo = (i % 10) + (Math.random() * 0.8);
      const createdAt = new Date(now.getTime() - daysAgo * 24 * 3600 * 1000);

      // SLA calculation
      let { dueAt } = calculateDueDate(category, severity, safetyRisk, createdAt);

      // Artificially make 10% of active complaints SLA Breached
      if (i % 10 === 0 && status !== 'RESOLVED' && status !== 'REJECTED') {
        dueAt = new Date(now.getTime() - (i % 5 + 1) * 3600 * 1000 * 6); // past due date
      }

      const resolvedAt = status === 'RESOLVED' ? new Date(createdAt.getTime() + 12 * 3600 * 1000) : null;

      const priorityRes = calculatePriorityScore({
        severity,
        safetyRisk,
        duplicateCount: i % 4 === 0 ? 3 : 0,
        locationDensity: wardNum === 14 ? 12 : 3,
        category,
        createdAt,
      });

      complaintsToInsert.push({
        trackingCode,
        citizen: demoCitizen._id,
        citizenName: citizen.name,
        citizenEmail: citizen.email,
        citizenPhone: citizen.phone,
        title: `${subCategory} report near Sector ${wardNum}`,
        description: `Citizens in Ward ${wardNum} reporting ${subCategory.toLowerCase()} issue affecting daily transit and public safety. Please resolve ASAP.`,
        image: '',
        category,
        subCategory,
        severity: priorityRes.suggestedSeverity,
        priorityScore: priorityRes.priorityScore,
        safetyRisk,
        department: deptObj._id,
        departmentName: deptObj.name,
        assignedOfficer: status !== 'SUBMITTED' ? roadsOfficer._id : null,
        ward: wardNum,
        location: { type: 'Point', coordinates: [lng, lat] },
        address: `Main Avenue, Block ${i % 8 + 1}, Ward ${wardNum}`,
        status,
        duplicateCount: i % 4 === 0 ? 3 : 0,
        dueAt,
        resolvedAt,
        createdAt,
      });
    }

    const insertedComplaints = await Complaint.insertMany(complaintsToInsert);
    console.log(`[Seed] Successfully inserted ${insertedComplaints.length} complaints.`);

    // 5. Create History Logs for complaints
    console.log('[Seed] Generating audit history records...');
    const historyDocs = [];
    insertedComplaints.slice(0, 100).forEach((c) => {
      historyDocs.push({
        complaint: c._id,
        actor: demoCitizen._id,
        actorName: c.citizenName,
        fromStatus: null,
        toStatus: 'SUBMITTED',
        note: `Complaint lodged via Citizen Portal. AI priority score assigned: ${c.priorityScore}.`,
        createdAt: c.createdAt,
      });

      if (c.status !== 'SUBMITTED') {
        historyDocs.push({
          complaint: c._id,
          actor: roadsOfficer._id,
          actorName: roadsOfficer.name,
          fromStatus: 'SUBMITTED',
          toStatus: 'ASSIGNED',
          note: `Assigned to ${c.departmentName}`,
          createdAt: new Date(c.createdAt.getTime() + 1800 * 1000),
        });
      }

      if (c.status === 'RESOLVED') {
        historyDocs.push({
          complaint: c._id,
          actor: roadsOfficer._id,
          actorName: roadsOfficer.name,
          fromStatus: 'IN_PROGRESS',
          toStatus: 'RESOLVED',
          note: 'On-site maintenance completed. Issue resolved.',
          createdAt: c.resolvedAt || new Date(),
        });
      }
    });
    await ComplaintHistory.insertMany(historyDocs);

    // 6. Create Seed Incidents (Grouped duplicate clusters)
    console.log('[Seed] Creating Incident cluster for Ward 14...');
    const ward14ClusterComplaints = insertedComplaints.filter((c) => c.ward === 14 && c.category === 'Road Damage').slice(0, 3);

    if (ward14ClusterComplaints.length >= 2) {
      const inc = await Incident.create({
        incidentId: 'INC-2026-0102',
        title: 'College Gate Road Damage & Pothole Hazard',
        category: 'Road Damage',
        severity: 'CRITICAL',
        complaints: ward14ClusterComplaints.map((c) => c._id),
        location: ward14ClusterComplaints[0].location,
        address: 'College Gate Main Entrance, Ward 14',
        ward: 14,
        confidence: 96,
        status: 'ACTIVE',
      });

      await Complaint.updateMany(
        { _id: { $in: ward14ClusterComplaints.map((c) => c._id) } },
        { incidentId: inc._id }
      );
    }

    // 7. Seed Predictions
    console.log('[Seed] Generating Predictive Civic Intelligence alerts...');
    const predictionsToInsert = [
      {
        ward: 14,
        wardName: 'Ward 14 - Tech Zone',
        category: 'Drainage',
        riskScore: 81,
        predictionWindow: 'Next 7 days',
        recommendation: 'High probability of drainage complaints. Schedule preventive stormwater drainage inspection immediately.',
        factors: [
          '23 drainage complaints logged in past 14 days',
          'Monsoon rainfall overflow pattern',
          'High population density near market square',
        ],
      },
      {
        ward: 4,
        wardName: 'Ward 4 - South',
        category: 'Road Damage',
        riskScore: 74,
        predictionWindow: 'Next 5 days',
        recommendation: 'Inspect transit corridor asphalt integrity before heavy transport surge.',
        factors: [
          'High heavy vehicle movement',
          '18 surface crack reports logged',
        ],
      },
      {
        ward: 8,
        wardName: 'Ward 8 - Riverside',
        category: 'Water Leakage',
        riskScore: 68,
        predictionWindow: 'Next 7 days',
        recommendation: 'Audit underground supply pressure mains to prevent burst.',
        factors: [
          'Aging pipe infrastructure',
          'Frequent pressure spike reports',
        ],
      },
    ];
    await Prediction.insertMany(predictionsToInsert);

    console.log('=======================================================');
    console.log('  ✅ DB Seed Completed Successfully!');
    console.log(`  ● Total Complaints: ${insertedComplaints.length}`);
    console.log(`  ● Admin Account: admin@civicos.gov / admin123`);
    console.log(`  ● Officer Account: officer@civicos.gov / officer123`);
    console.log(`  ● Citizen Account: citizen@civicos.gov / citizen123`);
    console.log('=======================================================');

    process.exit(0);
  } catch (error) {
    console.error('[Seed Error] Database seed failed:', error);
    process.exit(1);
  }
}

seedDatabase();
