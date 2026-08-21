import express from 'express';
import { getOverview } from '../controllers/dashboard.controller.js';
import { protect, optionalProtect, authorize } from '../middleware/auth.js';

const router = express.Router();

// Allow optional protect so municipal command overview can load city metrics smoothly
router.get('/overview', optionalProtect, getOverview);
router.get('/', optionalProtect, getOverview);

export default router;
