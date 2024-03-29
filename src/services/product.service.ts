/* eslint-disable @typescript-eslint/naming-convention */
import { NotFound } from '@/errors';
import { Product } from '@/interfaces/product.interface';
import productModel from '@/models/product.model';
import mongoose from 'mongoose';

// TODO: move this type to a global file or so
export interface ProductsQueryParams {
  search?: string;
  sortBy?: 'name' | 'brand' | 'price';
  sort?: 'asc' | 'desc';
  page?: number;
  perPage: number;
}

// https://stackoverflow.com/a/38427476/17212989
function escapeRegex(text: string): string {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}
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

  async getProducts({
    search,
    sort,
    sortBy,
    page = 1,
    perPage,
  }: ProductsQueryParams) {
    let sortOptions;
    if (sort !== undefined) {
      const sortDirection = sort === 'asc' ? 1 : -1;
      sortOptions = { [sortBy as string]: sortDirection };
    }
    let filterQuery = {};
    if (search) {
      const regex = new RegExp(escapeRegex(search), 'i');
      filterQuery = {
        $or: [{ name: { $regex: regex } }, { brand: { $regex: regex } }],
      };
    }
    return productModel.paginate(filterQuery, {
      page,
      limit: perPage,
      sort: sortOptions,
    });
  }
}

export default new ProductService();
