import React, { useEffect } from "react";
import "./Introduction.css";
import intro from "../../assets/images/introduction/intro.svg";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { gsap } from "gsap";

const Introduction: React.FC = () => {
    useEffect(() => {
        gsap.from(".intro-left-side", { opacity: 0, x: -100, duration: 1.2, ease: "power3.out" });
        gsap.from(".intro-right-side", { opacity: 0, x: 100, duration: 1.2, ease: "power3.out" });
        gsap.from(".intro-left-side h1", { opacity: 0, y: 50, duration: 1, delay: 0.5 });
        gsap.from(".view-collect", { opacity: 0, scale: 0.5, duration: 0.8, delay: 0.8, ease: "back.out(1.7)" });
        gsap.from(".intro-left-side h5", { opacity: 0, y: 50, duration: 1, delay: 0.5 });
       
    }, []);

    return (
        <section className="introduction">
            <div className="intro-container">
                <div className="intro-left-side">
                    <h1>
                        <FormattedMessage id="thefuture" /> <br /> <FormattedMessage id="thefuture2" />
                    </h1>
                    <Link to="/products" className="view-collect view-center">
                        <FormattedMessage id="view" />
                    </Link>
                    <h5>
                        <FormattedMessage id="introtext1" />
                        <br />
                        <FormattedMessage id="introtext2" />
                        <br />
                        <FormattedMessage id="introtext3" />
                    </h5>
                </div>

                <div className="intro-right-side">
                    <img src={intro} alt="Introduction Image" className="w-100 intro-image" />
                </div>
            </div>
        </section>
    );
};

export default Introduction;
