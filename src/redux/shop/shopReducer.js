import collection from "../../component/shop/shopData";

const INITIAL_STATE = {
  collection: collection,
};
export const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;
