import { Schema, model } from 'mongoose';
import type { Customer } from '@/interfaces/customer.interface';
import AddressModel from './address.model';

const CustomersSchema = new Schema<Customer>(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    hashedPassword: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
    },
    isEmailVerified: {
      type: Boolean,
      required: true,
      default: false,
    },
    addresses: [AddressModel.schema],
  },
  { timestamps: true, versionKey: false },
);

export default model('Customer', CustomersSchema);
