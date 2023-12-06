// routes/productRoutes.js
import express from 'express';
import productController from '../controllers/productController.mjs';

const router = express.Router();

// Get all products
router.get('/', productController.getAllProducts);
router.delete('/delete-products',productController.deleteProducts);
export default router;
