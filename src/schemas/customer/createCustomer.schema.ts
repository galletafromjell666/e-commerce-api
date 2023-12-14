import ajvInstance from '@/utils/ajvInstance';
import addressSchema from '../common/address.schema';

ajvInstance.addSchema(addressSchema);

const schema = {
  $id: 'api://ajv/create_customer.schema',
  type: 'object',
  properties: {
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
  },
  required: ['firstName', 'lastName', 'email', 'password'],
  additionalProperties: false,
};

const compiledSchema = ajvInstance.compile(schema);
export default compiledSchema;
