import express from 'express';
import { getPredictions, getWardPrediction } from '../controllers/prediction.controller.js';

const router = express.Router();

router.get('/', getPredictions);
router.get('/:ward', getWardPrediction);

export default router;
