
import { Swiper, SwiperSlide } from 'swiper/react';
import "./Ceramiccards.css"
import Ceramiccard from './Ceramiccard'
import axios from "axios";
import { useEffect, useState } from 'react';


interface Melumat {
  id:number,
  ceramic_image:string,
  ceramic_context:string,
  ceramic_price:string
}

const Ceramiccards: React.FC = () => {


  const [data, setData] = useState<Melumat[]>([]); 
  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const response = await axios.get("/ceramic.json"); 
        setData(response.data);
      
      } catch (error) {
        console.error("Data fetch error:", error);
       
      }
    };

    fetchData();
  }, []);
  return (
    <div className='ceramiccard-container'>
      <h3 className='ceramic-title'>New ceramics</h3>
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
                 <Ceramiccard imageProps ={birMelumat.ceramic_image} contextProps={birMelumat.ceramic_context} priceProps={birMelumat.ceramic_price}  />
              </SwiperSlide>
          ))
        }
       
      

    </Swiper>
   <div className='ceramic-button'><button className="view-collect">View collection</button></div> 
      </div>
 
    </div>

  )
}

export default Ceramiccards