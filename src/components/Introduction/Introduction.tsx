import React from 'react'
import './Introduction.css';
import intro from "../../assets/images/introduction/intro.svg";

const Introduction: React.FC = () => {
    return (
        <section className="introduction py-5">
            <div className="container">
                <div className="intro-container">
                    {/* Sol tərəf */}
             
                        <div className="intro-left-side">
                            <h1>
                            The furniture brand for the <br /> future, with timeless designs
                            </h1>
                           
                                 <button className="view-collect">View collection</button>

                            <h5>
                            A new era in eco friendly furniture with Avelon, the French luxury retail brand <br />
                            with nice fonts, tasteful colors and a beautiful way to display things digitally <br />
                            using modern web technologies.
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
            </div>
        </section>
    )
}

export default Introduction