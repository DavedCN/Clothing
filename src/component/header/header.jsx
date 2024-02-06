import React from "react";
import { Link } from "react-router-dom";

//FIREBASE

import { Logo } from "../../assets/crown";
import { auth } from "../../firebase/firebase.utils";

//COMPONENTS
import { CartIcon } from "../cart-icon/cart-icon";
import { CartDropdown } from "../cartdropdown/cartdropdown";

//REDUX

import { useSelector } from "react-redux";

//IMPORT TOAST
import { SnackbarProvider, enqueueSnackbar } from "notistack";

//IMPORT CARTSELECTOR
import { selectCartHidden } from "../../redux/cart/cartSelectors";
import {selectCurrentUser} from "../../redux/user/userSelector"

export const Header = () => {
  const currentUser  = useSelector((state) => selectCurrentUser(state));
  const hidden = useSelector((state) => selectCartHidden(state));

  //Notifications

  const signOutNotify = () => {
    enqueueSnackbar(`Sign Out Successful!`, {
      anchorOrigin: {
        vertical: "top",
        horizontal: "center",
      },
    });
  };

  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/">
          HOME
        </Link>

        <Link className="option" to="/shop">
          SHOP
        </Link>

        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {currentUser ? (
          <div
            className="option"
            onClick={() => {
              auth.signOut();
              signOutNotify();
            }}
          >
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signup">
            SIGN IN
          </Link>
        )}
        <CartIcon />
        <SnackbarProvider />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

export default Header;
