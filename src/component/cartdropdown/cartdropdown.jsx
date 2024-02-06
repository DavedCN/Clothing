import React from "react";

import { CustomButton } from "../custom-button/custom-button";

import { CartItem } from "../cartitem/cartitem";

import { useSelector, useDispatch } from "react-redux";

import { selectCartItems } from "../../redux/cart/cartSelectors";

import { useNavigate } from "react-router-dom";

import { toggleCartHidden } from "../../redux/cart/cartAction";

export const CartDropdown = () => {
  // const cartItems = useSelector((state) => {
  //   console.log("Dropdown Got logged");
  //   return state.cart.cartItems;
  // });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    navigate("/checkout");
    dispatch(toggleCartHidden());
  };
  const cartItems = useSelector((state) => selectCartItems(state));

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} {...cartItem} />
          ))
        ) : (
          <span className="empty-message"> Your cart is empty. </span>
        )}
      </div>
      <CustomButton onClick={handleClick}>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

export default CartDropdown;
