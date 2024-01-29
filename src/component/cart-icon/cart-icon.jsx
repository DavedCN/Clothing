import React from "react";
import { useDispatch } from "react-redux";
import { ShoppingIcon } from "../../assets/shoppingIcon.jsx";
import { toggleCartHidden } from "../../redux/cart/cartAction.js";

export const CartIcon = () => {
  const dispatch = useDispatch();

  const handleCartIconClick = () => {
    dispatch(toggleCartHidden());
  };

  return (
    <div className="cart-icon" onClick={handleCartIconClick}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
