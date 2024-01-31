import React from "react";

export const CustomButton = ({ children, isGoogleSIgnIn,inverted ,...otherProps }) => {
  return (
    <button
      className={`${inverted ? "inverted" : ""}${isGoogleSIgnIn ? "google-sign-in" : ""} custom-button `}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
