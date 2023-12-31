import { logger } from '@/utils';
import { type ValidateFunction } from 'ajv';
import { type Response, type Request, type NextFunction } from 'express';

function validateRequestParamsMiddleware(ajvValidate: ValidateFunction) {
  return async (req: Request, _res: Response, next: NextFunction) => {
    try {
      // eslint-disable-next-line @typescript-eslint/await-thenable
      await ajvValidate(req.params);
      logger.info('running to next');
      return next();
    } catch (err) {
      logger.error('validation error');
      console.log('\n', err, '\n');
      logger.info('calling next with the error');
      throw new Error();
      return next(err);
    }
  };
}

export default validateRequestParamsMiddleware;
