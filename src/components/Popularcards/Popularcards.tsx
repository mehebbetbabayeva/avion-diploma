
import { Swiper, SwiperSlide } from 'swiper/react';
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

const popularcards: React.FC = () => {


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
      <div className='swiper-container'>
      <Swiper
    slidesPerView={3}
    spaceBetween={30}

    breakpoints={{
        320: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 4,
        },
      }}
    
    className="mySwiper"
  >


        {
          data && data.map(birMelumat => (
            <SwiperSlide key={birMelumat.id}>
                 <Popularcard imageProps ={birMelumat.popular_image} contextProps={birMelumat.popular_context} priceProps={birMelumat.popular_price}  />
              </SwiperSlide>
          ))
        }
       
      

    </Swiper>
   <div className='popular-button'><button className="view-collect">View collection</button></div> 
      </div>
 
    </div>

  )
}

export default popularcards