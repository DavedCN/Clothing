import React from "react";

import { SignIn } from "../signin/signin";
import { SignUp } from "../sign-up/sign-up";

export const SignInAndSignUpPage = () => {
  return (
    <div className="sign-in-and-sign-up">
      <h1>Sign In and Sign Up</h1>
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInAndSignUpPage;
