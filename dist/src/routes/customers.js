"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const customer_controller_1 = __importDefault(require("@/controllers/customer.controller"));
const customer_schema_1 = require("@/schemas/customer.schema");
const middlewares_1 = require("@/middlewares");
const router = (0, express_1.Router)();
router.post('/register', (0, middlewares_1.validateRequestBodyMiddleware)(customer_schema_1.compiledCreateSchema), customer_controller_1.default.register);
router.post('/login');
exports.default = router;
//# sourceMappingURL=customers.js.map