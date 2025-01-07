import React from 'react'
// import { Link } from 'react-router-dom'

interface KartlarinProps {
    nameProps:string;
    contextProps:string;
    navProps:string;
  }

const Brandcards: React.FC <KartlarinProps> = ({nameProps,contextProps, navProps}) => {
  return (
    <div className="swiper-slide">
 <div className="card rounded-0">
    <div className="card-body">
      <h5 className="card-title">{nameProps}</h5>
      <p className="card-text">{contextProps}</p>
      <article className="card-nav">{navProps}</article>
      {/* <Link to="#"className="card-nav">{navProps}</Link> */}
    </div>

  </div>
 
</div>


  )
}

export default Brandcards