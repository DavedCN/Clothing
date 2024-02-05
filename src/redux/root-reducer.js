import { combineReducers } from "redux";

import { userReducer } from "./user/user-reducer";
import { cartReducer } from "./cart/cart-reducer";
import { signReducer } from "./signin/up/signReducer";

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
  sign: signReducer,
});
