import React, { useEffect } from 'react';
import "./Idea.css";
import armchair from "../../../assets/images/idea/armchair.png";
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Idea = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: false,      
      mirror: true     
    });
  }, []);

  return (
    <section className="idea">
      <div className="idea-container">
        {/* Sol tərəf */}
        <div className="idea-left-side" data-aos="fade-right">
          <h1>
            <FormattedMessage id='about4'/>
          </h1>

          <h5>
            <FormattedMessage id='about5'/>
            <br />
            <FormattedMessage id='about6'/>
          </h5>

          <Link 
            to="/products" 
            style={{ textDecoration: "none" }} 
            className="view-collect" 
            data-aos="zoom-in"
          >    
            <FormattedMessage id='view'/>
          </Link>
        </div>

        {/* Sağ tərəf */}
        <div className="idea-right-side" data-aos="fade-left">
          <img
            src={armchair}
            alt="Idea Image"
            className="w-100 idea-image"
          />
        </div>
      </div>
    </section>
  );
}

export default Idea;
