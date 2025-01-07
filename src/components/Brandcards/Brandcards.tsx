import React, {useEffect, useState} from 'react'
import Brandcard from './Brandcard'
import { Swiper, SwiperSlide } from 'swiper/react';
import axios from 'axios';

interface Melumat{
    id:number;
    brand_name:string; 
    brand_context:string;
    brand_nav:string;
}



const brandcards: React.FC = () => {

const [melumat, setMelumat] = useState<Melumat[]>([])
useEffect(()=> {
    
    axios.get("/assets/brand.json").then(cavab => setMelumat(cavab.data))
  }, [melumat])


  return (
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
          melumat && melumat.map(birMelumat => (
            <SwiperSlide key={birMelumat.id}>
                 <Brandcard nameProps ={birMelumat.brand_name} contextProps={birMelumat.brand_context} navProps={birMelumat.brand_nav}  />
              </SwiperSlide>
          ))
        }
       
      

    </Swiper>

  )
}

export default brandcards