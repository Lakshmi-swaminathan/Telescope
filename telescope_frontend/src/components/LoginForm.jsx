//LoginForm.jsx
import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'; 
import '../Style/loginform.css';
import Logo from '../images/logo.png'

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate=useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      await axios.post(
        'https://telescope-0jle.onrender.com/user/login-user',
        {
          email,
          password,
        },
        { withCredentials: true }
      );
  
      alert('Login successful!');
      navigate('/home-page');
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError('Invalid credentials');
      }  
    }
  };

  return (
    <div className='entire-form-element'>
      <img src={Logo} className='logo-forloginform' alt="Login"></img>
      <form onSubmit={handleSubmit} className="login-form">
      <label className="form-label">
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="form-input"
        />
      </label>
      <br />
      <label className="form-label">
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="form-input"
        />
      </label>
      
      <button type="submit" className="submit-button">
        Submit
      </button>
      <br />
      {/* <a href="#" className="forgot-password">
        Forgot your password?
      </a> */}
      <button type="button" onClick={() => navigate("/new-user")} className="sign-up-button">
        Don't have an account? Sign Up
      </button>
      {error && <p className="error-message">{error}</p>}
    </form>
    </div>
    
  );
  }