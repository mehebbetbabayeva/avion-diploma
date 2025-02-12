import React from 'react'
import "./Title.css"
import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router-dom'
const Title = () => {
  return (

    <section className="Title">

      <div className="title-container">

        <div className='about-title' >
          <FormattedMessage id='about1'/>
          <br />
          <FormattedMessage id='about2'/>
          </div>

   <Link to="/products" style={{textDecoration:"none"}} className="view-products ">    <FormattedMessage id='about3'/></Link>
      
      </div>


    </section>




  )
}

export default Title