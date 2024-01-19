import addressSchema from '@/schemas/common/address.schema';
import Ajv from 'ajv/dist/2019';
import addFormats from 'ajv-formats';
import mongoose from 'mongoose';

const ajvInstance = new Ajv({
  allErrors: true,
  /**
   * req.query and req.params properties have strings as values,
   * it is easier to coerce types during validation
   */
  coerceTypes: true,
});

addFormats(ajvInstance);

// Add formats here
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

// Add here schemas that are referenced in more than one schema
// Used by customer and order
ajvInstance.addSchema(addressSchema);

export default ajvInstance;
