import mongoose from 'mongoose';
import User from '../models/User.js';

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/civicos');
    console.log(`[MongoDB] Connected: ${conn.connection.host}`);
    
    // Idempotent check for demo accounts
    await ensureDemoAccounts();
  } catch (error) {
    console.error(`[MongoDB Error] Connection failed: ${error.message}`);
    process.exit(1);
  }
};

export const ensureDemoAccounts = async () => {
  try {
    const demoAccounts = [
      { name: 'Municipal Admin Commander', email: 'admin@civicos.gov', password: 'admin123', role: 'ADMIN' },
      { name: 'Chief Officer Rajesh Kumar', email: 'officer@civicos.gov', password: 'officer123', role: 'OFFICER' },
      { name: 'Citizen Demo User', email: 'citizen@civicos.gov', password: 'citizen123', role: 'CITIZEN' },
    ];

    for (const acc of demoAccounts) {
      let user = await User.findOne({ email: acc.email }).select('+password');
      if (!user) {
        // Pass plain text password so Mongoose pre('save') hook hashes it ONCE
        await User.create(acc);
        console.log(`[Demo Setup] Created missing account: ${acc.email} (${acc.role})`);
      } else {
        const matches = await user.matchPassword(acc.password);
        if (!matches) {
          user.password = acc.password; // Mongoose pre('save') hook will hash this plain text password ONCE
          user.role = acc.role;
          await user.save();
          console.log(`[Demo Setup] Fixed password hash for: ${acc.email}`);
        }
      }
    }
  } catch (err) {
    console.warn('[Demo Setup Warning] Could not verify demo accounts:', err.message);
  }
};
