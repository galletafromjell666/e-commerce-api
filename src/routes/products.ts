import { Router } from 'express';

const router = Router();
// all
router.get('/products');
// specific
router.get('/products/:productId');

// create
router.post('/products');

// update
router.patch('/products/:productId');

// delete
router.delete('/products/:productId');

export default router;
