import React from "react";

import { CustomButton } from "../custom-button/custom-button";

import { CartItem } from "../cartitem/cartitem";

import { useSelector } from "react-redux";

import { selectCartItems } from "../../redux/cart/cartSelectors";

export const CartDropdown = () => {
  // const cartItems = useSelector((state) => {
  //   console.log("Dropdown Got logged");
  //   return state.cart.cartItems;
  // });

  const cartItems = useSelector((state) => selectCartItems(state));

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} {...cartItem} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

export default CartDropdown;
