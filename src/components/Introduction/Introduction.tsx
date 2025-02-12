import React from 'react'
import './Introduction.css';
import intro from "../../assets/images/introduction/intro.svg";
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

const Introduction: React.FC = () => {
    return (
        <section className="introduction">
        
                <div className="intro-container">
                    {/* Sol tərəf */}
             
                        <div className="intro-left-side">
                            <h1>
                          <FormattedMessage id='thefuture'/>   <br />   <FormattedMessage id='thefuture2'/>  
                            </h1>
                           
                                 <Link to="/products" className="view-collect view-center" style={{textDecoration:"none"}}><FormattedMessage id='view'/></Link>

                            <h5>
                            <FormattedMessage id='introtext1'/>  
                            <br />
                            <FormattedMessage id='introtext2'/>  
                          <br />
                          <FormattedMessage id='introtext3'/>  
                           
                            </h5>
                        </div>
                  

                    {/* Sağ tərəf */}
          
                        <div className="intro-right-side">
                            <img
                                src={intro}
                                alt="Introduction Image"
                                className="w-100 intro-image"
                            />

                        </div>
                  
                </div>
       
        </section>
    )
}

export default Introduction