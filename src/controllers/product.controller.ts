import { Product } from '@/interfaces/product.interface';
import ProductService from '@/services/product.service';
import { logger } from '@/utils';
import { type Request, type Response } from 'express';

class ProductController {
  constructor() {
    this.getProductById = this.getProductById.bind(this);
  }

  async createProduct(
    req: Request<unknown, Response, Product>,
    resp: Response,
  ) {
    try {
      const response = await ProductService.createProduct(req.body);
      resp.status(200).send(response);
    } catch (e) {
      logger.info(e);
    }
  }

  async getProductById(req: Request, resp: Response) {
    try {
      const { id } = req.params;
      const response = await ProductService.getProductById(id);
      resp.status(200).send(response);
    } catch (e) {
      logger.info(e);
    }
  }
}
export default new ProductController();
