// ShoppingCart.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Style/ShoppingCartStyle.css';

const ShoppingCart = () => {
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
      console.log('product._id ' + product._id);
      const response = await axios.post('http://127.0.0.1:8080/api/cart/add-to-cart', {
        productIds: [product._id],
      });
      fetchCart(); // Call fetchCart to update the cart after adding a product
      console.log(response.data);
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <div className="shopping-cart-container">
      <h2>Your Cart</h2>
      <ul className="cart-items">
        {cart.map((item) => (
          <li key={item._id} className="cart-item">
            <div className="item-details">
              {item.imageUrl && (
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="item-image"
                />
              )}
              <div>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>Price: ${item.price}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <Link to="/checkout" className="checkout-link">
        <button className="checkout-button">Proceed to Checkout</button>
      </Link>
    </div>
  );
};

export { ShoppingCart };
