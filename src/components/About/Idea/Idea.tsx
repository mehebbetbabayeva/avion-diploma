import React from 'react'
import "./Idea.css"
import armchair from "../../../assets/images/idea/armchair.png"
import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router-dom'

const Idea = () => {
  return (
    <section className="idea">
        
                <div className="idea-container">
             
                        <div className="idea-left-side">
                            <h1>
                              <FormattedMessage id='about4'/>
                         
                            </h1>

                            <h5>
                            <FormattedMessage id='about5'/>

                             <br />
                            <FormattedMessage id='about6'/>

                            
                            </h5>
                           
                                 <Link to="/products" style={{textDecoration:"none"}} className="view-collect">    <FormattedMessage id='view'/></Link>

                          
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