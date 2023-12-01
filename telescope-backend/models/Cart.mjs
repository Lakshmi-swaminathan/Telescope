// models/Cart.js
import mongoose from 'mongoose';

const cartItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
  }
});

const CartItem = mongoose.model('CartItem', cartItemSchema);

export default CartItem;
