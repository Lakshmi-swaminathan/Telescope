// ShoppingCart.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import './Style/ShoppingCartStyle.css';
import { toast } from 'react-toastify'; // Import toast from react-toastify
import Header from './Layout/Header';
import Footer from './Layout/Footer';

const ShoppingCart = ({handleRemoveFromCart}) => {
  const [cart, setCart] = useState([]);

  const fetchCart = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/cart/getCart');
      setCart(response.data);
    } catch (error) {
      console.error('Error fetching cart:', error);
    }
  };

  const handleRemoveFromCart1 = async (productId) => {
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
  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <div>
      <Header />
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
            <div className="delete-icon" onClick={() => handleRemoveFromCart1(item._id)}>
              <img src="https://cdn-icons-png.flaticon.com/512/542/542724.png" alt="Trash" className="trash-icon" />
            </div>
          </li>
        ))}
      </ul>

      <Link to="/checkout" className="checkout-link">
        <button className="checkout-button">Proceed to Checkout</button>
      </Link>
    </div>
    <Footer />
    </div>
    
  );
};

export { ShoppingCart };
