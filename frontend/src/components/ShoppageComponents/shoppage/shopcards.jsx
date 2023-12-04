import React, { useState, useEffect} from 'react';
import '../../Style/shopcards.css';
import axios from 'axios';  
// import Data from './data'

export default function Card(props) {
  const [isInCart, setIsInCart] = useState(false);

  const checkCartStatus = async () => {
    try {
      // Fetch cart data or use local state to determine if the product is in the cart
      const response = await axios.get('http://127.0.0.1:8080/api/cart/getCart'); // Assuming this endpoint returns cart data
      const cartProducts = response.data.productIds || [];
      const productInCart = cartProducts.includes(props.id);

      setIsInCart(productInCart);
    } catch (error) {
      console.error('Error checking cart status:', error);
    }
  };

  const handleBuyNow = async (propsID) => {
    try {
      if (isInCart) {
        // If in cart, remove from cart
        const response = await axios.delete(`http://127.0.0.1:8080/api/cart/remove-from-cart/${propsID}`);
        console.log(response.data);
      } else {
        // If not in cart, add to cart
        const response = await axios.post('http://127.0.0.1:8080/api/cart/add-to-cart', { productIds: [propsID] });
        console.log(response.data);
      }
      // Toggle the isInCart state after handling the cart action
      setIsInCart(!isInCart);
    } catch (error) {
      console.error('Error handling cart:', error);
    }
  };

  useEffect(() => {
    // Check cart status when the component mounts
    checkCartStatus();
  }, [props.id]); // Update cart status when the product ID changes

  return (
    <div className="card">
      <img src={props.image} alt={props.title} />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <div className="price">${props.price}</div>
      <button className="buy" onClick={() => handleBuyNow(props.id)}>
        {isInCart ? 'Remove from Cart' : 'Add to Cart'}
      </button>
    </div>
  );
}