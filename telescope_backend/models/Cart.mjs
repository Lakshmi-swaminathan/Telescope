// models/Cart.mjs
import mongoose from 'mongoose';

const cartItemSchema = new mongoose.Schema({
  productIds: [String],
});

const CartItem = mongoose.model('CartItem', cartItemSchema);

export default CartItem;
