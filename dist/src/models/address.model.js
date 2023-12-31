"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const addressSchema = new mongoose_1.Schema({
    isPrimaryAddress: {
        required: true,
        type: Boolean,
        default: false,
    },
    country: {
        type: String,
        required: true,
    },
    street1: {
        type: String,
    },
    street2: {
        type: String,
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    zipCode: {
        type: String,
    },
    complement: {
        type: String,
    },
});
exports.default = (0, mongoose_1.model)('Address', addressSchema);
//# sourceMappingURL=address.model.js.map