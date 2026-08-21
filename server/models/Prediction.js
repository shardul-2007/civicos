import mongoose from 'mongoose';

const predictionSchema = new mongoose.Schema(
  {
    ward: {
      type: Number,
      required: true,
      index: true,
    },
    wardName: {
      type: String,
      default: '',
    },
    category: {
      type: String,
      required: true,
    },
    riskScore: {
      type: Number,
      required: true, // 0 - 100
    },
    predictionWindow: {
      type: String,
      default: 'Next 7 days',
    },
    recommendation: {
      type: String,
      required: true,
    },
    factors: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model('Prediction', predictionSchema);
