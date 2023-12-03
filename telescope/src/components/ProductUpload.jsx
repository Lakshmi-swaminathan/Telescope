import React from "react";
import axios from 'axios';

export default function ProductUpload(){

  const [formdata,setformdata]= React.useState({productname:"",productcost:"",
  email:"", productdescription:"",condition:"",image:""})


  function handlechangefn(event) {

    setformdata(prevformdata => {
        return {
            ...prevformdata,
            [event.target.name]: event.target.value
        };
    });
   }

  function handlesubmit(event){
      event.preventDefault()
      axios.post('http://10.0.0.199:8080/api/add-product', 
      { 
        name: formdata.productname,
        description: formdata.productdescription,
        price: formdata.productcost,
        imageUrl: formdata.image,
      });
      console.log(formdata)
  }

  return(

    <form className="fullform" onSubmit={handlesubmit}>
      <input 
      className="nonradiobutton"
      type="text" 
      placeholder="Product Name" 
      name="productname" 
      value={formdata.productname}
      onChange={handlechangefn} />

      <input type="number" 
      className="nonradiobutton" 
      placeholder="Product Cost" 
      name="productcost" 
      value={formdata.productcost}
      onChange={handlechangefn} />

      <input type="email"
      className="nonradiobutton"
      placeholder="Email" 
      name="email" 
      value={formdata.email}
      onChange={handlechangefn} />

      <textarea 
      name="productdescription" 
      className="nonradiobutton"
      id="" cols="50" 
      placeholder="Include Description about the Product"
      value={formdata.productdescription}
      onChange={handlechangefn}
      rows="10"></textarea>

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

          
          <textarea 
            name="image" 
            className="nonradiobutton"
            id="" cols="50" 
            placeholder="Please paste the Google Drive link of Image"
            value={formdata.image}
            onChange={handlechangefn}
            rows="10"></textarea>
          <br />
          
      <button type="submit">Submit</button>
  </form>
  )
  }