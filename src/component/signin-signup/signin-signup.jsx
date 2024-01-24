import React from "react";

import { SignIn } from "../signin/signin";
import { SignUp } from "../sign-up/sign-up";

export const SignInAndSignUpPage = ({ signValue }) => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />

      {/* {signValue ? <SignIn /> : <SignUp />} */}
    </div>
  );
};

export default SignInAndSignUpPage;
