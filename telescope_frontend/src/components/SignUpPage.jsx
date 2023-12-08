import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUpPage = () => {
  // Define state variables to store user input
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSignUp = (e) => {
    e.preventDefault();

    // Perform validation here (e.g., check if fields are not empty)

    // Send the form data to the server or perform other actions
    console.log('Form data submitted:', formData);
  };
  const navigate = useNavigate();
  return (

    <>
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSignUp}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" onClick={()=> navigate('./sign-up')}>Sign Up</button>
      </form>
    </div>

  
    
    </>
    
  );
};

export default SignUpPage;
