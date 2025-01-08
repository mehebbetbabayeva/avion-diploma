// import React, {useEffect, useState} from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
// import axios from 'axios';
// import Ceramiccard from './Ceramiccard';


// //

// interface Melumat {
//   id:number;
//   cards_image:string;
//   cards_article:string;
//   person_names:string;

// }


const Ceramiccards:React.FC = () => {
// bu ancaq sehife yuklenende birce defe render olunur bir daha render olmur
// melumat initialState
//cache
//useState cache Redux Redux TOOLKIT QUERY
//<> Generics
// state 
// const [melumat, setMelumat] = useState<Melumat[]>([])

//localStorage , sessionStorage

  // useEffect(()=> {
  //   // TODO HTTP metodlar get post put delete 80 443
  //   // ssl 
  //   // ssh 21 61000
  //   // ? nmap 
  //   //Promise Chaining 
  //   // PROMISE PROMISE CHAINING CALLBACK // CRUD json-server localStorage TODOAPP
  //   axios.get("/assets/ceramic.json").then(cavab => setMelumat(cavab.data))
  // }, [melumat])



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
    
    className="mySwiper persons-cards py-5 cardsSwiper"
  >

   test
        {/* {
          melumat && melumat.map(birMelumat => (
            <SwiperSlide key={birMelumat.id}>
                 <Ceramiccard shekilProps ={birMelumat.cards_image} articleProps={birMelumat.cards_article} muellifProps={birMelumat.person_names}  />
              </SwiperSlide>
          ))
        }
       
       */}

    </Swiper>
    
  )
}

export default Ceramiccards