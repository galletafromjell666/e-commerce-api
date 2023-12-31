import { type ValidateFunction } from 'ajv';
import { type Response, type Request, type NextFunction } from 'express';

function validateRequestBodyMiddleware(ajvValidate: ValidateFunction) {
  return (req: Request, _res: Response, next: NextFunction) => {
    try {
      ajvValidate(req.body);
      return next();
    } catch (e) {
      return next(e);
    }
  };
}

export default validateRequestBodyMiddleware;
