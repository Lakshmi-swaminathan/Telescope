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
import ProductUpload  from './components/ProductUpload.jsx';

const Home = ({ products, onAddToCart  }) => (
  <div>
    <h2>Products</h2>
    <div>
      {products.map((product) => (
        <Product key={product.imageUrl} product={product} onAddToCart={onAddToCart}/>
      ))}
    </div>
  </div>
);

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from your server or API
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8080/api/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const [cart, setCart] = useState([]);
  const fetchCart = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/cart/getCart');
      setCart(response.data);
    } catch (error) {
      console.error('Error fetching cart:', error);
    }
  };
  
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

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Telescope</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
            <li>
              <Link to="/ProductUpload">ProductUpload</Link>
            </li>
          </ul>
        </nav>

        <hr />

        <Routes>
          <Route path="/" element={<Home products={products} onAddToCart={handleAddToCart} />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/checkout" element={<CheckoutDetails />} />
          <Route path="/order-complete" element={<OrderComplete />} />
          <Route path="/ProductUpload" element={<ProductUpload />} />
        </Routes>

      </div>
    </Router>
  );
};

export default App;