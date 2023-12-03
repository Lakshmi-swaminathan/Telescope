// Product.js
import React from 'react';

const Product = ({ product, onAddToCart }) => {
  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <img src={product.imageUrl} alt={product.name} style={{ width: '100px', height: '100px' }} />
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default Product;
