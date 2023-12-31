"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_service_1 = __importDefault(require("@/services/product.service"));
class ProductController {
    constructor() {
        this.createProduct = this.createProduct.bind(this);
        this.getProductById = this.getProductById.bind(this);
    }
    async createProduct(req, resp, next) {
        try {
            const response = await product_service_1.default.createProduct(req.body);
            resp.status(200).send(response);
        }
        catch (e) {
            next(e);
        }
    }
    async getProductById(req, resp, next) {
        try {
            const { id } = req.params;
            const response = await product_service_1.default.getProductById(id);
            resp.status(200).send(response);
        }
        catch (e) {
            next(e);
        }
    }
}
exports.default = new ProductController();
//# sourceMappingURL=product.controller.js.map