import { NotFound } from '@/errors';
import { Product } from '@/interfaces/product.interface';
import productModel from '@/models/product.model';
import mongoose from 'mongoose';

class ProductService {
  constructor() {
    this.getProductById = this.getProductById.bind(this);
    this.createProduct = this.createProduct.bind(this);
    this.updateProduct = this.updateProduct.bind(this);
    this.findProductById = this.findProductById.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
  }

  async findProductById(id: string) {
    const product = await productModel.findById(id).exec();
    if (!product) {
      throw new NotFound(`Product with ${id} not found`, 'Product');
    }
    return product;
  }

  async createProduct(product: Product) {
    return productModel.create(product);
  }

  async getProductById(id: string) {
    return this.findProductById(id);
  }

  async updateProduct(id: string, updateData: Partial<Product>) {
    await this.findProductById(id);
    return productModel
      .updateOne(
        {
          _id: new mongoose.Types.ObjectId(id),
        },
        updateData,
      )
      .exec();
  }

  async deleteProduct(id: string) {
    await this.findProductById(id);
    return productModel
      .deleteOne({
        _id: new mongoose.Types.ObjectId(id),
      })
      .exec();
  }
}

export default new ProductService();
