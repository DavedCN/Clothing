import React from "react";
import { Link } from "react-router-dom";

import { Logo } from "../../assets/crown";
import { auth } from "../../firebase/firebase.utils";

//REDUX

import { useSelector } from "react-redux";

//IMPORT TOAST
import { SnackbarProvider, enqueueSnackbar } from "notistack";

export const Header = () => {
  const currentUser = useSelector((state) => state.user.currentUser);

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
        <SnackbarProvider />
      </div>
    </div>
  );
};

export default Header;
