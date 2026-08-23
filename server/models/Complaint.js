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

const complaintSchema = new mongoose.Schema(
  {
    trackingCode: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    citizen: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      default: null,
    },
    citizenName: {
      type: String,
      required: true,
    },
    citizenEmail: {
      type: String,
      required: true,
    },
    citizenPhone: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default: '',
    },
    category: {
      type: String,
      required: true,
      enum: ['Road Damage', 'Water Leakage', 'Drainage', 'Garbage', 'Streetlight', 'Public Safety', 'Pothole', 'Sewage', 'Tree/Parks', 'Other'],
      index: true,
    },
    subCategory: {
      type: String,
      default: 'General',
    },
    severity: {
      type: String,
      enum: ['CRITICAL', 'HIGH', 'MEDIUM', 'LOW'],
      default: 'MEDIUM',
      index: true,
    },
    priorityScore: {
      type: Number,
      default: 50,
      min: 0,
      max: 100,
    },
    safetyRisk: {
      type: Boolean,
      default: false,
    },
    department: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Department',
      index: true,
    },
    departmentName: {
      type: String,
      default: 'General Services',
    },
    assignedOfficer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      default: null,
    },
    ward: {
      type: Number,
      required: true,
      index: true,
    },
    location: {
      type: locationSchema,
      required: true,
    },
    latitude: {
      type: Number,
      default: null,
    },
    longitude: {
      type: Number,
      default: null,
    },
    city: {
      type: String,
      default: '',
    },
    district: {
      type: String,
      default: '',
    },
    state: {
      type: String,
      default: '',
    },
    pincode: {
      type: String,
      default: '',
    },
    country: {
      type: String,
      default: 'India',
    },
    accuracy: {
      type: Number,
      default: null,
    },
    address: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['SUBMITTED', 'ASSIGNED', 'ACCEPTED', 'IN_PROGRESS', 'RESOLVED', 'REJECTED'],
      default: 'SUBMITTED',
      index: true,
    },
    duplicateCount: {
      type: Number,
      default: 0,
    },
    incidentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Incident',
      default: null,
    },
    dueAt: {
      type: Date,
      required: true,
    },
    resolvedAt: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true }
);

// Indexes
complaintSchema.index({ location: '2dsphere' });
complaintSchema.index({ createdAt: -1 });

export default mongoose.model('Complaint', complaintSchema);
