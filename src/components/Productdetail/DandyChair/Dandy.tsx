import React from 'react'
import './Dandy.css'
import dandychair from "../../../assets/images/productcards/dandychair.png"

const Dandy = () => {
  return (
    <section className="Dandy">

      <div className="Dandy-container">
        <div className="Dandy-right-side">
          <img
            src={dandychair}
            alt="Dandy Image"
            className="w-100 Dandy-image"
          />

        </div>

        <div className="product-page">
          <h1 className="product-title">The Dandy Chair</h1>
          <p className="product-price">£250</p>

          <div className="product-description">
            <p>
              A timeless design, with premium materials, featuring one of our most
              popular and iconic pieces. The Dandy chair is perfect for any stylish
              living space with beech legs and lambskin leather upholstery.
            </p>
          </div>

          <div className="product-dimensions">
            <h3>Dimensions</h3>
            <p><strong>Height:</strong> 110cm</p>
            <p><strong>Width:</strong> 75cm</p>
            <p><strong>Depth:</strong> 50cm</p>
          </div>

          {/* Quantity Selector */}
          {/* <div className="quantity-selector">
        <button onClick={decreaseQuantity}>-</button>
        <span>{quantity}</span>
        <button onClick={increaseQuantity}>+</button>
      </div> */}

          {/* Action Buttons */}
          <div className="product-buttons">
            <button className="add-to-cart">Add to Cart</button>
            <button className="save-to-favorites">Save to Favorites</button>
          </div>
        </div>



      </div>

    </section>
  )
}

export default Dandy