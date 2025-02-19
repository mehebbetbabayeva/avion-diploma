import React, { useEffect } from "react";
import AOS from "aos"; 
import "aos/dist/aos.css";
import "./Introduction.css";
import intro from "../../assets/images/introduction/intro.svg";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

const Introduction: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, 
      easing: "ease-in-out",
      once: false, 
      mirror:true   
    });
  }, []);

  return (
    <section className="introduction">
      <div className="intro-container">
 
        <div className="intro-left-side" data-aos="fade-up">
          <h1>
            <FormattedMessage id="thefuture" /> <br /> <FormattedMessage id="thefuture2" />
          </h1>


          <Link to="/products" className="view-collect view-center" data-aos="fade-up" data-aos-delay="300">
            <FormattedMessage id="view" />
          </Link>

  
          <h5 data-aos="fade-left" data-aos-delay="500">
            <FormattedMessage id="introtext1" />
            <br />
            <FormattedMessage id="introtext2" />
            <br />
            <FormattedMessage id="introtext3" />
          </h5>
        </div>

      
        <div className="intro-right-side" data-aos="zoom-in" data-aos-delay="700">
          <img src={intro} alt="Introduction Image" className="w-100 intro-image" />
        </div>
      </div>
    </section>
  );
};

export default Introduction;
