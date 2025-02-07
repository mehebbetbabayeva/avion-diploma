import React from "react";
import "./Productscards.css";
import { FiShoppingCart, FiEye } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../../redux/cartSlice";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"; 

interface KartlarinProps {
  imageProps: string;
  contextProps: string;
  priceProps: string;
  idProps: string;
}

const Productscard: React.FC<KartlarinProps> = ({ imageProps, contextProps, priceProps, idProps }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = () => {
  
    const product = {
      id: idProps,
      name: contextProps,
      price: parseFloat(priceProps.replace("£", "")), 
      image: imageProps,
      quantity: 1,
    };

    dispatch(addToCart(product)); 

  
    Swal.fire({
      title: "Məhsul səbətə əlavə edildi!",
      text: `"${contextProps}" adlı məhsul uğurla əlavə olundu.`,
      icon: "success",
      confirmButtonText: "OK",
      timer: 2000,
      showConfirmButton: false, 
    });
  };

  return (
    <div className="swiper-slide">
      <div className="card rounded-0">
        <div className="card-body">
          <div className="card-body-image">
            <img src={imageProps} alt="Product" />
          </div> 

          <p className="card-text">{contextProps}</p>
          <p className="card-title">{priceProps}</p>

  
          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            <FiShoppingCart size={20} /> Səbətə əlavə et
          </button>

  
          <button className="view-product-btn" onClick={() => navigate(`/products/${idProps}`)}>
            <FiEye size={20} /> Məhsula Bax
          </button>
        </div>
      </div>
    </div>
  );
};

export default Productscard;
