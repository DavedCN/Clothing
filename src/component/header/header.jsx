import React from "react";
import { Link } from "react-router-dom";

import { Logo } from "../../assets/crown";
import { auth } from "../../firebase/firebase.utils";

export const Header = ({ currentUser }) => {
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
            }}
          >
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signup">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
