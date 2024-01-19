import ajvInstance from '@/utils/ajvInstance';

const props = {
  search: {
    type: 'string',
    minLength: 5,
    maxLength: 100,
  },
  sort: {
    type: 'string',
    enum: ['asc', 'desc'],
  },
  sortBy: {
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
};

const productsQueryParams = {
  $id: 'api://ajv/query.schema',
  type: 'object',
  properties: props,
  required: ['perPage'],
  additionalProperties: false,
};

const compiledProductQueryParams = ajvInstance.compile(productsQueryParams);
export { compiledProductQueryParams };
