import Shoppagetitle from './shoppage/shoppagetitle';
import Shopmain from './shoppage/filters';
import ShopCard from './shoppage/shopcards';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import './App.css';

// import data from './components/shoppage/data';
import ProductDetails from  './productDetails/productdetails.jsx';
export default function ShopMainPage() {

  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8080/api/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    // Fetch products from your server or API
    fetchProducts();
  }, []);
  
    const content=products.map((item)=>{
      return <ShopCard key={item._id}  title={item.name} image={item.imageUrl} 
      price = {item.price} id={item._id} />
    })
    // description ={item.description}
  return (
    <div className="App">
      <header className="App-header">
      {/* Page 1 /}
        <Shoppagetitle />
        <Shopmain />
      <div className='all-cards'>
        {content}
      </div>

      {/ page 2 */}
      {/* <ProductDetails /> */}

      <Shoppagetitle />
      <Shopmain />
      <div className='all-cards'>
        {content}
      </div>
      <ProductDetails />



      </header>
    </div>
  );
}


