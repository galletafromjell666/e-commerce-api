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
};

// it is only used as a reference for order and user
export default addressSchema;
