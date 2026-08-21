import express from 'express';
import { getHotspots, getDepartmentPerformance, getSLAMetrics } from '../controllers/analytics.controller.js';

const router = express.Router();

router.get('/hotspots', getHotspots);
router.get('/departments', getDepartmentPerformance);
router.get('/sla', getSLAMetrics);

export default router;
