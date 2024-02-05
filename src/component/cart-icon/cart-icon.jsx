import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ShoppingIcon } from "../../assets/shoppingIcon.jsx";
import { toggleCartHidden } from "../../redux/cart/cartAction.js";

import { selectCartItemsCount } from "../../redux/cart/cartSelectors.js";

export const CartIcon = () => {
  const dispatch = useDispatch();

  const handleCartIconClick = () => {
    dispatch(toggleCartHidden());
  };

  const noOfItems = useSelector((state) => selectCartItemsCount(state));
  console.log(noOfItems);

  return (
    <div className="cart-icon" onClick={handleCartIconClick}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{noOfItems}</span>
    </div>
  );
};

export default CartIcon;
