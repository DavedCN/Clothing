import React, { Component } from "react";

import { FormInput } from "../form-input/form-input";
import { CustomButton } from "../custom-button/custom-button";

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
    console.log(e.target);
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className="sign-in">
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
        </form>
      </div>
    );
  }
}

export default SignIn;
