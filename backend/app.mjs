import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import productRoutes from './routes/productRoutes.mjs';
import cartRoutes from './routes/cartRoutes.mjs';
import orderRoutes from './routes/orderRoutes.mjs';
import userRoutes from './routes/userRoutes.mjs';
import Product from './models/Product.mjs';
import Order from './models/Order.mjs';
import stripePackage from 'stripe';

  
dotenv.config();
const app = express();
// Initialize Stripe with the secret key from the environment variables
const stripe = stripePackage('sk_test_51OKEa1CG31fCZTbG2EqV3PlPwFIaTajHisE6iWcwgpOSeovunwn44U3Qtl8WavoSs9P0KxTdNetKBFejxQuQrZFd00ZwjpnAB2');

const PORT = process.env.PORT || 5000;

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Middleware
app.use(express.json());
// Use CORS middleware
app.use(cors({ 
  origin: 'http://localhost:3000',
  credentials: true,
}));
// Routes
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/orders', orderRoutes);
app.use('/user', userRoutes);

// Define a route to handle product insertion
app.post('/api/add-product', async (req, res) => {
  try {
    console.log('Incoming Data:', req.body);
    
    const newProduct = new Product(req.body);
    await newProduct.validate();
    const savedProduct = await newProduct.save();
    res.json(savedProduct);
  } catch (error) {
    res.status(500).json({ error: 'Error inserting product.' });
  }
});

app.delete('/api/delete-orders', async (req, res) => {
  try {
    await Order.deleteMany({});
    res.status(204).end(); // No content, successful deletion
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
