import React from "react";


export default function UploadContent(){

    const [formdata,setformdata]= React.useState({productname:"",productcost:"",
    email:"", productdescription:"",condition:"",images:[]})
    
  
    function handlechangefn(event) {
        
        if (event.target.type === "file") {
            // Handle file uploads separately
            setformdata(prevformdata => {
                return {
                    ...prevformdata,
                    images: [...prevformdata.images, ...event.target.files]
                };
            });
        } else {
            // Handle other form fields
            setformdata(prevformdata => {
                return {
                    ...prevformdata,
                    [event.target.name]: event.target.value
                };
            });
        }
        }

        function handlesubmit(event){
            event.preventDefault()
            
  
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

            <input type="text" 
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

                {/* File input for images */}
                <div className="file-upload">
                    <label htmlFor="imageUpload">Upload Images:</label>
                    <input
                        type="file"
                        id="imageUpload"
                        name="images"
                        accept="image/*"
                        multiple
                        onChange={handlechangefn}
                />
                </div>
                <br />
                
            <button type="submit">Submit</button>
        </form>
    )
}