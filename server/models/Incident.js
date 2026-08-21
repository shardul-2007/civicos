import mongoose from 'mongoose';

const locationSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['Point'],
    default: 'Point',
  },
  coordinates: {
    type: [Number], // [longitude, latitude]
    required: true,
  },
}, { _id: false });

const incidentSchema = new mongoose.Schema(
  {
    incidentId: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    title: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    severity: {
      type: String,
      enum: ['CRITICAL', 'HIGH', 'MEDIUM', 'LOW'],
      default: 'HIGH',
    },
    complaints: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Complaint',
      },
    ],
    location: {
      type: locationSchema,
      required: true,
    },
    address: {
      type: String,
      default: '',
    },
    ward: {
      type: Number,
      default: 1,
    },
    confidence: {
      type: Number,
      default: 85,
    },
    status: {
      type: String,
      enum: ['ACTIVE', 'INVESTIGATING', 'RESOLVED'],
      default: 'ACTIVE',
    },
  },
  { timestamps: true }
);

incidentSchema.index({ location: '2dsphere' });

export default mongoose.model('Incident', incidentSchema);
