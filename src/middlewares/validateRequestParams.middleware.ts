import { type ValidateFunction } from 'ajv';
import { type Response, type Request, type NextFunction } from 'express';

function validateRequestParamsMiddleware(ajvValidate: ValidateFunction) {
  return async (req: Request, _res: Response, next: NextFunction) => {
    try {
      // eslint-disable-next-line @typescript-eslint/await-thenable
      await ajvValidate(req.params);

      return next();
    } catch (err) {
      return next(err);
    }
  };
}

export default validateRequestParamsMiddleware;
