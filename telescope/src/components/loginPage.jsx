import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignUpPage from './SignUpPage';
import ProductUpload from './ProductUpload';
import Drop from '../HomepageComponets/Drop'
import '../HomepageComponets/Drop.css'
import HomePage from '../components/HomePage.jsx'

function LoginPage() {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = () => {
    // Add your authentication logic here (e.g., validate username and password)
    if (formData.username === 'exampleUser' && formData.password === 'password123') {
      alert('You\'re logged in!');
      setIsLoggedIn(true);
    } else {
      alert('Login failed. Please check your username and password.');
    }
  };

  return (
    <>
    <div className="login-page">
      {isLoggedIn ? (
        
      <>
        <Drop></Drop>
        <HomePage/>
        <ProductUpload/>
      </>
      ) : (
        <form>
          <div className="form-group">
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
          <button type="button" onClick={handleLogin}>
            Login
          </button>
        </form>
      )}
      
    </div>
    
    </>
  );
}

export default LoginPage;
