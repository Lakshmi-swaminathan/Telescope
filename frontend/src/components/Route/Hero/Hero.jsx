import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";
import Homepage from '../../../Assests/homepage.png';
import { useNavigate } from "react-router-dom";


const Hero = () => {
  // const navigate = useNavigate(); // Move useNavigate here

  // const handleLogin = () => {
  //   navigate('/login');
  // }
  return (
    <div
      className={`relative min-h-[50vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
      style={{
        backgroundImage:
        `url(${Homepage})`,
      }}
    >
      <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
        <h1
          className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#3d3a3a] font-[600] capitalize`}
        >
          ONE STOP SHOP FOR <br /> PFW STUDENTS
        </h1>
        <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#000000ba]">
          {/* Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae,
          assumenda? Quisquam itaque <br /> exercitationem labore vel, dolore
          quidem asperiores, laudantium temporibus soluta optio consequatur{" "}
          <br /> aliquam deserunt officia. Dolorum saepe nulla provident. */}
        </p>
        <Link to="/login" className="inline-block">
            <div className={`${styles.button} mt-5`}>
                 {/* <button onClick={handleLogin} className="text-[#fff] font-[Poppins] text-[18px]"> */}
                 <button className="text-[#fff] font-[Poppins] text-[18px]">
                    Login/Sign-Up
                 </button>
            </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
