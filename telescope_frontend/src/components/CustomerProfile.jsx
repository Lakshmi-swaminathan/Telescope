import React from "react";
import '../Style/ProductUpload.css';
import { useNavigate } from "react-router-dom";
import Header from '../components/header'

export default function CustomerProfile(){
  const navigate = useNavigate();
 return (

   <div className="customerprofile">
    {/* <Header/> */}
     <div className="columns">
     
       <div className="column account-column">
         <h2>Account</h2>
         <span className="order-link"  onClick={
          ()=>navigate('/order-complete')
         }>View Orders</span>
         <br />
         <span className="logout-link" onClick={
          ()=>navigate('/')
         }>Logout</span>
         
       </div>


       <div className="column details-column">
         <div className="userdetails">
           <h2>Your Profile</h2>
           <span>Lakshmi Swaminathan</span>
           <br /><br />
           <span>lakshmiswaminathan08@gmail.com</span>
           <br /><br />
           <span>260-410-9214</span>
           <br /><br />
           <h2>Password:</h2>
           <span>******************</span>
         </div>
       </div>
     </div>
   </div>
 );
};




