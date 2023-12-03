import React from 'react';
import '../../styles/productdetails.css'


export default function shoppagetitle(){


    return(
        <div className='Hero'>
            <div className='content'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Left_side_of_Flying_Pigeon.jpg" className='product-image'></img>
                <div className='content-information'>
                    <div className='all-details'>
                        <div className='model-overview'>
                            <div className='model-inner1'>
                                <p className='product-details-title'>A Nice Bike</p>
                                <div className='model-inner2'>
                                    <div className='model-inner2-review'>
                                        {[...Array(5)].map((star, i) => {
                                            const rating = i + 1;
                                            return (<span>★</span>);  
                                        })}
                                        
                                    </div>
                                    <p>4.7</p>
                                </div>
                            </div>
                            <p className='product-price'>$40</p>
                        </div>
                        <div className='model-details'>
                            <div className='cart-description'>
                                <button className='cart-button'>
                                        Add To Cart
                                </button>
                                
                                <div className='description'>
                                    <p className='about-product'>
                                    Make putting on your shoes as easy as pulling on a printed cotton saree - their unique stretching properties adapt to your foot's movements and prevent getting untied, and now you can customize with multiple vibrant colors in the right size for your saree.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
