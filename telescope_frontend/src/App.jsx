
import React, { useState } from "react";
// import logo from './logo.svg';
import './App.css';
import Homepage from './components/FullHomepage'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar';
import  ShopMainPage from "./components/ShoppageComponents/ShopMainPage" ;
import { ShoppingCart} from './components/ShoppingCart.jsx';
import OrderComplete from './components/OrderComplete.jsx';
import ProductUpload from "./components/ProductUpload";
import LoginForm from './components/LoginForm.jsx'
import SubmitProduct from "./components/SubmitProduct";
import axios from "axios";
import { toast } from 'react-toastify'; 
import CustomerProfile from "./components/CustomerProfile";
import Signup from "./components/Signup";
import CheckoutDetailsParent from "./components/CheckoutDetailsParent";

function App() {
  // 
  const [cart, setCart] = useState([]);
  console.log('cart '+cart);
  const fetchCart = async () => {
    try {
      const response = await axios.get('https://telescope-0jle.onrender.com/api/cart/getCart');
      setCart(response.data);
      console.log('Cart data '+response.data);
    } catch (error) {
      console.error('Error fetching cart:', error);
    }
  }
  

  const handleRemoveFromCart = async (productId) => {
    try {
      const response = await axios.delete(`https://telescope-0jle.onrender.com/api/cart/remove-from-cart/${productId}`);
      console.log('remove-from-cart ', response.data);
      fetchCart();
      toast.success('Cart item deleted successfully');
    } catch (error) {
      console.error('Error removing from cart:', error);
      toast.error('Failed to delete cart item');
    }
  };
  return (
    <div className="App">
      {/* <Homepage/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/homepage" element={<Homepage />}/>
          <Route path="/navbar" element={<Navbar />}/>
          <Route path="/" element={<LoginForm />} />
          {/* <Route path="/sign-up" element={<SignupPage />} /> */}
          <Route path="/new-user" element={<Signup />} />
          <Route path="/Shop" element={<ShopMainPage />} />
          <Route path="/cart" element={<ShoppingCart handleRemoveFromCart={handleRemoveFromCart}/>}/>
          <Route path="/checkout" element={<CheckoutDetailsParent />} />
          <Route path="/order-complete" element={<OrderComplete />} />
          <Route path="/product-upload" element={<ProductUpload />} />
          <Route path="/product-upload" element={<ProductUpload />} />
          <Route path="/SubmitProduct" element={<SubmitProduct />} />
          <Route path="/customer-profile" element={< CustomerProfile/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
