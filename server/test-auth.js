import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import User from './models/User.js';
import { ensureDemoAccounts } from './config/db.js';

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/civicos';

async function testAuth() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('[TestAuth] Connected to MongoDB.');

    // Run repair check
    await ensureDemoAccounts();

    const emails = ['admin@civicos.gov', 'officer@civicos.gov', 'citizen@civicos.gov'];
    const passwords = {
      'admin@civicos.gov': 'admin123',
      'officer@civicos.gov': 'officer123',
      'citizen@civicos.gov': 'citizen123',
    };

    for (const email of emails) {
      const user = await User.findOne({ email }).select('+password');
      if (!user) {
        console.log(`[TestAuth] User NOT FOUND: ${email}`);
      } else {
        const plainPassword = passwords[email];
        const isMatch = await user.matchPassword(plainPassword);
        console.log(`[TestAuth] User ${email}: found=true, role=${user.role}, matchPassword('${plainPassword}')=${isMatch}`);
      }
    }

    process.exit(0);
  } catch (err) {
    console.error('[TestAuth Error]', err);
    process.exit(1);
  }
}

testAuth();
