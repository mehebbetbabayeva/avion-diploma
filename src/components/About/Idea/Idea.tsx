import React from 'react'
import "./Idea.css"
import armchair from "../../../assets/images/idea/armchair.png"

const Idea = () => {
  return (
    <section className="idea">
        
                <div className="idea-container">
             
                        <div className="idea-left-side">
                            <h1>
                            It started with a small idea
                            </h1>

                            <h5>
                            A global brand with local beginnings, our story begain in a <br />
                             small studio in South London in early 2014
                            </h5>
                           
                                 <button className="view-collect">View collection</button>

                          
                        </div>
                  
          
                        <div className="idea-right-side">
                            <img
                                src={armchair}
                                alt="Idea Image"
                                className="w-100 idea-image"
                            />

                        </div>
                  
                </div>
       
        </section>
  )
}

export default Idea