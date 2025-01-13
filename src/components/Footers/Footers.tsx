import React from 'react'
import "./Footes.css"
import facebook from "../../assets/images/footerem/facebook.svg";
import instagram from "../../assets/images/footerem/instagram.svg";
import twitter from "../../assets/images/footerem/linkedin.svg";
import linkedin from "../../assets/images/footerem/twitter.svg";
import youtube from "../../assets/images/footerem/youtube.svg";


const Footers: React.FC = () => {
    return (
        <footer className="footer">
            
                <div className="ust-footer">

                    <div className=" ">
                        <h5 className="text-uppercase">Menu</h5>
                        <div className="footer-center-links">
                            <a href="" className="text-secondary">New arrivals</a>
                            <a href="" className="text-secondary">Best sellers</a>
                            <a href="" className="text-secondary">Recently viewed</a>
                            <a href="" className="text-secondary">Popular this week</a>
                            <a href="" className="text-secondary">All products</a>
                        </div>
                    </div>

                    <div className="">
                        <h5 className="text-uppercase">Categories</h5>
                        <div className="footer-center-links">
                            <a href="" className="text-secondary">Crockery</a>
                            <a href="" className="text-secondary">Furniture</a>
                            <a href="" className="text-secondary">Homeware</a>
                            <a href="" className="text-secondary">Plant pots</a>
                            <a href="" className="text-secondary">Chairs</a>
                            <a href="" className="text-secondary">Venture</a>
                        </div>
                    </div>

                    <div className=" ">
                        <h5 className="text-uppercase">Our company</h5>
                        <div className="footer-center-links">
                            <a href="" className="text-secondary">About us</a>
                            <a href="" className="text-secondary">Vacancies</a>
                            <a href="" className="text-secondary">Contact us</a>
                            <a href="" className="text-secondary">Privacy</a>
                            <a href="" className="text-secondary">Returns policy</a>
                        </div>
                    </div>


        
                        <div className="footer-right">
                            <h4>Shopify</h4>
                            <form>
                                <div className="email-container">
                                    <input type="text" placeholder="your@email.com" />
                                    <button className="footer-button" id="Sign-up">
                                        Sign up
                                    </button>
                                </div>
                            </form>


                         
                        </div>
                 
                </div>
              <div>
              <div className="alt-footer">
                       
                                <h2 >Copyright 2022 Avion LTD</h2>
                                    <div className="social-links">

                                

                                        <a href=""><img src={facebook} alt="" /></a>
                                        <a href=""><img src={instagram} alt="" /></a>
                                        <a href=""><img src={twitter} alt="" /></a>
                                        <a href=""><img src={linkedin} alt="" /></a>
                                        <a href=""><img src={youtube} alt="" /></a>
                                    </div>




                     

                            </div>
              </div>
      
        </footer>

    )

}

export default Footers