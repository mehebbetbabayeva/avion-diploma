import "./popularcards.css";
import Popularcard from './Popularcard';
import axios from "axios";
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import AOS from "aos";
import "aos/dist/aos.css";

interface Melumat {
  id: number;
  popular_image: string;
  popular_context: string;
  popular_price: string;
}

const Popularcards: React.FC = () => {
  const [data, setData] = useState<Melumat[]>([]);

  useEffect(() => {

    AOS.init({ duration: 1000, once: false,    mirror:true    });

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
      <h3 className='popular-title' data-aos="fade-up">
        <FormattedMessage id='popularcardtitle'/>
      </h3>
      <div className='popularcards-container'>
        {
          data && data.map((birMelumat, index) => (
            <div 
              className="popularcard" 
              key={birMelumat.id} 
              data-aos="zoom-in" 
              data-aos-delay={index * 100}
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
      <Link to="/" className='popular-button' style={{ textDecoration: "none" }}>
        <button className="view-collectt" data-aos="fade-up">
          <FormattedMessage id='view'/>
        </button>
      </Link> 
    </div>
  );
};

export default Popularcards;
