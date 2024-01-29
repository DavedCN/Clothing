import { cartActionTypes } from "./cartTypes";

export const toggleCartHidden = () => ({
  type: cartActionTypes.TOGGLE_CART_HIDDEN,
});

export default toggleCartHidden;
