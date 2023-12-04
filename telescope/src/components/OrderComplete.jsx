// OrderComplete.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Style/OrderComplete.css'; // Import your stylesheet for styling

const OrderComplete = ({ orderId }) => {
  const [orderDetails, setOrderDetails] = useState(null);
  const [productDetails, setProductDetails] = useState([]);

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        // Fetch order details
        const orderResponse = await axios.get(`http://127.0.0.1:8080/api/orders/get-orders`);
        setOrderDetails(orderResponse.data);

        // Fetch product details for each productId in the order
        const productIds = orderResponse.data.productIds;
        const productResponse = await axios.get('http://127.0.0.1:8080/api/products');
        const filteredProducts = productResponse.data.filter(product => productIds.includes(product._id));
        setProductDetails(filteredProducts);
      } catch (error) {
        console.error(error);
      }
    };

    fetchOrderDetails();
  }, [orderId]);

  if (!orderDetails || productDetails.length === 0) {
    return <p>Loading...</p>;
  }

  const renderProductDetails = () => {
    return productDetails.map(product => (
      <div key={product._id} className="product-cart">
        <img src={product.imageUrl} alt={product.name} className="product-image" />
        <div className="product-info">
          <h3>{product.name}</h3>
          <p>Price: ${product.price.toFixed(2)}</p>
        </div>
      </div>
    ));
  };

  return (
    <div className="order-complete-container">
      <div className="left-section">
        <h2 className="thank-you-message">Thank you for Ordering, {orderDetails.contactName}!</h2>
        <div className="order-details">
          <h3 className='yourOrderDetails'>Your Order Details</h3>
          {renderProductDetails()}
          <p><b>Total Price: ${orderDetails.totalPrice.toFixed(2)}</b></p>
        </div>
      </div>
      <div className="right-section">
        <div className="cart-address">
          <div className="billing-address">
            <h3 className='Billing Address'>Billing Address</h3>
            <p>{orderDetails.billingStreetAddress}</p>
            <p>{orderDetails.billingCity}, {orderDetails.billingState}, {orderDetails.billingCountry}</p>
            <p>{orderDetails.billingZipCode}</p>
          </div>
          <div className="shipping-address">
            <h3 className='shippingAddress'>Shipping Address</h3>
            <p>{orderDetails.streetAddress}</p>
            <p>{orderDetails.city}, {orderDetails.state}, {orderDetails.country}</p>
            <p>{orderDetails.zipCode}</p>
          </div>
        </div>
        <div className="email-details">
          <h3 className='emailAddress'>Email</h3>
          <p>{orderDetails.email}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderComplete;
