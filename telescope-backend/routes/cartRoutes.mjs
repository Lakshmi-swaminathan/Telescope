// routes/cartRoutes.js
import express from 'express';
import cartController from '../controllers/cartController.mjs';

const router = express.Router();

// Add item to cart
router.post('/add-to-cart', cartController.addToCart);

//get cart info
router.get('/getCart', cartController.getCart);

// Delete all cart items
router.delete('/delete-all-cart-items', cartController.deleteAllCartItems);

export default router;
