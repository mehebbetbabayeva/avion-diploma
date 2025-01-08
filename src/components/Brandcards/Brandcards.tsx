
import { Swiper, SwiperSlide } from 'swiper/react';
import "./BrandCards.css"
import Brandcard from './Brandcard';
import axios from "axios";
import { useEffect, useState } from 'react';


interface Melumat {
  id:number,
  brand_name:string,
  brand_context:string,
  brand_nav:string
}

const Brandcards: React.FC = () => {


  const [data, setData] = useState<Melumat[]>([]); 
  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const response = await axios.get("/brand.json"); 
        setData(response.data);
      
      } catch (error) {
        console.error("Data fetch error:", error);
       
      }
    };

    fetchData();
  }, []);
  return (
    <div className='brandcard-container'>
      <h3>What makes our brand different</h3>
      <div className='swiper-container'>
      <Swiper
    slidesPerView={4}
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
                 <Brandcard nameProps ={birMelumat.brand_name} contextProps={birMelumat.brand_context} navProps={birMelumat.brand_nav}  />
              </SwiperSlide>
          ))
        }
       
      

    </Swiper>
      </div>
 
    </div>

  )
}

export default Brandcards