import React from 'react'
import './hyper.css'
import sofa from "../../../assets/images/hyper/sofa.png"
import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router-dom'

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
                            <FormattedMessage id='about7'/>
                             <br />
                            <FormattedMessage id='about8'/>

                         

                            </h1>

                            <h5>
                            <FormattedMessage id='about9'/>
                           <br />
                           <FormattedMessage id='about10'/>

                             <br />
                           <FormattedMessage id='about11'/>
                             
                               <br />
                           <FormattedMessage id='about12'/>

                              <br />
                              <FormattedMessage id='about13'/>
                              
                            </h5>
                           
                                 <Link to="/contact" style={{textDecoration:"none"}} className="view-collect view-center"> <FormattedMessage id='get'/></Link>

                          
                        </div>
                  
          
                      
                  
                </div>
       
        </section>
  )
}

export default hyper