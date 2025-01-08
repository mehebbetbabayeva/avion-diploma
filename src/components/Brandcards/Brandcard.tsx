import React from 'react'
import "./BrandCards.css"

interface KartlarinProps {
  nameProps: string;
  contextProps: string;
  navProps: string;
}

const Brandcard: React.FC<KartlarinProps> = ({ nameProps, contextProps, navProps }) => {

 
  return (
    <div className="swiper-slide">
      <div className="card rounded-0">
        <div className="card-body">
          <img src={nameProps}/>
          <p className="card-title">{navProps}</p>
          <p className="card-text">{contextProps}</p>
       
        </div>

      </div>

    </div>


  )
}

export default Brandcard