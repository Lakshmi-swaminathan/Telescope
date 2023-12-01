// OrderComplete.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OrderComplete = () => {
  const [order, setOrder] = useState(null);

  useEffect(() => {
    // Fetch the order data from the backend
    const fetchOrder = async () => {
      try {
        const response = await axios.post('/api/orders/place-order', { items: [] });
        // Assuming the backend returns the order details
        setOrder(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchOrder();
  }, []);

  const calculateTotal = () => {
    if (!order || !order.items) return 0;
    return order.items.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div>
      <h2>Order Complete</h2>
      {order ? (
        <div>
          <p>Thank you for Ordering</p>
          <div>
            <h3>Order Summary</h3>
            <ul>
              {order.items.map((product) => (
                <li key={product.id}>
                  <span>{product.name}</span>
                  <span>${product.price.toFixed(2)}</span>
                </li>
              ))}
            </ul>
            <div>
              <strong>Total:</strong>
              <span>${calculateTotal()}</span>
            </div>
            {/* Additional UI elements based on your requirements */}
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default OrderComplete;
