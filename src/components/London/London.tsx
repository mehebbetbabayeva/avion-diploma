import React from 'react'
import './London.css';
import london from "../../assets/images/london/Sofa.png";

const London: React.FC = () => {
    return (
        <section className="London">

            <div className="london-container">
                {/* Sol tərəf */}

                <div className="london-left-side">
                    <h1>
                        From a studio in London to a global brand with <br /> over 400 outlets

                    </h1>


                    <h5>
                    When we started Avion, the idea was simple. Make high quality furniture <br />affordable and available for the mass market. 
                    
                    Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.
                    </h5>

                    <h5>
                    
                    Handmade, and lovingly crafted furniture and homeware is what we live,<br />
                     breathe and design so our Chelsea boutique become the hotbed for the <br />London interior design community.
                    </h5>

                    <button className="get-intouch">Get in touch</button>

                </div>


                {/* Sağ tərəf */}

                <div className="london-right-side">
                    <img
                        src={london}
                        alt="London Image"
                        className="w-100 london-image"
                    />

                </div>

            </div>

        </section>
    )
}

export default London