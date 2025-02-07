import React from "react";
import "./Dandy.css";

interface ProductProps {
  product: {
    product_image: string;
    product_context: string;
    product_price: string;
    product_category: string;
    product_type: string;
    products_brand: string;
  };
}

const Dandy: React.FC<ProductProps> = ({ product }) => {
  return (
    <section className="Dandy">
      <div className="Dandy-container">
        <div className="Dandy-right-side">
          <img
            src={product.product_image}
            alt="Product Image"
            className="product-image"
          />
        </div>

        <div className="product-page">
          <h1 className="product-title">{product.product_context}</h1>
          <p className="product-price">{product.product_price}</p>
          <p className="product-category">Category: {product.product_category}</p>
          <p className="product-type">Type: {product.product_type}</p>
          <p className="product-brand">Brand: {product.products_brand}</p>

          <p className="product-description">
            A timeless design, with premium materials, featuring one of our most
            popular and iconic pieces. The {product.product_context} is perfect for any stylish
            living space.
          </p>

        </div>
      </div>
    </section>
  );
};

export default Dandy;