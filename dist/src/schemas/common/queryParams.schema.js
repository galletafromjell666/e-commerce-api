"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.compiledIdSchema = void 0;
const ajvInstance_1 = __importDefault(require("@/utils/ajvInstance"));
// used in /:id
const queryIdSchema = {
    $async: true,
    type: 'object',
    properties: {
        id: {
            type: 'string',
            format: 'mongoObjectId',
        },
    },
    required: ['id'],
    additionalProperties: false,
};
const compiledIdSchema = ajvInstance_1.default.compile(queryIdSchema);
exports.compiledIdSchema = compiledIdSchema;
//# sourceMappingURL=queryParams.schema.js.map