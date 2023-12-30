import { Product } from '@/interfaces/product.interface';
import productModel from '@/models/product.model';

class ProductService {
  constructor() {
    this.getProductById = this.getProductById.bind(this);
    this.createProduct = this.createProduct.bind(this);
  }

  async createProduct(product: Product) {
    return productModel.create(product);
  }

  async getProductById(id: string) {
    return productModel.findById(id);
  }
}

export default new ProductService();
