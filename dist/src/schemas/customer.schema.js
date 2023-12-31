"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.compiledLoginSchema = exports.compiledCreateSchema = exports.compiledPathSchema = void 0;
const ajvInstance_1 = __importDefault(require("@/utils/ajvInstance"));
const baseProperties = {
    firstName: {
        type: 'string',
        minLength: 2,
        maxLength: 100,
    },
    lastName: {
        type: 'string',
        minLength: 2,
        maxLength: 100,
    },
    email: {
        type: 'string',
        minLength: 3,
        maxLength: 100,
    },
    password: {
        // unhashed
        type: 'string',
        minLength: 3,
        maxLength: 100,
    },
    addresses: {
        type: 'array',
        items: {
            $ref: 'address.schema#',
        },
    },
};
const createSchema = {
    $id: 'api://ajv/customer.create.schema',
    type: 'object',
    properties: baseProperties,
    required: ['firstName', 'lastName', 'email', 'password'],
    additionalProperties: false,
};
const patchSchema = {
    $id: 'api://ajv/customer.patch.schema',
    type: 'object',
    properties: baseProperties,
    additionalProperties: false,
};
const loginSchema = {
    $id: 'api://ajv/customer.login.schema',
    type: 'object',
    properties: baseProperties,
    required: ['email', 'password'],
    additionalProperties: false,
};
const compiledCreateSchema = ajvInstance_1.default.compile(createSchema);
exports.compiledCreateSchema = compiledCreateSchema;
const compiledPathSchema = ajvInstance_1.default.compile(patchSchema);
exports.compiledPathSchema = compiledPathSchema;
const compiledLoginSchema = ajvInstance_1.default.compile(loginSchema);
exports.compiledLoginSchema = compiledLoginSchema;
//# sourceMappingURL=customer.schema.js.map