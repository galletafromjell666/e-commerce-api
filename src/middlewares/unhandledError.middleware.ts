import { ValidationError } from 'ajv';
import { Duplicate, NotFound } from '@/errors';
import { logger } from '@/utils';
import { type Response, type Request, type NextFunction } from 'express';

// TODO: Add a type for this enviroment variable
const ENV = <string>process.env.ENV;

function unhandledErrorMiddleware(
  e: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
) {
  let statusCode = 500;
  let type = 'Server Error';
  let message = 'Internal server Error, Please try again later';
  let details;
  let resource;
  let parsedStack;

  logger.error(`Error handler middleware: ${e?.message}`);

  if (e.stack && ENV === 'DEV') {
    parsedStack = e.stack.split('\n');
  }

  if (e instanceof Duplicate) {
    statusCode = 409;
    type = 'Client Error';
    message = e.message;
    resource = e.resource;
  } else if (e instanceof NotFound) {
    statusCode = 404;
    type = 'Client Error';
    message = e.message;
    resource = e.resource;
  } else if (e instanceof ValidationError) {
    statusCode = 422;
    type = 'Client Error';
    message = 'Unprocessable Content';
    details = e.errors.map((schemaError) => ({
      path: schemaError.instancePath,
      params: schemaError.params,
      message: schemaError.message,
      data: schemaError.data,
    }));
  }

  const errorResponse = {
    type,
    message,
    details,
    resource,
    detailed:
      ENV === 'DEV'
        ? e.message
        : 'Detailed error message  only available in development mode',
    stack:
      ENV === 'DEV'
        ? parsedStack
        : 'Detailed error stack  only available in development mode',
    time: Date.now(),
  };

  return res.status(statusCode).send(errorResponse);
}

export default unhandledErrorMiddleware;
