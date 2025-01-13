import React from 'react'
import "./Popularcards.css"

interface KartlarinProps {
  imageProps: string;
  contextProps: string;
  priceProps: string;
}

const popularcard: React.FC<KartlarinProps> = ({ imageProps, contextProps, priceProps }) => {

 
  return (
    <div className="swiper-slide">
      <div className="card rounded-0">
        <div className="card-body">
          <img src={imageProps}/>
          <p className="card-text">{contextProps}</p>
          <p className="card-title">{priceProps}</p>
       
        </div>

      </div>

    </div>


  )
}

export default popularcard