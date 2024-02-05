import { signActionTypes } from "./signTypes";

const INITIAL_STATE = {
  displaySignup: false,
};

export const signReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case signActionTypes.DISPLAY_SIGNUP:
      return {
        ...state,
        displaySignup: !state.displaySignup,
      };

    default:
      return state;
  }
};

export default signReducer;
