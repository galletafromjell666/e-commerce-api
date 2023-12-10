import mongoose, { Schema, model } from 'mongoose';
import type { Order } from '@/interfaces/order.interface';
import AddressModel from './address.model';

const orderSchema = new Schema<Order>({
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer',
  },
  products: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
  totalAmount: Number,
  shippingAddress: AddressModel.schema,
  orderStatus: {
    type: String,
    enum: ['Pending', 'Processing', 'Shipped', 'Delivered'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default model('Order', orderSchema);
