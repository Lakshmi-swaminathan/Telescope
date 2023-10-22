import React, { useState } from 'react';

function ProductUpload() {
  // Define state variables to store user input
  const [category, setCategory] = useState('');
  const [productCost, setProductCost] = useState('');
  const [location, setLocation] = useState('');
  const [image, setImage] = useState(null);

  // Handle file input change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform actions with the uploaded image and other details (e.g., send to the server)
    console.log('Category:', category);
    console.log('Product Cost:', productCost);
    console.log('Location:', location);
    console.log('Image:', image);
  };

  return (
    <div>
      <h2>Product Upload</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Category:</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Product Cost:</label>
          <input
            type="number"
            value={productCost}
            onChange={(e) => setProductCost(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Location:</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Product Image:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
        </div>
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

export default ProductUpload;
