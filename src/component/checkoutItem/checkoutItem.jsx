import React from "react";

import { clearItem, addItem, removeItem } from "../../redux/cart/cartAction";
import { useDispatch } from "react-redux";

export const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const dispatch = useDispatch();

  const handleClearItem = (item) => {
    dispatch(clearItem(item));
  };

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={`Item ${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => handleRemoveItem(cartItem)}>
          &#10094;
        </div>

        <span className="value"> {quantity}</span>

        <div className="arrow" onClick={() => handleAddItem(cartItem)}>
          &#10095;
        </div>
      </span>

      <span className="price">$ {price}</span>
      <div className="remove-button" onClick={() => handleClearItem(cartItem)}>
        &times;
      </div>
    </div>
  );
};

export default CheckoutItem;
