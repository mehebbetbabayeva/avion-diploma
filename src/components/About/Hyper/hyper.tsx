import React, { useEffect } from 'react';
import './hyper.css';
import sofa from "../../../assets/images/hyper/sofa.png";
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hyper = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,  
      once: false,      
      mirror: true      
    });
  }, []);

  return (
    <section className="hyper">
      <div className="hyper-container">
        

        <div className="hyper-right-side" data-aos="fade-left">
          <img
            src={sofa}
            alt="Hyper Image"
            className="w-100 hyper-image"
          />
        </div>


        <div className="hyper-left-side" data-aos="fade-right">
          <h1>
            <FormattedMessage id='about7'/>
            <br />
            <FormattedMessage id='about8'/>
          </h1>

          <h5>
            <FormattedMessage id='about9'/>
            <br />
            <FormattedMessage id='about10'/>
            <br />
            <FormattedMessage id='about11'/>
            <br />
            <FormattedMessage id='about12'/>
            <br />
            <FormattedMessage id='about13'/>
          </h5>

          <Link 
            to="/contact" 
            style={{ textDecoration: "none" }} 
            className="view-collect" 
            data-aos="zoom-in"
          > 
            <FormattedMessage id='get'/>
          </Link>
        </div>

      </div>
    </section>
  );
}

export default Hyper;
