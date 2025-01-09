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
        <div className="card-body" style={{color:"#2A254B"}}>
          <img src={imageProps}/>
          <p className="card-text" style={{fontSize:"20px"}}>{contextProps}</p>
          <p className="card-title" style={{fontSize:"18px"}}>{priceProps}</p>
       
        </div>

      </div>

    </div>


  )
}

export default ceramiccard