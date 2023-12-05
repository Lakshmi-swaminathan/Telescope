import React from "react";
import axios from 'axios';
import '../components/Style/ProductUpload.css';
import Header from './Layout/Header'
import { useNavigate } from "react-router-dom";
<components></components>




export default function ProductUpload() {


 const navigate=useNavigate()
 const [formdata, setformdata] = React.useState({
   productname: "",
   productcost: "",
   email: "",
   productdescription: "",
   condition: "",
   image: ""
 });


 function handlechangefn(event) {
   setformdata((prevformdata) => {
     return {
       ...prevformdata,
       [event.target.name]: event.target.value
     };
   });
 }


 // Function to extract file ID from Google Drive link
 const extractFileId = (link) => {
   const match = link.match(/\/file\/d\/(.*?)\//);
   return match ? match[1] : "";
 };


 // Function to handle input change and update image link
 // const handleImageChange = (event) => {
 //   const link = event.target.value;
 //   const fileId = extractFileId(link);
 //   const imageLink = fileId ? `https://drive.google.com/uc?id=${fileId}` : "";
 //   setformdata((prevData) => ({ ...prevData, image: imageLink }));
 // };


 // function handlesubmit(event) {
 //   event.preventDefault();
  
 //   axios.post('http://127.0.0.1:8080/api/add-product', {
 //     name: formdata.productname,
 //     description: formdata.productdescription,
 //     price: formdata.productcost,
 //     imageUrl: formdata.image,
 //   });
  
 //   console.log(formdata);
 // }


 function handlesubmit(event) {
   event.preventDefault();
   const link = formdata.image;
   const fileId = extractFileId(link);


   const imageLink = fileId ? `https://drive.google.com/uc?id=${fileId}` : "";
   setformdata((prevData) => ({ ...prevData, image: imageLink }));


   axios.post('http://127.0.0.1:8080/api/add-product', {
     name: formdata.productname,
     description: formdata.productdescription,
     price: formdata.productcost,
     imageUrl: formdata.image,
   });
   navigate('/SubmitProduct')
   console.log(formdata.image);


 }




 return(
   <div>
     <Header />
     <form className="fullform" onSubmit={handlesubmit}>
     <h1>Pleased Upload the Product</h1>
     <input
     className="nonradiobutton"
     type="text"
     placeholder="Product Name"
     name="productname"
     value={formdata.productname}
     onChange={handlechangefn}
     required/>


     <input type="number"
     className="nonradiobutton"
     placeholder="Product Cost"
     name="productcost"
     value={formdata.productcost}
     onChange={handlechangefn}
     required/>


     <input type="email"
     className="nonradiobutton"
     placeholder="Email"
     name="email"
     value={formdata.email}
     onChange={handlechangefn}
     required/>


     {/* <input
       type="text"
       className="nonradiobutton"
       placeholder="drive Link"
       name="image"
       value={formdata.image}  // Change this line to value={formdata.imageLink}
       onChange={handlechangefn}
       required
     /> */}
     <input
       type="text"
       className="nonradiobutton"
       placeholder="Drive Link"
       name="image"
       value={formdata.image}
       onChange={handlechangefn}
       required
     />


     <textarea
     name="productdescription"
     className="nonradiobutton"
     id="" cols="50"
     placeholder="Include Description about the Product"
     value={formdata.productdescription}
     onChange={handlechangefn}
     rows="10"
     required></textarea>


     <div className="radiobutton">
       <fieldset>
         <legend>Please select an option from below</legend>
         <div className="individualrbtn">
             <input type="radio"
             name="condition"
             id="new"
             value="new"
             onChange={handlechangefn}
             />
             <label htmlFor="new">New</label>
         </div>
            
         <div className="individualrbtn">
             <input type="radio"
             name="condition"
             id="used-new"
             value="used-new"
             onChange={handlechangefn}
            
             />
             <label htmlFor="new">Used-New</label>
         </div>


         <div className="individualrbtn">
             <input type="radio"
             name="condition"
             id="used-good"
             value="used-good"
             onChange={handlechangefn}
            
             />
             <label htmlFor="new">Used-Good</label>
         </div>
        
         <div className="individualrbtn">
             <input type="radio"
             name="condition"
             id="used-fair"
             value="used-fair"
             onChange={handlechangefn}
             />
             <label htmlFor="new">Used-Fair</label>
         </div>
            
         </fieldset>
         </div>


        
         {/* <input
           type="text"
           name="image"
           // className="nonradiobutton"
           id="" cols="50"
           placeholder="Please paste the Google Drive link of Image"
           value={formdata.image}
           // onChange={handleImageChange}
           rows="10"
           required></input>
         <br /> */}
        
     <button type="submit">Submit</button>
 </form>
   </div>
  
 )
 }
