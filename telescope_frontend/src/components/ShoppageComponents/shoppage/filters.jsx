import React, { useState} from 'react';
import '../../../Style/filters.css';

export default function Dropdown() {
  const [availability, setAvailability] = useState('Availability ▼');
  const [price, setPrice] = useState('Price ▼');
  const [sort, setSort] = useState('Sort By ▼');


  return (
    <div className="dropdown">
      <div className="dropdown__item">
        <button className="dropdown__button">{availability}</button>
        <ul className="dropdown__list">
          <li onClick={() => setAvailability('In Stock')}>In Stock</li>
          <li onClick={() => setAvailability('Out of Stock')}>Out of Stock</li>
        </ul>
      </div>
      <div className="dropdown__item">
        <button className="dropdown__button">{price}</button>
        <ul className="dropdown__list">
          <li onClick={() => setPrice('Low to High')}>Low to High</li>
          <li onClick={() => setPrice('High to Low')}>High to Low</li>
        </ul>
      </div>
      <div className="dropdown__item">
        <button className="dropdown__button">{sort}</button>
        <ul className="dropdown__list">
          <li onClick={() => setSort('Newest')}>Newest</li>
          <li onClick={() => setSort('Oldest')}>Oldest</li>
        </ul>
      </div>
    </div>
  );
}