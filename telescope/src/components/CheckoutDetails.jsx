// CheckoutDetails.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const CheckoutDetails = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    emailAddress: '',
    streetAddress: '',
    country: '',
    city: '',
    state: '',
    zipCode: '',
    useDifferentBilling: false,
    paymentMethod: 'creditCard',
  });

  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axios.get('/api/cart');
        setCart(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCart();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Additional logic for form validation, total price calculation, etc.
      const totalPrice = cart.reduce((total, item) => total + item.product.price * item.quantity, 0);

      // Prepare order data
      const orderData = {
        items: cart.map((item) => ({ productId: item.product._id, quantity: item.quantity })),
        totalPrice,
      };

      // Place the order
      await axios.post('http://127.0.0.1:8080/api/orders/place-order', orderData);

      // Additional logic for redirecting or displaying a confirmation message
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Checkout Details</h2>
      <form onSubmit={handleSubmit}>
        {/* Contact Information */}
        <section>
          <h3>Contact Information</h3>
          <div>
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="emailAddress">Email Address:</label>
            <input
              type="email"
              id="emailAddress"
              name="emailAddress"
              value={formData.emailAddress}
              onChange={handleChange}
              required
            />
          </div>
        </section>

        {/* Shipping Address */}
        <section>
          <h3>Shipping Address</h3>
          <div>
            <label htmlFor="streetAddress">Street Address:</label>
            <input
              type="text"
              id="streetAddress"
              name="streetAddress"
              value={formData.streetAddress}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="country">Country:</label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="city">City:</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="state">State:</label>
            <input
              type="text"
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="zipCode">Zip Code:</label>
            <input
              type="text"
              id="zipCode"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                name="useDifferentBilling"
                checked={formData.useDifferentBilling}
                onChange={handleChange}
              />
              Use a different billing address (Optional)
            </label>
          </div>
        </section>

        {/* Payment Method */}
        <section>
          <h3>Payment Method</h3>
          <div>
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="creditCard"
                checked={formData.paymentMethod === 'creditCard'}
                onChange={handleChange}
              />
              Credit Card
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="paypal"
                checked={formData.paymentMethod === 'paypal'}
                onChange={handleChange}
              />
              Paypal
            </label>
          </div>
        </section>

        {/* Display Cart Items */}
        <section>
          <h3>Cart Items</h3>
          <ul>
            {cart.map((item) => (
              <li key={item._id}>
                {item.product.name} - Quantity: {item.quantity}
              </li>
            ))}
          </ul>
        </section>

        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default CheckoutDetails;
