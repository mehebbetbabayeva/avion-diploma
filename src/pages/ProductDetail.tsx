import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Dandy from "../components/Productdetail/DandyChair/Dandy";

interface Melumat {
  id: number;
  product_image: string;
  product_context: string;
  product_price: string;
  product_category: string;
  product_type: string;
  products_brand: string;
}

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>(); 
  const [product, setProduct] = useState<Melumat | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get<Melumat[]>("/product.json");
        const selectedProduct = response.data.find(
          (item) => item.id === Number(id)
        );
        setProduct(selectedProduct || null);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div>
      <Dandy product={product} />
    </div>
  );
};

export default ProductDetail;
