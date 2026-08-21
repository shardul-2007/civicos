import { analyzeComplaint } from '../services/ai.service.js';

export const analyzeText = async (req, res, next) => {
  try {
    const { description, title } = req.body;

    if (!description && !title) {
      return res.status(400).json({ success: false, message: 'Complaint text is required' });
    }

    const aiResult = await analyzeComplaint(description, title);

    res.json({
      success: true,
      data: aiResult,
    });
  } catch (error) {
    next(error);
  }
};
