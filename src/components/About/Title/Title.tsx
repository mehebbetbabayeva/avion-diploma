import React, { useEffect } from 'react';
import "./Title.css";
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Title = () => {
 
  useEffect(() => {
    AOS.init({
      duration: 1000,  
      once: false,    
      mirror: true      
    });
  }, []);

  return (
    <section className="Title">
      <div className="title-container">
        <div className='about-title' data-aos="fade-up">
          <FormattedMessage id='about1'/>
          <br />
          <FormattedMessage id='about2'/>
        </div>

        <Link 
          to="/products" 
          style={{ textDecoration: "none" }} 
          className="view-products" 
          data-aos="zoom-in"
        >    
          <FormattedMessage id='about3'/>
        </Link>
      </div>
    </section>
  );
}

export default Title;
