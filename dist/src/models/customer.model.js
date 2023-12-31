"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const address_model_1 = __importDefault(require("./address.model"));
const CustomersSchema = new mongoose_1.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    hashedPassword: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
    },
    isEmailVerified: {
        type: Boolean,
        required: true,
        default: false,
    },
    addresses: [address_model_1.default.schema],
}, { timestamps: true, versionKey: false });
exports.default = (0, mongoose_1.model)('Customer', CustomersSchema);
//# sourceMappingURL=customer.model.js.map