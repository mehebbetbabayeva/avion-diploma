import React from 'react'
import "./Ceramiccards.css"

interface KartlarinProps {
  imageProps: string;
  contextProps: string;
  priceProps: string;
}

const ceramiccard: React.FC<KartlarinProps> = ({ imageProps, contextProps, priceProps }) => {

 
  return (
    <div className="swiper-slide">
      <div className="card rounded-0">
        <div className="card-body">
          <img src={imageProps}/>
          <p className="card-title">{priceProps}</p>
          <p className="card-text">{contextProps}</p>
       
        </div>

      </div>

    </div>


  )
}

export default ceramiccard