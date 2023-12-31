import { Router } from 'express';
import customerController from '@/controllers/customer.controller';
import { compiledCreateSchema } from '@/schemas/customer.schema';
import { validateRequestBodyMiddleware } from '@/middlewares';

const router = Router();

router.post(
  '/register',
  validateRequestBodyMiddleware(compiledCreateSchema),
  customerController.register,
);

router.post('/login');

export default router;
