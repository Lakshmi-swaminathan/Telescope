// controllers/cartController.js
import CartItem from '../models/Cart.mjs';

// Add item to cart
const addToCart = async (req, res) => {
  try {
    const { productId } = req.body;
    const cartItem = await CartItem.create({ productId});
    res.json(cartItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export default {
  addToCart,
};
