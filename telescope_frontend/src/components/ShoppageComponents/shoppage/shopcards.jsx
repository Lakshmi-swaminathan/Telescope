import React, { useState, useEffect, useCallback } from 'react';
import '../../../Style/shopcards.css';
import axios from 'axios';

export default function Card(props) {
  const [isInCart, setIsInCart] = useState(false);

  const checkCartStatus = useCallback(async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8080/api/cart/getCart');
      const cartProducts = response.data.productIds || [];
      const productInCart = cartProducts.includes(props.id);

      setIsInCart(productInCart);
    } catch (error) {
      console.error('Error checking cart status:', error);
    }
  }, [props.id]);

  const handleBuyNow = async (propsID) => {
    try {
      if (isInCart) {
        const response = await axios.delete(`http://127.0.0.1:8080/api/cart/remove-from-cart/${propsID}`);
        console.log(response.data);
      } else {
        const response = await axios.post('http://127.0.0.1:8080/api/cart/add-to-cart', {
          productIds: [propsID],
        });
        console.log(response.data);
      }
      setIsInCart(!isInCart);
    } catch (error) {
      console.error('Error handling cart:', error);
    }
  };

  useEffect(() => {
    checkCartStatus();
  }, [checkCartStatus, props.id]);

  return (
    <div className="card">
      <div className="card-inner1">
        <div className="card-image">
          <img src={props.image} alt={props.title} />
        </div>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <div className="price">${props.price}</div>
        <button className="buy" onClick={() => handleBuyNow(props.id)}>
          {isInCart ? 'Remove from Cart' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
}
