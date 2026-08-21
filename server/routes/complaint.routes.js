import express from 'express';
import {
  createComplaint,
  getComplaints,
  getComplaintById,
  trackComplaint,
  getMyComplaints,
  updateComplaintStatus,
  verifyResolution,
  assignComplaint,
  getOfficerComplaints,
} from '../controllers/complaint.controller.js';
import { protect, optionalProtect, authorize } from '../middleware/auth.js';

const router = express.Router();

// Public & Citizen routes
router.get('/track/:trackingCode', trackComplaint);
router.post('/', optionalProtect, createComplaint);
router.get('/my', protect, getMyComplaints);
router.patch('/:id/verify', optionalProtect, verifyResolution);

// Officer Queue & General Complaints list
router.get('/officer', optionalProtect, getOfficerComplaints);
router.get('/', optionalProtect, getComplaints);
router.get('/:id', getComplaintById);

// Status and Assignment updates
router.patch('/:id/status', optionalProtect, updateComplaintStatus);
router.patch('/:id/assign', optionalProtect, assignComplaint);

export default router;
