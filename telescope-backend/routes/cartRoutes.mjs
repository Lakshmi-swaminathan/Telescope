// routes/cartRoutes.js
import express from 'express';
import cartController from '../controllers/cartController.mjs';

const router = express.Router();

// Add item to cart
router.post('/add-to-cart', cartController.addToCart);

export default router;
