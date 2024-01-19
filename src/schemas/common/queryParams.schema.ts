import ajvInstance from '@/utils/ajvInstance';

// used in /:id
const queryIdSchema = {
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

const compiledIdSchema = ajvInstance.compile(queryIdSchema);
export { compiledIdSchema };
