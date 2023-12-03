import React from 'react';
import '../../styles/shoptitle.css';

export default function shoppagetitle(){


    return(
        <div className='title-outer-container'>
            <section className='title'>
                <div className='title-content'>
                    {/* <div className='title-content-inner'> */}
                        <div className='navigation'>
                            <p className='home-lable'>Home -&gt; </p>
                            <p className='shop-lable'>Shop</p>
                        </div>
                        <div className='title-quote'>
                            <h1 className='main-title'>Shop Page</h1>
                            <h2 className='quote'>Let’s design the place you always imagined.</h2>
                        </div>
                    {/* </div> */}
                    
                </div>
            </section>
        </div>
    )
}
