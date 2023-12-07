// models/Order.js
import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  productIds: [String],
  totalPrice: Number,
  streetAddress: String,
    country: String,
    city: String,
    state: String,
    zipCode: String,
    billingStreetAddress: String,
    billingCountry: String,
    billingCity: String,
    billingState: String,
    billingZipCode: String,
  contactName: String,
  email: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Order = mongoose.model('Order', orderSchema);

export default Order;