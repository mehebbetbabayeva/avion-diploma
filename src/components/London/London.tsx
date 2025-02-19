import React, { useEffect } from 'react';
import './London.css';
import london from "../../assets/images/london/Sofa.png";
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const London: React.FC = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,  
            once: false, 
            mirror:true     
        });
    }, []);

    return (
        <section className="London">

            <div className="london-container">
                {/* Left Side */}
                <div className="london-left-side" data-aos="fade-right">
                    <div>
                        <h1>
                            <FormattedMessage id='london1'/> <br /> 
                            <FormattedMessage id='london2'/>  
                        </h1>

                        <p>
                            <FormattedMessage id='london3'/>  
                            <br />
                            <FormattedMessage id='london4'/> 
                        </p>

                        <p>
                            <FormattedMessage id='london5'/>  
                            <br />
                            <FormattedMessage id='london6'/>  
                            <br />
                            <FormattedMessage id='london7'/>  
                        </p>
                    </div>

                    <Link to="/contact" style={{ textDecoration: "none" }} className="get-intouch" data-aos="zoom-in">
                        <FormattedMessage id='get'/>
                    </Link>
                </div>

                {/* Right Side */}
                <div className="london-right-side" data-aos="fade-left">
                    <img
                        src={london}
                        alt="London Image"
                        className="w-100 london-image"
                    />
                </div>
            </div>

        </section>
    );
}

export default London;
