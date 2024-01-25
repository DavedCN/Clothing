import React, { Component } from "react";

import { FormInput } from "../form-input/form-input";
import { CustomButton } from "../custom-button/custom-button";

import { signInWithGoogle } from "../../firebase/firebase.utils";

import { Link } from "react-router-dom";

export class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({
      email: "",
      password: "",
    });
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className="sign-in">
        <h1>SIGN IN</h1>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            value={this.state.email}
            required
            handleChange={this.handleChange}
            type="email"
            label="Email"
          />

          <FormInput
            name="password"
            value={this.state.password}
            required
            handleChange={this.handleChange}
            type="password"
            label="Password"
          />

          <CustomButton type="submit">SIGN IN</CustomButton>
          <CustomButton type="button" onClick={signInWithGoogle} isGoogleSIgnIn>
            SIGN IN WITH GOOGLE
          </CustomButton>
        </form>

        <Link className="acct" to="/signup">
          Don't have an account yet?{" "}
          <span className="acctSignIn"> SIGN UP </span>
        </Link>
      </div>
    );
  }
}

export default SignIn;
