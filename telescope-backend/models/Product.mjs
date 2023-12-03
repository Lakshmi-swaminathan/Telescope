// models/Product.js
import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  imageUrl: String,
  //OWner mailId
  //Product condition
});

const Product = mongoose.model('Product', productSchema);

export default Product;
