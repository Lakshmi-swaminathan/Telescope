// models/Product.js
import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  imageUrl: String,
  //OWner mailId
  //Product condition
  //owner phone number
});

const Product = mongoose.model('Product', productSchema);

export default Product;
