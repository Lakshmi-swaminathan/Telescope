import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  LoginPage from './components/loginPage.jsx';
import  SignUpPage from './components/SignUpPage.jsx';
import { BrowserRouter as Router, Route, Link, Routes, useLocation } from 'react-router-dom';

import Category from './HomepageComponets/CatergoryDropdown';
import './HomepageComponets/Drop.css'
import NavbarTop from './HomepageComponets/NavbarTopComponents';



function App() {
  const [count, setCount] = useState(0)
  const location = useLocation();


  return (
    <>
        <div>
        {location.pathname !== '/signup' && location.pathname !== '/login' && (
        <nav>
          <ul>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
        )}
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage/>} />
        </Routes>
        </div>
    </>
  )
}

export default App
