import React, { useState } from "react";
import { FormInput } from "../form-input/form-input";
import { CustomButton } from "../custom-button/custom-button";

import { useDispatch } from "react-redux";
import { displaySignup } from "../../redux/signin/up/signAction";

export const SignIn = () => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserCredentials({ email: "", password: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="sign-in">
      <h1>SIGN IN</h1>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          value={userCredentials.email}
          required
          handleChange={handleChange}
          type="email"
          label="Email"
        />
        <FormInput
          name="password"
          value={userCredentials.password}
          required
          handleChange={handleChange}
          type="password"
          label="Password"
        />
        <CustomButton type="submit">SIGN IN</CustomButton>
      </form>
      <div className="acct">
        Don't have an account yet?
        <span className="acctSignIn" onClick={() => dispatch(displaySignup())}>
          SIGN UP
        </span>
      </div>
    </div>
  );
};

export default SignIn;
