import React, { useState } from "react";
import '../components/Style/ProductUpload.css'

export default function EditProfile() {
  const [username, setusername] = useState("");
  const [phone, setphone] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  function handleusername(event) {
    setusername(event.target.value);
  }
  function handlephonenumber(event) {
    setphone(event.target.value);
  }
  function handleemail(event) {
    setemail(event.target.value);
  }
  function handlepassword(event) {
    setpassword(event.target.value);
  }
  function updateuserprofile() {
    // Perform the logic to update user details in the database
    // You can use the state variables (username, phone, email, password) here
  }

  return (
    <div className="edit-profile-container">
      <h1>Edit Your Profile</h1>
      <form className="edit-profile-form" onSubmit={updateuserprofile}>
        <div className="form-group">
          <label htmlFor="username">Username: </label>
          <input
            onChange={handleusername}
            type="text"
            id="username"
            name="username"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password"> Password: </label>
          <input
            onChange={handlepassword}
            type="password"
            id="password"
            name="password"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number: </label>
          <input
            onChange={handlephonenumber}
            type="tel"
            id="phone"
            name="phone"
            pattern="[0-9]{10}"
            placeholder="Enter 10-digit phone number"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address: </label>
          <input
            onChange={handleemail}
            type="email"
            id="email"
            name="email"
            placeholder="example@example.com"
            required
          />
        </div>

        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

