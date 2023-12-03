// models/Order.js
import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  items: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
      }
    },
  ],
  totalPrice: Number,
});

const Order = mongoose.model('Order', orderSchema);

export default Order;
