import express from 'express';
import { getIncidents, mergeIncidents } from '../controllers/incident.controller.js';
import { protect, authorize } from '../middleware/auth.js';

const router = express.Router();

router.get('/', getIncidents);
router.post('/merge', protect, authorize('OFFICER', 'ADMIN'), mergeIncidents);

export default router;
