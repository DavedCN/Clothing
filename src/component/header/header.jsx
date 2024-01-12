import React from "react";
import { Link } from "react-router-dom";

import { Logo } from "../../assets/crown";

export const Header = () => {
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

        <Link className="option" to="/signin">
         SIGN IN
        </Link>
      </div>
    </div>
  );
};

export default Header;
