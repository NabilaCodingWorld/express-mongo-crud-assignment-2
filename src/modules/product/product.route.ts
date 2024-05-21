import express from 'express';
import { ProductController } from './product.controller';

const router = express.Router();

// create a product 
router.post('/', ProductController.createProduct);
router.get('/',ProductController.getAllProducts);
router.get('/:productId',ProductController.getSingleProduct);
router.put('/:productId',ProductController.updateProductInfo);
router.delete('/:productId',ProductController.deleteProduct);




export const ProductRoutes = router;


