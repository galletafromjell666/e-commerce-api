import ajvInstance from '@/utils/ajvInstance';

const productFeature = {
  $id: 'api://ajv/product.feature.schema',
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

ajvInstance.addSchema(productFeature);

const baseProperties = {
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
  price: { type: 'number' },
  quantityAvailable: {
    type: 'integer',
  },
  features: {
    type: 'array',
    items: {
      $ref: 'product.feature.schema#',
    },
  },
};
const createSchema = {
  $id: 'api://ajv/product.create.schema',
  type: 'object',
  properties: baseProperties,
  required: ['name', 'brand', 'price', 'quantityAvailable', 'features'],
  additionalProperties: false,
};

const patchSchema = {
  $id: 'api://ajv/product.patch.schema',
  type: 'object',
  properties: baseProperties,
  // This will validate that the body has at least one of the following properties
  minProperties: 1,
  additionalProperties: false,
};

const compiledCreateSchema = ajvInstance.compile(createSchema);
const compiledPathSchema = ajvInstance.compile(patchSchema);
export { compiledCreateSchema, compiledPathSchema };
