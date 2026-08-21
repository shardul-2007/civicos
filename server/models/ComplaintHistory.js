import mongoose from 'mongoose';

const complaintHistorySchema = new mongoose.Schema(
  {
    complaint: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Complaint',
      required: true,
      index: true,
    },
    actor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      default: null,
    },
    actorName: {
      type: String,
      default: 'System / Citizen',
    },
    fromStatus: {
      type: String,
      default: null,
    },
    toStatus: {
      type: String,
      required: true,
    },
    note: {
      type: String,
      default: '',
    },
  },
  { timestamps: true }
);

export default mongoose.model('ComplaintHistory', complaintHistorySchema);
