import { Schema, model } from 'mongoose';
import type { Address } from '@/interfaces/address.interface';

const adressSchema = new Schema<Address>({
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

export default model('adress', adressSchema);
