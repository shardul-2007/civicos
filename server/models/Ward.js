import mongoose from 'mongoose';

const wardSchema = new mongoose.Schema(
  {
    number: {
      type: Number,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    population: {
      type: Number,
      default: 25000,
    },
    geometry: {
      type: Object,
      default: null,
    },
    complaintCount: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export default mongoose.model('Ward', wardSchema);
