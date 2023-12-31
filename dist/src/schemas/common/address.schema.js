"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const addressSchema = {
    $id: 'api://ajv/address.schema',
    type: 'object',
    properties: {
        country: {
            type: 'string',
            minLength: 2,
            maxLength: 50,
        },
        street1: {
            type: 'string',
            minLength: 2,
            maxLength: 200,
        },
        street2: {
            type: 'string',
            minLength: 2,
            maxLength: 200,
        },
        city: {
            type: 'string',
            minLength: 2,
            maxLength: 50,
        },
        state: {
            type: 'string',
            minLength: 2,
            maxLength: 50,
        },
        zipCode: {
            type: 'string',
            minLength: 2,
            maxLength: 10,
        },
        complement: {
            type: 'string',
            minLength: 2,
            maxLength: 250,
            nullable: true,
        },
    },
    required: ['country', 'street1', 'city', 'state', 'zipCode'],
};
// it is only used as a reference for order and user
exports.default = addressSchema;
//# sourceMappingURL=address.schema.js.map