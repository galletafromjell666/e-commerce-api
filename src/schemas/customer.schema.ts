import ajvInstance from '@/utils/ajvInstance';
import addressSchema from './common/address.schema';

ajvInstance.addSchema(addressSchema);

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

const compiledCreateSchema = ajvInstance.compile(createSchema);
const compiledPathSchema = ajvInstance.compile(patchSchema);
const compiledLoginSchema = ajvInstance.compile(loginSchema);
export { compiledPathSchema, compiledCreateSchema, compiledLoginSchema };
