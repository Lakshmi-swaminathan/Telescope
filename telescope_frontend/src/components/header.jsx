import React from "react";
import Logo from '../images/logo.png';
import '../Style/main.css'
import Navbar from "./navbar";
import { useNavigate } from "react-router-dom";

export default function Header(){

    const navigate = useNavigate();
    return(
        
        <>
           <div className="icon-Upload">  
                <img src={Logo} className="tele-logo" alt="tele-logo"></img>
                <button className="product-upload-button" onClick={
                    ()=>{navigate('/product-upload')}}>Upload Product &gt;</button>
           </div>
           <Navbar/>
        </>
    )
}