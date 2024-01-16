import ajvInstance from '@/utils/ajvInstance';

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

const productsQueryParams = {
  type: 'object',
  properties: {
    search: {
      type: 'string',
    },
    sort: {
      type: 'string',
      enum: ['asc', 'desc'],
    },
    sortyBy: {
      type: 'string',
      enum: ['name', 'brand', 'price'],
    },
    page: {
      type: 'integer',
      minimum: 1,
    },
    perPage: {
      type: 'integer',
      minimum: 1,
      maximum: 50,
    },
  },
  // If no page is provided we can return the first page
  required: ['perPage'],
};

const compiledProductQueryParams = ajvInstance.compile(productsQueryParams);
const compiledIdSchema = ajvInstance.compile(queryIdSchema);
export { compiledIdSchema, compiledProductQueryParams };
