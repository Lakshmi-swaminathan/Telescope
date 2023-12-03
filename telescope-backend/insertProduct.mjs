// insertProduct.js
import axios from 'axios';

const productData = [
  {
    name: 'Study Table',
    description: 'Wooden study table',
    price: 29.99,
    imageUrl: 'https://st3.depositphotos.com/1014680/16209/i/450/depositphotos_162094036-stock-photo-used-wooden-table-isolated.jpg',
  },
  {
    name: 'Chair',
    description: 'Wooden chair',
    price: 39.99,
    imageUrl: 'https://s3.dutchcrafters.com/uploads/posimage/Amish-Simple-Mission-Kitchen-Chair-500528.jpg',
  },
  {
    name: 'Product 3',
    description: 'Study lamp',
    price: 49.99,
    imageUrl: 'https://m.media-amazon.com/images/I/61Ckk6bdzwL.jpg',
  },
];

const apiUrl = 'http://localhost:8080/api/add-product'; // Assuming your server is running on port 8080

productData.forEach(product => {
  axios.post(apiUrl, product)
    .then(response => {
      console.log(`Product "${product.name}" inserted successfully:`, response.data);
    })
    .catch(error => {
      console.error(`Error inserting product "${product.name}":`, error.response.data);
    });
});