import React from "react";

import { selectCartItems } from "../../redux/cart/cartSelectors";
import { selectCartTotalPrice } from "../../redux/cart/cartSelectors";
import { useSelector } from "react-redux";

import { CheckoutItem } from "../checkoutItem/checkoutItem";

export const CheckoutPage = () => {
  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectCartTotalPrice);

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span> 
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => <CheckoutItem key={cartItem.id} cartItem={cartItem}/>)}
      <div className="total">
        <span>TOTAL :${total}</span>
      </div>
    </div>
  );
};

export default CheckoutPage;
