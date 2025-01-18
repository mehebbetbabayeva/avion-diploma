import React from 'react'
import './hyper.css'
import sofa from "../../../assets/images/hyper/sofa.png"

const hyper = () => {
  return (
    <section className="hyper">
        
                <div className="hyper-container">
                <div className="hyper-right-side">
                            <img
                                src={sofa}
                                alt="hyper Image"
                                className="w-100 hyper-image"
                            />

                        </div>
             
                        <div className="hyper-left-side">
                            <h1>
                            Our service isn’t just personal, it’s actually <br />
                            hyper personally exquisite

                            </h1>

                            <h5>
                            When we started Avion, the idea was simple. Make high quality furniture <br />
                             affordable and available for the mass market. <br />
                             
                               Handmade, and lovingly crafted furniture and homeware is what we live, <br />
                               breathe and design so our Chelsea boutique become the hotbed for the <br />
                               London interior design community.
                            </h5>
                           
                                 <button className="view-collect">Get in touch</button>

                          
                        </div>
                  
          
                      
                  
                </div>
       
        </section>
  )
}

export default hyper