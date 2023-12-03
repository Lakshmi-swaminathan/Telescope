// routes/orderRoutes.js
import express from 'express';
import orderController from '../controllers/orderController.mjs';

const router = express.Router();

// Place order
router.post('/place-order', orderController.placeOrder);

export default router;
