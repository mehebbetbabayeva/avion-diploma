

import "./popularcards.css"
import Popularcard from './Popularcard'
import axios from "axios";
import { useEffect, useState } from 'react';


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
      <h3 className='popular-title'>Our popular products</h3>
      <div className='popularcards-container'>
 

        {
          data && data.map((birMelumat,index) => (
      
            <div
              className="popularcard"
              style={{ width: index === 0 ? "630px" : "300px" }} 
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
      <div className='popular-button'><button className="view-collect">View collection</button></div> 
    </div>

  )
}

export default Popularcards