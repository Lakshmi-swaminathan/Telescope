// //import modules
// const express= require('express');
// const mongoose= require('mongoose');
// const morgan = require('morgan');
// const cors= require('cors');
// require("dotenv").config();

// //app
// const app=express();

// //db
// mongoose.connect(process.env.MONGO_URI,{
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
// .then(() => console.log("DB connected"))
// .catch((err) => console.log("DB CONNECTION ERROR",err));

// //middleware
// app.use(morgan("dev"));
// app.use(cors({origin: true, credentials: true}));

// //routes

// //port
// const port = process.env.PORT || 8080;

// //listener
// const server = app.listen(port, () => console.log(`Server is running on port ${port}`));
// server.js
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import productRoutes from './routes/productRoutes.mjs';
import cartRoutes from './routes/cartRoutes.mjs';
import orderRoutes from './routes/orderRoutes.mjs';
import Product from './models/Product.mjs';
import Order from './models/Order.mjs';

  
dotenv.config();
const app = express();
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
app.use(cors());

// Routes
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/orders', orderRoutes);

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
