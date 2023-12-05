import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'; 

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate=useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        'http://localhost:8080/user/login-user',
        {
          email,
          password,
        },
        { withCredentials: true }
      );

      alert('Login successful!');
      navigate('/home-page');
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <br />
      
      <br />
      <button type="submit">Submit</button>
      <br />
      <a href="#">Forgot your password?</a>
      <br />
      <a href="#">Not have any account? Sign Up</a>
      <br />
      <button type="button" onClick={() => navigate('/sign-up')}>
        Not have any account? Sign Up
      </button>
      {error && <p>{error}</p>}
    </form>
  );
  }