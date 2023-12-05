import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";
import Homepage from '../../../Assests/homepage.png';
import { useNavigate } from "react-router-dom";
import '../Hero/Hero.css'


const Hero = () => {
  // const navigate = useNavigate(); // Move useNavigate here

  // const handleLogin = () => {
  //   navigate('/login');
  // }
  const customStyle = {
    borderRadius: '15px',
    border: '7px solid #FFF',
    background: 'rgba(58, 57, 57, 0.07)',
    backdropFilter: 'blur(4.5px)',
    width: '546px',
    height: '288px',
    flexShrink: 0,
  };
  
  return (
    <div
      // className={`relative min-h-[50vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
      // style={{
      //   backgroundImage:
      //   `url(${Homepage})`,
      // }}
      className="Hero-banner"
    >
      <div 
      className={`${styles.section} w-[90%] 800px:w-[60%]`}
      >
        <h1 style={customStyle}>
          ONE STOP SHOP FOR <br /> PFW STUDENTS
        </h1>
        {/* <Link to="/login" className="inline-block">
            <div className={`${styles.button} mt-5`}>
                  <button onClick={handleLogin} className="text-[#fff] font-[Poppins] text-[18px]"> 
                 <button className="text-[#fff] font-[Poppins] text-[18px]">
                    Login/Sign-Up
                 </button>
            </div>
        </Link> */}
      </div>
    </div>
  );
};

export default Hero;
