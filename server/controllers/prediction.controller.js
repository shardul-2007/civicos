import Complaint from '../models/Complaint.js';
import Ward from '../models/Ward.js';
import { generateWardPredictions } from '../services/prediction.service.js';

export const getPredictions = async (req, res, next) => {
  try {
    const complaints = await Complaint.find();
    const wards = await Ward.find();

    const predictions = await generateWardPredictions(complaints, wards);

    res.json({
      success: true,
      count: predictions.length,
      data: predictions,
    });
  } catch (error) {
    next(error);
  }
};

export const getWardPrediction = async (req, res, next) => {
  try {
    const wardNum = parseInt(req.params.ward);
    const complaints = await Complaint.find({ ward: wardNum });
    const wardDoc = await Ward.findOne({ number: wardNum });

    const predictions = await generateWardPredictions(complaints, wardDoc ? [wardDoc] : []);

    res.json({
      success: true,
      data: predictions[0] || null,
    });
  } catch (error) {
    next(error);
  }
};
