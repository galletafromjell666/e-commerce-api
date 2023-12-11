import Ajv, { JSONSchemaType } from 'ajv';
import addFormats from 'ajv-formats';
import { Address } from '@/interfaces/address.interface';

const ajvInstance = new Ajv({
  allErrors: true,
});

addFormats(ajvInstance);

const schema = {
  $id: 'address',
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
};

const compiledSchema = ajvInstance.compile(schema);
export default compiledSchema;
