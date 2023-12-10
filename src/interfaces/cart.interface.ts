import mongoose from 'mongoose';

export interface Cart {
  customer: mongoose.Schema.Types.ObjectId;
  products: Array<{
    product: mongoose.Schema.Types.ObjectId;
    quantity: number;
  }>;
}
