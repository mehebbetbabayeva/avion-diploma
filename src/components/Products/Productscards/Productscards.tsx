
import "./Productscards.css"
import Productscard from './Productscard'
import axios from "axios";
import { useEffect, useState } from 'react';


interface Melumat {
  id:number,
  Products_image:string,
  Products_context:string,
  Products_price:string
}

const Productscards: React.FC = () => {


  const [data, setData] = useState<Melumat[]>([]); 
  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const response = await axios.get("/Product.json"); 
        setData(response.data);
      
      } catch (error) {
        console.error("Data fetch error:", error);
       
      }
    };

    fetchData();
  }, []);
  return (
    <div className='Productscard-container'>
      <h3 className='Products-title'>Our Products products</h3>
      <div className='Productscards-container'>
 

        {
          data && data.map((birMelumat) => (
      
            <div
              className="Productscard"
            
            >
              <Productscard
                imageProps={birMelumat.Products_image}
                contextProps={birMelumat.Products_context}
                priceProps={birMelumat.Products_price}
              />
            </div>
    
          ))
        }
       
      


  
      </div>
      <div className='Products-button'><button className="view-collect">View collection</button></div> 
    </div>

  )
}

export default Productscards