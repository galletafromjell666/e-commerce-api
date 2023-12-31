"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = require("@/errors");
const product_model_1 = __importDefault(require("@/models/product.model"));
const mongoose_1 = __importDefault(require("mongoose"));
class ProductService {
    constructor() {
        this.getProductById = this.getProductById.bind(this);
        this.createProduct = this.createProduct.bind(this);
        this.updateProduct = this.updateProduct.bind(this);
        this.findProductById = this.findProductById.bind(this);
        this.deleteProduct = this.deleteProduct.bind(this);
    }
    async findProductById(id) {
        const product = await product_model_1.default.findById(id).exec();
        if (!product) {
            throw new errors_1.NotFound(`Product with ${id} not found`, 'Product');
        }
        return product;
    }
    async createProduct(product) {
        return product_model_1.default.create(product);
    }
    async getProductById(id) {
        return this.findProductById(id);
    }
    async updateProduct(id, updateData) {
        await this.findProductById(id);
        return product_model_1.default
            .updateOne({
            _id: new mongoose_1.default.Types.ObjectId(id),
        }, updateData)
            .exec();
    }
    async deleteProduct(id) {
        await this.findProductById(id);
        return product_model_1.default
            .deleteOne({
            _id: new mongoose_1.default.Types.ObjectId(id),
        })
            .exec();
    }
}
exports.default = new ProductService();
//# sourceMappingURL=product.service.js.map