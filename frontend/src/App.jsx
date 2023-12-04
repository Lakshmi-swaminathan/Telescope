import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  LoginPage,
  SignupPage,
  ActivationPage,
  HomePage,
  ShopLoginPage,
} from "./routes/Routes.js";


import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Store from "./redux/store";
import { loadSeller, loadUser } from "./redux/actions/user";
import { getAllProducts } from "./redux/actions/product";
import { getAllEvents } from "./redux/actions/event";
import axios from "axios";
import { server } from "./server";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import  ShopMainPage from "./components/ShoppageComponents/ShopMainPage" ;
import { ShoppingCart} from './components/ShoppingCart.jsx';
//import ShoppingCart from './components/ShoppingCart.jsx';
import CheckoutDetails from './components/CheckoutDetails.jsx';
import OrderComplete from './components/OrderComplete.jsx';
import { toast } from 'react-toastify'; 

const App = () => {
  const [stripeApikey, setStripeApiKey] = useState("");

  async function getStripeApikey() {
    const { data } = await axios.get(`${server}/payment/stripeapikey`);
    setStripeApiKey(data.stripeApikey);
  }

  const [cart, setCart] = useState([]);
  const fetchCart = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/cart/getCart');
      setCart(response.data);
      console.log('Cart data '+response.data);
    } catch (error) {
      console.error('Error fetching cart:', error);
    }
  }
  useEffect(() => {
    Store.dispatch(loadUser());
    Store.dispatch(loadSeller());
    Store.dispatch(getAllProducts());
    Store.dispatch(getAllEvents());
    getStripeApikey();
  }, []);

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
    <BrowserRouter>
      {stripeApikey && (
        <Elements stripe={loadStripe(stripeApikey)}>
          <Routes>
            <Route
              path="/payment"

            />
          </Routes>
        </Elements>
      )}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignupPage />} />
        <Route path="/Shop" element={<ShopMainPage />} />
        <Route path="/cart" element={<ShoppingCart handleRemoveFromCart={handleRemoveFromCart}/>}/>
        <Route path="/checkout" element={<CheckoutDetails />} />
        <Route path="/order-complete" element={<OrderComplete />} />
      </Routes>
        
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </BrowserRouter>
  );
};

export default App;
