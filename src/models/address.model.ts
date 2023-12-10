import { Schema, model } from 'mongoose';
import type { Address } from '@/interfaces/address.interface';

const addressSchema = new Schema<Address>({
  isPrimaryAddress: {
    required: true,
    type: Boolean,
    default: false,
  },
  country: {
    type: String,
    required: true,
  },
  street1: {
    type: String,
  },
  street2: {
    type: String,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  zipCode: {
    type: String,
  },
  complement: {
    type: String,
  },
});

export default model('Address', addressSchema);
