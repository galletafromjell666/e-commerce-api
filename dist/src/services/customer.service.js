"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerCustomer = void 0;
const customer_model_1 = __importDefault(require("@/models/customer.model"));
const bcrypt_1 = require("@/utils/bcrypt");
// import { Auth } from '@/interfaces/auth.interface';
// import { generateToken } from '@/utils/bcrypt';
const registerCustomer = async (customer) => {
    const isRegistered = await customer_model_1.default.findOne({ email: customer.email });
    if (isRegistered)
        return 'ALREADY_REGISTERED';
    const hashedPassword = await (0, bcrypt_1.encrypt)(customer.password);
    const registerNewUser = await customer_model_1.default.create({
        email: customer.email,
        hashedPassword,
        firstName: customer.firstName,
        lastName: customer.lastName,
        isEmailVerified: false,
    });
    return registerNewUser;
};
exports.registerCustomer = registerCustomer;
//# sourceMappingURL=customer.service.js.map