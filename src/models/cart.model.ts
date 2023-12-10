import mongoose, { Schema, model } from 'mongoose';
import type { Cart } from '@/interfaces/cart.interface';

const CartSchema = new Schema<Cart>({
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer',
  },
  products: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
      },
      quantity: Number,
    },
  ],
});

export default model('Cart', CartSchema);
