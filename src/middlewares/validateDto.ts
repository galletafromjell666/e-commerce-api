import { type ValidateFunction } from 'ajv';
import { type Response, type Request, type NextFunction } from 'express';

function validateDto(ajvValidate: ValidateFunction) {
  return (req: Request, res: Response, next: NextFunction) => {
    const valid = ajvValidate(req.body);
    if (!valid) {
      const { errors } = ajvValidate;
      return res.status(400).send(errors);
    }
    return next();
  };
}

export default validateDto;
