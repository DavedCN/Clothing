import React, { useState } from "react";
import { useDispatch } from "react-redux";
import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";
import { displaySignup } from "../../redux/signin/up/signAction";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import {
  auth,
  createWithEmailAndPassword,
} from "../../firebase/firebase.utils";

export const SignUp = () => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      const { user } = await createWithEmailAndPassword(
        auth,
        email,
        password,
        displayName
      );

      setUserCredentials({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="sign-up">
      <h1 className="title">CREATE AN ACCOUNT</h1>
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
        <CustomButton type="button" onClick={signInWithGoogle} isGoogleSIgnIn>
          GOOGLE SIGN IN
        </CustomButton>
      </form>
      <div className="acct" to="/signin">
        Already have an account?
        <span className="acctSignIn" onClick={() => dispatch(displaySignup())}>
          SIGN IN
        </span>
      </div>
    </div>
  );
};

export default SignUp;
