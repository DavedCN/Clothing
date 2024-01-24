import React, { Component } from "react";

import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";

import {
  auth,
  createUserProfileDocument,
  createWithEmailAndPassword,
} from "../../firebase/firebase.utils";

export class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      //   const checkin = await auth
      //     .createUserWithEmailAndPassword(auth, email, password)
      //     .then((userCredential) => {
      //       // User created
      //       const user = userCredential.user;
      //       console.log(user);
      //     })
      //     .catch((error) => {
      //       // Handle error
      //       console.error(error.code, error.message);
      //     });

      //   console.log(checkin);
      const { user } = await createWithEmailAndPassword(auth, email, password);

      console.log(user);

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    let signValue = null;
    return (
      <div className="sign-up">
        <h1 className="title">SIGN UP</h1>
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>

        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Display Name"
          />

          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
          />

          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
          />

          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Confirm Password"
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>

        <div
          onClick={() => {
            signValue = true;
            console.log(signValue);
          }}
        >
          Already have an account? <span>Sign In</span>
        </div>
      </div>
    );
  }
}

export default SignUp;
