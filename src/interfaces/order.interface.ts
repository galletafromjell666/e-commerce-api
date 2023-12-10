import mongoose from 'mongoose';
import { Address } from './address.interface';

export type OrderStatus = 'Pending' | 'Processing' | 'Shipped' | 'Delivered';

export interface Order {
  customer: mongoose.Schema.Types.ObjectId;
  products: Array<{
    product: mongoose.Schema.Types.ObjectId;
    quantity: number;
  }>;
  totalAmount: number;
  shippingAddress: Address;
  orderStatus: OrderStatus;
  createdAt: Date;
}
