// Product.js
import React from 'react';

// const Product = ({ product, onAddToCart }) => {
//   return (
//     <div>
//       <h2>{product.name}</h2>
//       <p>{product.description}</p>
//       <p>Price: ${product.price}</p>
//       <img src={product.imageUrl} alt={product.name} style={{ width: '100px', height: '100px' }} />
//       <button onClick={() => onAddToCart(product)}>Add to Cart</button>
//     </div>
//   );
// };
const Product = ({ product, onAddToCart, cart, onRemoveFromCart }) => {
  const isProductInCart = cart.some(item => item._id=== product._id);
  console.log('isProductInCart '+isProductInCart);
  const handleButtonClick = () => {
    if (isProductInCart) {
      onRemoveFromCart(product._id);
    } else {
      onAddToCart(product);
    }
  };
  const imageVar = `https://drive.google.com/uc?id=${product.imageUrl}`
  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      {/* <img src={product.imageUrl} alt={product.name} style={{ width: '100px', height: '100px' }} /> */}
      <img src={imageVar} alt={product.name} style={{ width: '100px', height: '100px' }} />
      <button onClick={handleButtonClick}>
        {isProductInCart ? 'Remove from Cart' : 'Add to Cart'}
      </button>
    </div>
  );
};

export default Product;
