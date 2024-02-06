import { createSelector } from "reselect";

export const selectCart = (state) => state.sign;

export const selectSignItems = createSelector(
  [selectCart],
  (cart) => cart.displaySignup
);
