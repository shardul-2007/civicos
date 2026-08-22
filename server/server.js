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
const healthHandler = (req, res) => {
  res.json({
    status: 'OPERATIONAL',
    service: 'CivicOS AI Municipal Command API',
    timestamp: new Date().toISOString(),
    aiEngine: process.env.AI_API_KEY ? 'Gemini 2.5 Active' : 'Deterministic Rule Engine Fallback',
  });
};
app.get('/api/health', healthHandler);
app.get('/health', healthHandler);

// Dual Mounting: Mount both /api/path and /path so Vercel Serverless Functions match regardless of path prefix stripping
app.use('/api/auth', authRoutes);
app.use('/auth', authRoutes);

app.use('/api/complaints', complaintRoutes);
app.use('/complaints', complaintRoutes);

app.use('/api/dashboard', dashboardRoutes);
app.use('/dashboard', dashboardRoutes);

app.use('/api/analytics', analyticsRoutes);
app.use('/analytics', analyticsRoutes);

app.use('/api/predictions', predictionRoutes);
app.use('/predictions', predictionRoutes);

app.use('/api/incidents', incidentRoutes);
app.use('/incidents', incidentRoutes);

app.use('/api/departments', departmentRoutes);
app.use('/departments', departmentRoutes);

app.use('/api/wards', wardRoutes);
app.use('/wards', wardRoutes);

app.use('/api/ai', aiRoutes);
app.use('/ai', aiRoutes);

// Global Error Handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

if (process.env.VERCEL !== '1') {
  app.listen(PORT, () => {
    console.log(`CivicOS Command API running on http://localhost:${PORT}`);
  });
}

export default app;