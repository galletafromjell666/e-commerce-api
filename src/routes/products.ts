import { Router } from 'express';
import productController from '@/controllers/product.controller';
import {
  validateRequestBodyMiddleware,
  validateRequestParamsMiddleware,
} from '@/middlewares';
import { compiledIdSchema } from '@/schemas/common/queryParams.schema';
import { compiledCreateSchema } from '@/schemas/product.schema';
import validateRequestQueryMiddleware from '@/middlewares/validateRequestQuery.middleware';
import { compiledProductQueryParams } from '@/schemas/common/productQuery.schema';

const router = Router();
// all
router.get(
  '/',
  validateRequestQueryMiddleware(compiledProductQueryParams),
  productController.getProducts,
);
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
