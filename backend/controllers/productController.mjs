// controllers/productController.js
import Product from '../models/Product.mjs';

// Get all products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
//delete products of productIds passed in args
const deleteProducts=async (req, res) => {
  try {
    const { productIds } = req.body;

    // Validate productIds
    if (!productIds || !Array.isArray(productIds)) {
      return res.status(400).json({ error: 'Invalid productIds' });
    }

    // Delete products based on IDs
    const result = await Product.deleteMany({ _id: { $in: productIds } });

    // Check if any products were deleted
    if (result.deletedCount > 0) {
      console.log('Products deleted successfully');
      return res.json({ message: 'Products deleted successfully' });
    } else {
      return res.status(404).json({ error: 'Products not found or already deleted' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export default {
  getAllProducts,deleteProducts,
};
