import mongoose, { Schema, model } from 'mongoose';
import type { Comment } from '@/interfaces/comment.interface';

const commentSchema = new Schema<Comment>(
  {
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Customer',
    },
    description: {
      type: String,
    },
    rating: {
      type: Number,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: false, versionKey: false },
);

export default model('Comment', commentSchema);
