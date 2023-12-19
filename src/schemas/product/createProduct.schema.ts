import ajvInstance from '@/utils/ajvInstance';

const featuresSchema = {
  $id: 'api://ajv/feature.schema',
  type: 'object',
  properties: {
    title: {
      type: 'string',
      minLength: 5,
      maxLength: 100,
    },
    description: {
      type: 'string',
      minLength: 5,
      maxLength: 100,
    },
  },
  required: ['title', 'description'],
};

ajvInstance.addSchema(featuresSchema);

const schema = {
  $id: 'api://ajv/create_product.schema',
  type: 'object',
  properties: {
    name: {
      type: 'string',
      minLength: 2,
      maxLength: 100,
    },
    brand: {
      type: 'string',
      minLength: 2,
      maxLength: 100,
    },
    price: {
      type: 'float32',
    },
    quantityAvailable: {
      type: 'uint16',
    },
    features: {
      type: 'array',
      items: {
        $ref: 'address.schema#',
      },
    },
    comments: {
      type: 'array',
      items: {
        $ref: 'feature.schema#',
      },
    },
  },
  required: ['name', 'brand', 'price', 'quantityAvailable', 'features'],
  additionalProperties: false,
};

const compiledSchema = ajvInstance.compile(schema);
export default compiledSchema;
