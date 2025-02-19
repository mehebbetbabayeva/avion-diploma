import { Swiper, SwiperSlide } from 'swiper/react';
import "./Ceramiccards.css"
import Ceramiccard from './Ceramiccard'
import axios from "axios";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import AOS from "aos"; 
import "aos/dist/aos.css"; 

interface Melumat {
  id: number,
  ceramic_image: string,
  ceramic_context: string,
  ceramic_price: string
}

const Ceramiccards: React.FC = () => {
  const [data, setData] = useState<Melumat[]>([]);

  useEffect(() => {
 
    AOS.init({
      duration: 1000, 
      easing: "ease-in-out",
      once: false, 
      mirror:true   
    });

  
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

      <h3 className='ceramic-title' style={{ textAlign: "center" }} data-aos="fade-up">
        <FormattedMessage id='ceramictitle' />
      </h3>

      <div className='swiper-container'>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="mySwiper"
        >
          {
            data && data.map((birMelumat, index) => (
              <SwiperSlide key={birMelumat.id} data-aos="fade-left" data-aos-delay={index * 200}>
                <Ceramiccard
                  imageProps={birMelumat.ceramic_image}
                  contextProps={birMelumat.ceramic_context}
                  priceProps={birMelumat.ceramic_price}
                  data-aos="zoom-in" 
                  data-aos-delay={index * 100}
                />
              </SwiperSlide>
            ))
          }
        </Swiper>

      
        <Link to="/products" className='ceramic-button' style={{ textDecoration: "none" }}>
          <button className="view-collectt" data-aos="fade-up" data-aos-delay="400">
            <FormattedMessage id='view' />
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Ceramiccards;
