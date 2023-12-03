// controllers/orderController.js
import Order from '../models/Order.mjs';
import CartItem from '../models/Cart.mjs';

// Place order
const placeOrder = async (req, res) => {
  try {
    const { items } = req.body;
    const totalPrice = items.reduce((total, item) => total + item.price, 0);
    const order = await Order.create({ items, totalPrice });

    // Clear the cart after placing the order
    await CartItem.deleteMany();

    res.json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export default {
  placeOrder,
};
