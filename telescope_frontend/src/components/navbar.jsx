import React from "react";
import { faShoppingCart, faUserCircle,faHome, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../Style/Header.css'
import {useNavigate} from 'react-router-dom';



export default function Navbar(){
    
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/');
    };
    console.log('handleClick '+handleClick);
    return(
        
        <>
           <div className="Navbar">
                {/* <p>Home</p>
                <p>Shop</p> */}
                <div className="icons">
                    
                    <FontAwesomeIcon icon={faHome}  onClick={
                        () => navigate('/homepage')
                    }size="2x" />
                    
                    <FontAwesomeIcon icon={faShoppingBag} className="ShopBag" onClick={
                        () => navigate('/Shop')
                    } size="2x"/>
                    <FontAwesomeIcon icon={faShoppingCart} className="Cart" onClick={
                        () => navigate('/cart')
                    } size="2x"/>
                    <FontAwesomeIcon icon={faUserCircle} onClick={
                        () => navigate('/customer-profile')
                    } size="2x" />
                   
                </div>
                
           </div>
        </>
    )
}