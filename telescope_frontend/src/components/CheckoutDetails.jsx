// CheckoutDetails.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import checkoutStyles from '../Style/checkoutStyles.css';

import { useNavigate } from 'react-router-dom'; // Assuming you're using React Router v6
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../components/header'
import Footer from '../components/footer'

import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';




const CheckoutDetails = () => {
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);




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
    billingStreetAddress: '',
    billingCountry: '',
    billingCity: '',
    billingState: '',
    billingZipCode: '',
    creditCardNumber: '',
    cardHolderName: '',
    expiryMonth: '',
    expiryYear: '',
    cvv: '',
    
    paymentMethod: 'creditCard',
  });

  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8080/api/cart/getCart');
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
      const totalPrice = cart.reduce((total, item) => total + item.price, 0);
      const {
        firstName,
        lastName,
        phoneNumber,
        emailAddress,
        streetAddress,
        country,
        city,
        state,
        zipCode,
        billingStreetAddress,
        billingCountry,
        billingCity,
        billingState,
        billingZipCode,
      } = formData;
  
      if (!stripe || !elements) {
        return;
      }
  
      console.log(' phoneNumber '+ phoneNumber);
      // const cardElement = elements.getElement(CardElement);
      // console.log(elements);
  
     // Create a payment method using the card element
    // const { paymentMethod, error } = await stripe.createPaymentMethod({
    //   type: 'card',
    //   card: useElements,
    // });
    // const result = await stripe.confirmPayment({
    //   //`Elements` instance that was used to create the Payment Element
    //   elements,
    //   confirmParams: {
    //     return_url: "http://localhost:3000/OrderComplete",
    //   },
    // });
  
      if (error) {
        setError(error.message);
        console.log('error.message '+error.message);
      } else {
      }
        setError(null);
  
        
  
      //   const { error } = stripe.validateCardBillingDetails(billingAddress);
  
      //   if (error) {
      //     setError(error.message);
      //     console.log('error.message '+error.message);
      //   } else {
      //     setError(null);
      //     console.log('Billing address validated successfully!');
      //   }
      // }
  
      // Submit order data to backend
      const orderData = {
        items: cart.map((item) => ({ productId: item._id })),
        totalPrice,
        streetAddress,
        country,
        city,
        state,
        zipCode,
        billingStreetAddress,
        billingCountry,
        billingCity,
        billingState,
        billingZipCode,
        contactName: `${firstName} ${lastName}`,
        email: emailAddress,
      };
  
      const orderResponse = await axios.post(
        'http://127.0.0.1:8080/api/orders/place-order',
        orderData
      );
  
      console.log("orderResponse" + orderResponse.data)
      if (orderResponse.data !== undefined && orderResponse.data !== null) {
      
        toast.success('Order placed successfully');
        navigate('/order-complete');
      }
    }
    catch (error) {
      console.error(error);
    }
  }


  
  
  

  // return (
  //   <div>
  //     <Header/>
  //   <div style={checkoutStyles.container}>
  //     <h2 style={checkoutStyles.title}>Checkout Details</h2>
  //     <form onSubmit={handleSubmit}>
  //       {/* Contact Information */}
  //       <section style={checkoutStyles.section}>
  //         <h3>Contact Information</h3>
  //         <div style={checkoutStyles.inputGroup}>
  //           <label htmlFor="firstName">First Name:</label>
  //           <input
  //             type="text"
  //             id="firstName"
  //             name="firstName"
  //             value={formData.firstName}
  //             onChange={handleChange}
  //             required
  //             style={checkoutStyles.inputField}
  //           />
  //         </div>
  //         <div style={checkoutStyles.inputGroup}>
  //           <label htmlFor="lastName">Last Name:</label>
  //           <input
  //             type="text"
  //             id="lastName"
  //             name="lastName"
  //             value={formData.lastName}
  //             onChange={handleChange}
  //             required
  //             style={checkoutStyles.inputField}
  //           />
  //         </div>
  //         <div style={checkoutStyles.inputGroup}>
  //           <label htmlFor="phoneNumber">Phone Number:</label>
  //           <input
  //             type="tel"
  //             id="phoneNumber"
  //             name="phoneNumber"
  //             value={formData.phoneNumber}
  //             onChange={handleChange}
  //             required
  //             style={checkoutStyles.inputField}
  //           />
  //         </div>
  //         <div style={checkoutStyles.inputGroup}>
  //           <label htmlFor="emailAddress">Email Address:</label>
  //           <input
  //             type="email"
  //             id="emailAddress"
  //             name="emailAddress"
  //             value={formData.emailAddress}
  //             onChange={handleChange}
  //             required
  //             style={checkoutStyles.inputField}
  //           />
  //         </div>
  //       </section>

  //       {/* Shipping Address */}
  //       <section style={checkoutStyles.section}>
  //         <h3>Shipping Address</h3>
  //         <div style={checkoutStyles.inputGroup}>
  //           <label htmlFor="streetAddress">Street Address:</label>
  //           <input
  //             type="text"
  //             id="streetAddress"
  //             name="streetAddress"
  //             value={formData.streetAddress}
  //             onChange={handleChange}
  //             required
  //             style={checkoutStyles.inputField}
  //           />
  //         </div>
  //         <div style={checkoutStyles.inputGroup}>
  //           <label htmlFor="country">Country:</label>
  //           <input
  //             type="text"
  //             id="country"
  //             name="country"
  //             value={formData.country}
  //             onChange={handleChange}
  //             required
  //             style={checkoutStyles.inputField}
  //           />
  //         </div>
  //         <div style={checkoutStyles.inputGroup}>
  //           <label htmlFor="city">City:</label>
  //           <input
  //             type="text"
  //             id="city"
  //             name="city"
  //             value={formData.city}
  //             onChange={handleChange}
  //             required
  //             style={checkoutStyles.inputField}
  //           />
  //         </div>
  //         <div style={checkoutStyles.inputGroup}>
  //           <label htmlFor="state">State:</label>
  //           <input
  //             type="text"
  //             id="state"
  //             name="state"
  //             value={formData.state}
  //             onChange={handleChange}
  //             required
  //             style={checkoutStyles.inputField}
  //           />
  //         </div>
  //         <div style={checkoutStyles.inputGroup}>
  //           <label htmlFor="zipCode">Zip Code:</label>
  //           <input
  //             type="text"
  //             id="zipCode"
  //             name="zipCode"
  //             value={formData.zipCode}
  //             onChange={handleChange}
  //             required
  //             style={checkoutStyles.inputField}
  //           />
  //         </div>
  //       </section>

  //       {/* Billing Address */}
  //       <section style={checkoutStyles.section}>
  //         <h3>Billing Address</h3>
  //         <div style={checkoutStyles.inputGroup}>
  //           <label htmlFor="billingStreetAddress">Street Address:</label>
  //           <input
  //             type="text"
  //             id="billingStreetAddress"
  //             name="billingStreetAddress"
  //             value={formData.billingStreetAddress}
  //             onChange={handleChange}
  //             required
  //             style={checkoutStyles.inputField}
  //           />
  //         </div>
  //         <div style={checkoutStyles.inputGroup}>
  //           <label htmlFor="billingCountry">Country:</label>
  //           <input
  //             type="text"
  //             id="billingCountry"
  //             name="billingCountry"
  //             value={formData.billingCountry}
  //             onChange={handleChange}
  //             required
  //             style={checkoutStyles.inputField}
  //           />
  //         </div>
  //         <div style={checkoutStyles.inputGroup}>
  //           <label htmlFor="billingCity">City:</label>
  //           <input
  //             type="text"
  //             id="billingCity"
  //             name="billingCity"
  //             value={formData.billingCity}
  //             onChange={handleChange}
  //             required
  //             style={checkoutStyles.inputField}
  //           />
  //         </div>
  //         <div style={checkoutStyles.inputGroup}>
  //           <label htmlFor="billingState">State:</label>
  //           <input
  //             type="text"
  //             id="billingState"
  //             name="billingState"
  //             value={formData.billingState}
  //             onChange={handleChange}
  //             required
  //             style={checkoutStyles.inputField}
  //           />
  //         </div>
  //         <div style={checkoutStyles.inputGroup}>
  //           <label htmlFor="billingZipCode">Zip Code:</label>
  //           <input
  //             type="text"
  //             id="billingZipCode"
  //             name="billingZipCode"
  //             value={formData.billingZipCode}
  //             onChange={handleChange}
  //             required
  //             style={checkoutStyles.inputField}
  //           />
  //         </div>
  //       </section>

  //       {/* Payment Method */}
  //       <section style={checkoutStyles.section}>
  //         <h3>Payment Method</h3>
          
  //         <div style={checkoutStyles.inputGroup}>
  //           <label htmlFor="creditCardNumber">Credit Card Number:</label>
  //           <input
  //             type="text"
  //             id="creditCardNumber"
  //             name="creditCardNumber"
  //             value={formData.creditCardNumber}
  //             onChange={handleChange}
  //             required
  //             style={checkoutStyles.inputField}
  //           />
  //         </div>
          
  //         <div style={checkoutStyles.inputGroup}>
  //           <label htmlFor="cardHolderName">Card Holder Name:</label>
  //           <input
  //             type="text"
  //             id="cardHolderName"
  //             name="cardHolderName"
  //             value={formData.cardHolderName}
  //             onChange={handleChange}
  //             required
  //             style={checkoutStyles.inputField}
  //           />
  //         </div>
  //         <div style={checkoutStyles.inputGroup}>
  //           <label htmlFor="expiryMonth">Expiry Month:</label>
  //           <input
  //             type="text"
  //             id="expiryMonth"
  //             name="expiryMonth"
  //             value={formData.expiryMonth}
  //             onChange={handleChange}
  //             required
  //             style={checkoutStyles.inputField}
  //           />
  //         </div>
  //         <div style={checkoutStyles.inputGroup}>
  //           <label htmlFor="expiryYear">Expiry Year:</label>
  //           <input
  //             type="text"
  //             id="expiryYear"
  //             name="expiryYear"
  //             value={formData.expiryYear}
  //             onChange={handleChange}
  //             required
  //             style={checkoutStyles.inputField}
  //           />
  //         </div>
  //         <div style={checkoutStyles.inputGroup}>
  //           <label htmlFor="cvv">CVV:</label>
  //           <input
  //             type="text"
  //             id="cvv"
  //             name="cvv"
  //             value={formData.cvv}
  //             onChange={handleChange}
  //             required
  //             style={checkoutStyles.inputField}
  //           />
  //         </div>
  //         <CardElement/>
  //       </section>

  //       {/* Cart Items */}
  //       <section style={checkoutStyles.section}>
  //         <h3>Cart Items</h3>
  //         <ul style={checkoutStyles.cartList}>
  //           {cart.map((item) => (
  //             <li key={item._id} style={checkoutStyles.cartItem}>
  //               {item.name} 
  //             </li>
  //           ))}
  //         </ul>
  //       </section>

  //       <button type="submit" style={checkoutStyles.submitButton}>
  //         Place Order
  //       </button>
  //     </form>
  //     {/* React Toastify container for notifications */}
  //     <ToastContainer position="bottom-right" autoClose={5000} />
     
  //   </div>
  //   <Footer/>
  //   </div>
  // );


  return (
    <>
      <Header/>
      <form >
      <section style={checkoutStyles.section}>
          <h3>Contact Information</h3>
          <div style={checkoutStyles.inputGroup}>
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              style={checkoutStyles.inputField}
            />
          </div>
          <div style={checkoutStyles.inputGroup}>
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              style={checkoutStyles.inputField}
            />
          </div>
          <div style={checkoutStyles.inputGroup}>
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              style={checkoutStyles.inputField}
            />
          </div>
          <div style={checkoutStyles.inputGroup}>
            <label htmlFor="emailAddress">Email Address:</label>
            <input
              type="email"
              id="emailAddress"
              name="emailAddress"
              value={formData.emailAddress}
              onChange={handleChange}
              required
              style={checkoutStyles.inputField}
            />
          </div>
        </section>

        {/* Shipping Address */}
        <section style={checkoutStyles.section}>
          <h3>Shipping Address</h3>
          <div style={checkoutStyles.inputGroup}>
            <label htmlFor="streetAddress">Street Address:</label>
            <input
              type="text"
              id="streetAddress"
              name="streetAddress"
              value={formData.streetAddress}
              onChange={handleChange}
              required
              style={checkoutStyles.inputField}
            />
          </div>
          <div style={checkoutStyles.inputGroup}>
            <label htmlFor="country">Country:</label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
              style={checkoutStyles.inputField}
            />
          </div>
          <div style={checkoutStyles.inputGroup}>
            <label htmlFor="city">City:</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              style={checkoutStyles.inputField}
            />
          </div>
          <div style={checkoutStyles.inputGroup}>
            <label htmlFor="state">State:</label>
            <input
              type="text"
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
              style={checkoutStyles.inputField}
            />
          </div>
          <div style={checkoutStyles.inputGroup}>
            <label htmlFor="zipCode">Zip Code:</label>
            <input
              type="text"
              id="zipCode"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              required
              style={checkoutStyles.inputField}
            />
          </div>
        </section>

        {/* Billing Address */}
        <section style={checkoutStyles.section}>
          <h3>Billing Address</h3>
          <div style={checkoutStyles.inputGroup}>
            <label htmlFor="billingStreetAddress">Street Address:</label>
            <input
              type="text"
              id="billingStreetAddress"
              name="billingStreetAddress"
              value={formData.billingStreetAddress}
              onChange={handleChange}
              required
              style={checkoutStyles.inputField}
            />
          </div>
          <div style={checkoutStyles.inputGroup}>
            <label htmlFor="billingCountry">Country:</label>
            <input
              type="text"
              id="billingCountry"
              name="billingCountry"
              value={formData.billingCountry}
              onChange={handleChange}
              required
              style={checkoutStyles.inputField}
            />
          </div>
          <div style={checkoutStyles.inputGroup}>
            <label htmlFor="billingCity">City:</label>
            <input
              type="text"
              id="billingCity"
              name="billingCity"
              value={formData.billingCity}
              onChange={handleChange}
              required
              style={checkoutStyles.inputField}
            />
          </div>
          <div style={checkoutStyles.inputGroup}>
            <label htmlFor="billingState">State:</label>
            <input
              type="text"
              id="billingState"
              name="billingState"
              value={formData.billingState}
              onChange={handleChange}
              required
              style={checkoutStyles.inputField}
            />
          </div>
          <div style={checkoutStyles.inputGroup}>
            <label htmlFor="billingZipCode">Zip Code:</label>
            <input
              type="text"
              id="billingZipCode"
              name="billingZipCode"
              value={formData.billingZipCode}
              onChange={handleChange}
              required
              style={checkoutStyles.inputField}
            />
          </div>
        </section>

      <label>
        Card details
        <CardElement />
      </label>

      <button type="submit" onClick={handleSubmit} disabled={!stripe}>
       checkout
      </button>
    </form>
    <Footer/>
    </>
    
  );
};

export default CheckoutDetails;