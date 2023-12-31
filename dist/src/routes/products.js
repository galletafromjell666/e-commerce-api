"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_controller_1 = __importDefault(require("@/controllers/product.controller"));
const middlewares_1 = require("@/middlewares");
const queryParams_schema_1 = require("@/schemas/common/queryParams.schema");
const product_schema_1 = require("@/schemas/product.schema");
const router = (0, express_1.Router)();
// all
router.get('/', (_req, res) => {
    res.send('hello');
});
// specific
router.get('/:id', (0, middlewares_1.validateRequestParamsMiddleware)(queryParams_schema_1.compiledIdSchema), product_controller_1.default.getProductById);
// create
router.post('/', (0, middlewares_1.validateRequestBodyMiddleware)(product_schema_1.compiledCreateSchema), product_controller_1.default.createProduct);
// update
router.patch('/:productId');
// delete
router.delete('/:productId');
exports.default = router;
//# sourceMappingURL=products.js.map