import mongoose, { Schema, model } from 'mongoose';
import type { Product } from '@/interfaces/product.interface';

const productSchema = new Schema<Product>(
  {
    name: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    quantityAvailable: {
      type: Number,
      required: true,
      default: 0,
    },
    features: [
      {
        title: String,
        description: String,
      },
    ],
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment',
      },
    ],
  },
  { timestamps: true, versionKey: false },
);

export default model('Product', productSchema);
