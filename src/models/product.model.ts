import mongoose, { Schema } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';
import type { Product } from '@/interfaces/product.interface';

const productSchema = new Schema(
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

productSchema.plugin(mongoosePaginate);

interface ProductDocument extends mongoose.Document, Product {}
const model = mongoose.model<
  ProductDocument,
  mongoose.PaginateModel<ProductDocument>
>('Product', productSchema);

export default model;
