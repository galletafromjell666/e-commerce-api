import { register } from '@/controllers/customer.controller';
import validateDto from '@/middlewares/validateDto';
import createCustomerSchema from '@/schemas/customer/createCustomer.schema';
import { Router } from 'express';

const router = Router();
router.post('/register', validateDto(createCustomerSchema), register);
router.post('/login');

export default router;
