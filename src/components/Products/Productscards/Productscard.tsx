import React from 'react'
import "./Productscards.css"

interface KartlarinProps {
  imageProps: string;
  contextProps: string;
  priceProps: string;
}

const Productscard: React.FC<KartlarinProps> = ({ imageProps, contextProps, priceProps }) => {

 
  return (
    <div className="swiper-slide">
      <div className="card rounded-0">
        <div className="card-body">
          <div className='card-body-image'> <img src={imageProps}/></div> 
          <p className="card-text">{contextProps}</p>
          <p className="card-title">{priceProps}</p>
       
        </div>

      </div>

    </div>


  )
}

export default Productscard