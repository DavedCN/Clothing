import React from "react";

import {
  selectCartItems,
  selectCartTotalPrice,
} from "../../redux/cart/cartSelectors";
import { useSelector } from "react-redux";

import { CheckoutItem } from "../checkoutItem/checkoutItem";
import { StripeCheckoutButton } from "../stripeButton/stripeButton";

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
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">
        <span>{cartItems.length ? `TOTAL : $ ${total}` : ""}</span>
      </div>
      {cartItems.length ? <StripeCheckoutButton price={total} /> : ""}
    </div>
  );
};

export default CheckoutPage;
