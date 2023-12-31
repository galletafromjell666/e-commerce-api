"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const address_schema_1 = __importDefault(require("@/schemas/common/address.schema"));
const ajv_1 = __importDefault(require("ajv"));
const ajv_formats_1 = __importDefault(require("ajv-formats"));
const mongoose_1 = __importDefault(require("mongoose"));
const ajvInstance = new ajv_1.default({
    allErrors: true,
});
(0, ajv_formats_1.default)(ajvInstance);
// Add formats here
ajvInstance.addFormat('mongoObjectId', {
    type: 'string',
    validate: (data) => {
        try {
            const objectID = new mongoose_1.default.Types.ObjectId(data);
            const objectIDString = objectID.toString();
            return objectIDString === data;
        }
        catch (e) {
            return false;
        }
    },
});
// Add here schemas that are referenced in more than one schema
// Used by customer and order
ajvInstance.addSchema(address_schema_1.default);
exports.default = ajvInstance;
//# sourceMappingURL=ajvInstance.js.map