import { Router } from 'express';
import productController from '@/controllers/product.controller';
import {
  unhandledErrorMiddleware,
  validateRequestBodyMiddleware,
  validateRequestParamsMiddleware,
} from '@/middlewares';
import { compiledIdSchema } from '@/schemas/common/queryParams.schema';
import { compiledCreateSchema } from '@/schemas/product.schema';

const router = Router();
// all
router.get('/', (_req, res) => {
  res.send('hello');
});
// specific
router.get(
  '/:id',
  validateRequestParamsMiddleware(compiledIdSchema),
  productController.getProductById,
);

// create
router.post(
  '/',
  validateRequestBodyMiddleware(compiledCreateSchema),
  productController.createProduct,
);

// update
router.patch('/:productId');

// delete
router.delete('/:productId');

export default router;
