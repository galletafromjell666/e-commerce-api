import { ErrorObject } from 'ajv';

class ValidationError extends Error {
  errors: ErrorObject[];

  constructor(errors: ErrorObject[]) {
    super('Validation Error');
    this.errors = errors;
  }
}

export default ValidationError;
