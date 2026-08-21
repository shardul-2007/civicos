import mongoose from 'mongoose';

const departmentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    code: {
      type: String,
      required: true,
      unique: true,
      uppercase: true,
    },
    description: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: 'Building2',
    },
    color: {
      type: String,
      default: '#3b82f6',
    },
  },
  { timestamps: true }
);

export default mongoose.model('Department', departmentSchema);
