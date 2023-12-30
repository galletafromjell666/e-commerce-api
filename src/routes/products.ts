import productController from '@/controllers/product.controller';
import validateDto from '@/middlewares/validateDto';
import { compiledCreateSchema } from '@/schemas/product.schema';
import { Router } from 'express';

const router = Router();
// all
router.get('/products');
// specific
router.get('/products/:productId');

// create
router.post(
  '/products',
  validateDto(compiledCreateSchema),
  productController.createProduct,
);

// update
router.patch('/products/:productId');

// delete
router.delete('/products/:productId');

export default router;
