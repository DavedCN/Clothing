import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { userReducer } from "./user/user-reducer";
import { cartReducer } from "./cart/cart-reducer";
import { signReducer } from "./signin/up/signReducer";
import { directoryReducer } from "./directory/directoryReducer";
import { shopReducer } from "./shop/shopReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  sign: signReducer,
  directory: directoryReducer,
  shop: shopReducer,
});

export default persistReducer(persistConfig, rootReducer);
