
import { Swiper, SwiperSlide } from 'swiper/react';
import "./BrandCards.css"
import Brandcard from './Brandcard';
import data from "../../../public/brand.json"




const Brandcards: React.FC = () => {




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