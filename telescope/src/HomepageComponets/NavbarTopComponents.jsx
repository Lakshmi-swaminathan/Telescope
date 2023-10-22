/* NavbarTop.js */

import { useState } from 'react';
import '../HomepageComponets/NavbarTopComponents.css';
import { useLocation } from 'react-router-dom';
import '../HomepageComponets/Drop.css';
import SearchBar from '../HomepageComponets/SearchBar';
import tele from '../images/tele_pic.jpeg';
import LocationSelector from '../HomepageComponets/LocationSelector';

function NavbarTop() {
  const [count, setCount] = useState(0);
  const location = useLocation();

  return (
    <div className="container">
      <div className="items ">
        <img src={tele} alt="tele logo" className="navbar-logo" />
        <LocationSelector />
        <SearchBar />
      </div>
    </div>
  );
}

export default NavbarTop;
