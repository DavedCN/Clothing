import React from "react";

import { SignIn } from "../signin/signin";
import { SignUp } from "../sign-up/sign-up";

import { useSelector } from "react-redux";

export const SignInAndSignUpPage = () => {
  const displaySignup = useSelector((state) => state.sign.displaySignup);

  return (
    <div className="sign-in-and-sign-up">
      {displaySignup ? <SignUp /> : <SignIn />}
    </div>
  );
};

export default SignInAndSignUpPage;
