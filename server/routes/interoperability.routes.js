import express from 'express';
import {
  getServices,
  getLogs,
  dispatchComplaint,
  simulateDepartmentStatusUpdate,
} from '../controllers/interoperability.controller.js';

const router = express.Router();

router.get('/services', getServices);
router.get('/logs', getLogs);
router.post('/dispatch/:code', dispatchComplaint);
router.post('/simulate-dept-status', simulateDepartmentStatusUpdate);

export default router;
