// ShoppingCart.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ShoppingCart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8080/api/cart');
        setCart(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCart();
  }, []);

  const handleAddToCart = async (product) => {
    try {
      await axios.post('http://127.0.0.1:8080/api/cart/add-to-cart', { productId: product._id, quantity: 1 });
      fetchCart();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item._id}>
            {item.product.name} - Quantity: {item.quantity}
          </li>
        ))}
      </ul>
      <Link to="/checkout">
        <button>Checkout</button>
      </Link>
    </div>
  );
};

export default ShoppingCart;
