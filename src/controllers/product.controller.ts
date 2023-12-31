import { Product } from '@/interfaces/product.interface';
import ProductService from '@/services/product.service';
import { type Request, type Response, type NextFunction } from 'express';

class ProductController {
  constructor() {
    this.createProduct = this.createProduct.bind(this);
    this.getProductById = this.getProductById.bind(this);
  }

  async createProduct(
    req: Request<unknown, Response, Product>,
    resp: Response,
    next: NextFunction,
  ) {
    try {
      const response = await ProductService.createProduct(req.body);
      resp.status(200).send(response);
    } catch (e) {
      next(e);
    }
  }

  async getProductById(req: Request, resp: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const response = await ProductService.getProductById(id);
      resp.status(200).send(response);
    } catch (e) {
      next(e);
    }
  }
}
export default new ProductController();
