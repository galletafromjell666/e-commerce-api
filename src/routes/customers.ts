import { register } from '@/controllers/customer.controller';
import validateDto from '@/middlewares/validateDto';
import { compiledCreateSchema } from '@/schemas/customer.schema';
import { Router } from 'express';

const router = Router();
router.post('/register', validateDto(compiledCreateSchema), register);
router.post('/login');

export default router;
