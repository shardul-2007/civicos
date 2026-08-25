import mongoose from 'mongoose';
import User from '../models/User.js';

let isConnected = false;

// Disable Mongoose command buffering globally so operations fail/fallback instantly instead of hanging for 10 seconds
mongoose.set('bufferCommands', false);

export const connectDB = async () => {
  if (isConnected || mongoose.connection.readyState === 1) {
    return;
  }

  try {
    const conn = await mongoose.connect(process.env.MONGO_URI || process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/civicos', {
      serverSelectionTimeoutMS: 2000,
      bufferCommands: false,
    });
    isConnected = true;
    console.log(`[MongoDB] Connected: ${conn.connection.host}`);
    
    // Idempotent check for demo accounts
    await ensureDemoAccounts();
  } catch (error) {
    console.warn(`[MongoDB Warning] Connection deferred: ${error.message}. Operating in resilient in-memory fallback mode.`);
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
        await User.create(acc);
        console.log(`[Demo Setup] Created missing account: ${acc.email} (${acc.role})`);
      } else {
        const matches = await user.matchPassword(acc.password);
        if (!matches) {
          user.password = acc.password;
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
