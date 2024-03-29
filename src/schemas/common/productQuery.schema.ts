import ajvInstance from '@/utils/ajvInstance';

const props = {
  search: {
    type: 'string',
    minLength: 1,
    maxLength: 20,
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
  dependentRequired: {
    sort: ['sortBy'],
    sortBy: ['sort'],
  },
  required: ['perPage'],
  additionalProperties: false,
};

const compiledProductQueryParams = ajvInstance.compile(productsQueryParams);
export { compiledProductQueryParams };
