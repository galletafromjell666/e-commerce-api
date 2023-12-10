import mongoose from 'mongoose';

export interface Comment {
  customer: mongoose.Schema.Types.ObjectId;
  description: string;
  rating: number;
  createdAt: Date;
}
