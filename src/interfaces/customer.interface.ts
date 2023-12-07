import { Address } from './address.interface';

// https://hackernoon.com/building-a-mongodb-nosql-e-commerce-data-model-fn8135bc
export interface Customer {
  firstName: string;
  lastName: string;
  hashedPassword: string;
  email: string;
  isEmailVerified: boolean;
  address: Address;
  shippingAddresses: Address[];
}
