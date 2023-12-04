import React from "react";
import '../components/Style/ProductUpload.css';

export default function CustomerProfile(){
  return (
    <div className="customerprofile">
      <div className="columns">
       
        <div className="column account-column">
          <h2>Account</h2>
          <span className="order-link">View Orders</span>
          <br />
          <span className="logout-link">Logout</span>
        </div>

        <div className="column details-column">
          <div className="userdetails">
            <h2>Your Profile</h2>
            <span>Username</span>
            <br /><br />
            <span>UserEmail</span>
            <br /><br />
            <span>UserPhoneNumber</span>
            <br /><br />
            <h2>Password:</h2>
            <span>******************</span>
          </div>
        </div>
      </div>
    </div>
  );
};
