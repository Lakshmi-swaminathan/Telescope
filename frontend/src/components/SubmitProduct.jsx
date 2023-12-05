import React from "react";
import Header from "./Layout/Header";

export default function SubmitProduct() {
  const style = {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#4CAF50',
    color: 'white',
    borderRadius: '5px',
    marginTop: '20px',
  };

  return (
    <>
        <Header></Header>
        <div style={style}>
        <h1>Product is Successfully added</h1>
        <p>Please go back to the Home Page</p>
        </div>
    </>

  );
}