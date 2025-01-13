import React from 'react'
import './Benefit.css';


const Benefit: React.FC = () => {
    return (
        <section className="benefit">

            <div className="bene-container">

                <div className="bene-side">
                    <h1>
                    Join the club and get the benefits
                    </h1>

                    <h5>
                    Sign up for our newsletter and receive exclusive offers on new <br/>
                     ranges, sales, pop up stores and more
                    </h5>

                    <form>
                        <div className="email-container">
                            <input type="text" placeholder="Enter your email" />
                            <button className="Sign-up" id="Sign-up">
                                Sign-up
                            </button>
                        </div>
                    </form>
                </div>

            </div>

        </section>

    )

}

export default Benefit
