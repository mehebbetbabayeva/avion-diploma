

import "./popularcards.css"
import Popularcard from './Popularcard'
import axios from "axios";
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";


interface Melumat {
  id:number,
  popular_image:string,
  popular_context:string,
  popular_price:string
}

const Popularcards: React.FC = () => {


  const [data, setData] = useState<Melumat[]>([]); 
  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const response = await axios.get("/popular.json"); 
        setData(response.data);
      
      } catch (error) {
        console.error("Data fetch error:", error);
       
      }
    };

    fetchData();
  }, []);
  return (
    <div className='popularcard-container'>
      <h3 className='popular-title'><FormattedMessage id='popularcardtitle'/></h3>
      <div className='popularcards-container'>
 

        {
          data && data.map((birMelumat) => (
      
            <div
              className="popularcard"
            
            >
              <Popularcard
                imageProps={birMelumat.popular_image}
                contextProps={birMelumat.popular_context}
                priceProps={birMelumat.popular_price}
              />
            </div>
    
          ))
        }
       
      


  
      </div>
      <Link to="/" className='popular-button'  style={{textDecoration:"none"}}><button className="view-collect"><FormattedMessage id='view'/></button></Link> 
    </div>

  )
}

export default Popularcards