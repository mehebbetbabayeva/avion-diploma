import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../redux/store";
import { increaseQuantity, decreaseQuantity, removeFromCart, clearCart } from "../../../redux/cartSlice";
import "./Cart.css";
import { FormattedMessage } from "react-intl";

const CartComponent: React.FC = () => {
  const dispatch = useDispatch();
  const { items, totalAmount } = useSelector((state: RootState) => state.cart);

  return (
    <div className="cart-container">
      <h1><FormattedMessage id="sebet"/></h1>

      {items.length === 0 ? (
        <p><FormattedMessage id="sebetbosdur"/></p>
      ) : (
        <>
          <div className="cart-items">
            {items.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h2>{item.name}</h2>
                  <p><FormattedMessage id="qiymet"/>: £{item.price.toFixed(2)}</p>
                  <div className="quantity-controls">
                    <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
                  </div>
                  <button className="remove-btn" onClick={() => dispatch(removeFromCart(item.id))} >
                  <FormattedMessage id="sil"/> 
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-total">
            <h2>     <FormattedMessage id="umumimebleg"/> : £{totalAmount.toFixed(2)}</h2>
            <button className="clear-cart-btn" onClick={() => dispatch(clearCart())}>
            <FormattedMessage id="sebetitemizle"/>  
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartComponent;
