import Ajv, { JSONSchemaType } from 'ajv';
import addFormats from 'ajv-formats';
import mongoose from 'mongoose';
import { Customer } from '@/interfaces/customer.interface';

const ajvInstance = new Ajv({
  allErrors: true,
});

addFormats(ajvInstance);

// Taken from https://stackoverflow.com/a/70848445/17212989
ajvInstance.addFormat('mongoObjectId', {
  type: 'string',
  validate: (data) => {
    try {
      const objectID = new mongoose.Types.ObjectId(data);
      const objectIDString = objectID.toString();
      return objectIDString === data;
    } catch (e) {
      return false;
    }
  },
});
const schema = {
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
    hashedPassword: {
      type: 'string',
      nullable: true,
    },
    isEmailVerified: {
      type: 'boolean',
      nullable: true,
    },
    addresses: {
      type: 'array',
      items: {
        $ref: 'address',
      },
    },
  },
  required: ['firstName'],
  additionalProperties: false,
};

const compiledSchema = ajvInstance.compile(schema);
export default compiledSchema;
