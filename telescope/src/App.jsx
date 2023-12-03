// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css';
// import  LoginPage from './components/loginPage.jsx';
// import  SignUpPage from './components/SignUpPage.jsx';
// import { BrowserRouter as Router, Route, Link, Routes, useLocation } from 'react-router-dom';

// import Category from './HomepageComponets/CatergoryDropdown';
// import './HomepageComponets/Drop.css'
// import NavbarTop from './HomepageComponets/NavbarTopComponents';



// function App() {
//   const [count, setCount] = useState(0)
//   const location = useLocation();


//   return (
//     <>
//         <div>
//         {location.pathname !== '/signup' && location.pathname !== '/login' && (
//         <nav>
//           <ul>
//             <li>
//               <Link to="/signup">Sign Up</Link>
//             </li>
//             <li>
//               <Link to="/login">Login</Link>
//             </li>
//           </ul>
//         </nav>
//         )}
//         <Routes>
//           <Route path="/login" element={<LoginPage />} />
//           <Route path="/signup" element={<SignUpPage/>} />
//         </Routes>
//         </div>
//     </>
//   )
// }

// App.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Product from './components/Product.jsx';
import { ShoppingCart} from './components/ShoppingCart.jsx';
//import ShoppingCart from './components/ShoppingCart.jsx';
import CheckoutDetails from './components/CheckoutDetails.jsx';
import OrderComplete from './components/OrderComplete.jsx';
import { toast } from 'react-toastify'; // Import toast from react-toastify

const Home = ({ products, onAddToCart, cart, onRemoveFromCart }) => (
  <div>
    <h2>Products</h2>
    <div>
      {products.map((product) => (
        <Product
          key={product._id}
          product={product}
          onAddToCart={onAddToCart}
          cart={cart}
          onRemoveFromCart={onRemoveFromCart}
        />
      ))}
    </div>
  </div>
);

const App = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8080/api/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const [cart, setCart] = useState([]);
  const fetchCart = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/cart/getCart');
      setCart(response.data);
      console.log('Cart data '+response.data);
    } catch (error) {
      console.error('Error fetching cart:', error);
    }
  };

  useEffect(() => {
    // Fetch products from your server or API
    fetchProducts();
    fetchCart();
  }, []);
  
  const handleAddToCart = async (product) => {
    try {
      console.log('product._id '+product._id)
      const response = await axios.post('http://127.0.0.1:8080/api/cart/add-to-cart', { productIds: [product._id] });
      fetchCart(); // Call fetchCart to update the cart after adding a product
      console.log(response.data);
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  const handleRemoveFromCart = async (productId) => {
    try {
      const response = await axios.delete(`http://127.0.0.1:8080/api/cart/remove-from-cart/${productId}`);
      console.log('remove-from-cart ', response.data);
      fetchCart();
      toast.success('Cart item deleted successfully');
    } catch (error) {
      console.error('Error removing from cart:', error);
      toast.error('Failed to delete cart item');
    }
  };  

  return (
    <Router>
      <div>
      <header style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
          <Link to="/">
            <img
              src="https://m.media-amazon.com/images/I/71MOZXz8h0L._AC_SL1000_.jpg" // Replace with the actual image URL for Telescope
              alt="Telescope"
              style={{ width: '50px', height: '50px' }}
            />
          </Link>
          <Link to="/cart">
              <img
                src="https://www.shutterstock.com/image-vector/shopping-cart-vector-icon-flat-600nw-1690453492.jpg" // Replace with the actual image URL for the Cart
                alt="Cart"
                style={{ width: '50px', height: '50px' }}
              />({cart.length})
          </Link>
        </header>

        <hr />
        <hr />

        <Routes>
          <Route path="/" element={<Home products={products} onAddToCart={handleAddToCart} cart={cart} onRemoveFromCart={handleRemoveFromCart}/>} />
          <Route path="/cart" element={<ShoppingCart handleRemoveFromCart={handleRemoveFromCart}/>} />
          <Route path="/checkout" element={<CheckoutDetails />} />
          <Route path="/order-complete" element={<OrderComplete />} />
        </Routes>

      </div>
    </Router>
  );
};

export default App;