import React from 'react'
import './Footers.css'
import footerem from "../../assets/images/footerem/facebook.svg";
import footerem from "../../assets/images/footerem/instagram.svg";
import footerem from "../../assets/images/footerem/linkedin.svg";
import footerem from "../../assets/images/footerem/twitter.svg";
import footerem from "../../assets/images/footerem/youtube.svg";


const Footers: React.FC = () => {
    return (
        <footer className="footer py-5">
            <div className="container">
                <div className="row">

                    <div className="col-12 col-md-3 col-lg-2 footer-center">
                        <h5 className="text-uppercase">Menu</h5>
                        <div className="footer-center-links">
                            <a href="" className="text-secondary">New arrivals</a>
                            <a href="" className="text-secondary">Best sellers</a>
                            <a href="" className="text-secondary">Recently viewed</a>
                            <a href="" className="text-secondary">Popular this week</a>
                            <a href="" className="text-secondary">All products</a>
                        </div>
                    </div>

                    <div className="col-12 col-md-3 col-lg-2  footer-center">
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

                    <div className="col-12 col-md-3 col-lg-2 footer-center">
                        <h5 className="text-uppercase">Our company</h5>
                        <div className="footer-center-links">
                            <a href="" className="text-secondary">About us</a>
                            <a href="" className="text-secondary">Vacancies</a>
                            <a href="" className="text-secondary">Contact us</a>
                            <a href="" className="text-secondary">Privacy</a>
                            <a href="" className="text-secondary">Returns policy</a>
                        </div>
                    </div>


                    <div className="col-12 col-md-3">
                        <div className="footer-right mt-9 ">
                            <h4>Shopify</h4>
                            <form>
                                <div className="email-container">
                                    <input type="text" placeholder="your@email.com" />
                                    <button className="Sign up" id="Sign-up">
                                        Sign-up
                                    </button>
                                </div>
                            </form>


                            <div className=" footer footer py-5">
                                <div className="container">

                                    <div className="social-links">
                                        
                                    <h3>Copyright 2022 Avion LTD</h3>

                                        <a href=""><img src={facebook} alt="" /></a>
                                        <a href=""><img src={instagram} alt="" /></a>
                                        <a href=""><img src={twitter} alt="" /></a>
                                        <a href=""><img src={linkedin} alt="" /></a>
                                        <a href=""><img src={youtube} alt="" /></a>
                                    </div>

                                   
                                    

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </footer>

     )

}

 export default Footers