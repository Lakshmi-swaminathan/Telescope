// CheckoutDetailsParent.js
import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutDetails from './CheckoutDetails';

// Load Stripe outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51OKEa1CG31fCZTbGwkph250VaDdYOvFDWG0kzOC6FMdl8XqWulsMsxRdMmXZq7QRM15Pzq2NTq0xFu3Wxi7ww2j1003mq0GMYO');

const CheckoutDetailsParent = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutDetails />
    </Elements>
  );
};

export default CheckoutDetailsParent;
