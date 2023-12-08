import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "./header";


export default function SubmitProduct() {
  const style = {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#4CAF50',
    color: 'white',
    borderRadius: '5px',
    marginTop: '20px',
  };
  const navigate = useNavigate();
  return (
    <>
        <Header/>
        <div style={style}>
        <h1>Product is Successfully added</h1>
        <button onClick={() => navigate('/homepage')}>Please go back to the Home Page</button>
        </div>
        
    </>

  );
}