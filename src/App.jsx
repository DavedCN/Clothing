import { Routes, Route } from "react-router-dom";

import { HomePage } from "./pages/homepage/homepage";
import { ShopPage } from "./component/shop/shopPage";
import { Header } from "./component/header/header";
import { SignInAndSignUpPage } from "./component/signin-signup/signin-signup";

import { auth } from "./firebase/firebase.utils";
import React from "react";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }

  unsubcribeFromAuth = null;
  componentDidMount() {
    this.unsubcribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });

      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubcribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/signin" element={<SignInAndSignUpPage />} />
        </Routes>
      </div>
    );
  }
}

export default App;
