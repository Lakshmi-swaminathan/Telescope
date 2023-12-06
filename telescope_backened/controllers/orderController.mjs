// controllers/orderController.js
import Order from '../models/Order.mjs';
import CartItem from '../models/Cart.mjs';
import Product from '../models/Product.mjs';

// Place order
const placeOrder = async (req, res) => {
  try {
    const {
      items,
      totalPrice,
      streetAddress,
      country,
      city,
      state,
      zipCode,
      billingStreetAddress,
      billingCountry,
      billingCity,
      billingState,
      billingZipCode,
      contactName,
      email,
    } = req.body;

    const order = await Order.create({
      productIds: items.map((item) => item.productId),
      totalPrice: Number(totalPrice),
      streetAddress,
      country,
      city,
      state,
      zipCode,
      billingStreetAddress,
      billingCountry,
      billingCity,
      billingState,
      billingZipCode,
      contactName,
      email,
    });

    // Clear the cart after placing the order
    await CartItem.deleteMany();

    res.json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get all orders
const getOrders = async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 }).limit(1);
    res.json(orders);
    console.log('orders '+orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};




export default {
  placeOrder,getOrders,
};
