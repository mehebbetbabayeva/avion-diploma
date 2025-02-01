import React from 'react'
import './London.css';
import london from "../../assets/images/london/Sofa.png";
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

const London: React.FC = () => {
    return (
        <section className="London">

            <div className="london-container">
                {/* Sol tərəf */}

                <div className="london-left-side">
                   <div>
                   <h1>
                   <FormattedMessage id='london1'/>    <br /> 
                   <FormattedMessage id='london2'/>  
                    </h1>


                    <p>
                   <FormattedMessage id='london3'/>  

               <br />
               <FormattedMessage id='london4'/> 
                    </p>

                   <p>
                   <FormattedMessage id='london5'/>  
                   <br />
                   <FormattedMessage id='london6'/>  
                  <br />
                  <FormattedMessage id='london7'/>  
             
                    </p>
                   </div>

                  
                  <Link to="/contact" style={{textDecoration:"none"}} className="get-intouch">  <FormattedMessage id='get'/></Link>

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