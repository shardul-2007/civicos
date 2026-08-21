import express from 'express';
import { getWards } from '../controllers/ward.controller.js';

const router = express.Router();

router.get('/', getWards);

export default router;
