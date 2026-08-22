import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import { errorHandler } from './middleware/error.js';

import authRoutes from './routes/auth.routes.js';
import complaintRoutes from './routes/complaint.routes.js';
import dashboardRoutes from './routes/dashboard.routes.js';
import analyticsRoutes from './routes/analytics.routes.js';
import predictionRoutes from './routes/prediction.routes.js';
import incidentRoutes from './routes/incident.routes.js';
import departmentRoutes from './routes/department.routes.js';
import wardRoutes from './routes/ward.routes.js';
import aiRoutes from './routes/ai.routes.js';

dotenv.config();

// Connect MongoDB
connectDB();

const app = express();

// Middleware
app.use(helmet({ crossOriginResourcePolicy: false }));
app.use(cors({ origin: process.env.CLIENT_URL || '*', credentials: true }));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Health Check API
app.get('/api/health', (req, res) => {
  res.json({
    status: 'OPERATIONAL',
    service: 'CivicOS AI Municipal Command API',
    timestamp: new Date().toISOString(),
    aiEngine: process.env.AI_API_KEY ? 'Gemini 2.5 Active' : 'Deterministic Rule Engine Fallback',
  });
});

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/complaints', complaintRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/analytics', analyticsRoutes);
app.use('/api/predictions', predictionRoutes);
app.use('/api/incidents', incidentRoutes);
app.use('/api/departments', departmentRoutes);
app.use('/api/wards', wardRoutes);
app.use('/api/ai', aiRoutes);

// Global Error Handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

// Local development only
if (process.env.VERCEL !== '1') {
  app.listen(PORT, () => {
    console.log(`=======================================================`);
    console.log(`  🚀 CivicOS Command API running on http://localhost:${PORT}`);
    console.log(`  ● Status: SYSTEM OPERATIONAL`);
    console.log(`  ● AI Mode: ${process.env.AI_API_KEY ? 'Gemini AI API' : 'Deterministic NLP Fallback'}`);
    console.log(`=======================================================`);
  });
}

export default app;