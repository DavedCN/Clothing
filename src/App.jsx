//REACT IMPORTS

import React from "react";
import { Component } from "react";

//REACT ROUTER DOM IMPORTS

import { Routes, Route } from "react-router-dom";

//PAGES AND COMPONENTS IMPORTS
import { HomePage } from "./pages/homepage/homepage";
import { ShopPage } from "./component/shop/shopPage";
import { Header } from "./component/header/header";
import { SignInAndSignUpPage } from "./component/signin-signup/signin-signup";

//IMPORTS FROM FIREBASE
import { onSnapshot } from "firebase/firestore";
import { auth } from "./firebase/firebase.utils";
import { createUserProfileDocument } from "./firebase/firebase.utils";
import { onAuthStateChanged } from "firebase/auth";
import SignIn from "./component/signin/signin";

///////////////////////////////////////////

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }

  unsubcribeFromAuth = null;
  // componentDidMount() {
  //   this.unsubcribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
  //     if (userAuth) {
  //       const userRef = await createUserProfileDocument(userAuth);

  //       onSnapshot(userRef, (snapShot) => {
  //         this.setState({
  //           currentUser: { id: snapShot.id, ...snapShot.data() },
  //         });
  //
  //       });
  //     }
  //   });
  // }

  componentDidMount() {
    // Set up the authentication state change listener using onAuthStateChanged
    this.unsubscribeFromAuth = onAuthStateChanged(auth, async (userAuth) => {
      if (userAuth) {
        // If the user is authenticated, get the reference to the user document in Firestore
        const userRef = await createUserProfileDocument(userAuth);

        // Set the currentUser state to the user document data

        // Listen for real-time updates to the user document in Firestore using onSnapshot
        onSnapshot(userRef, (snapShot) => {
          const userData = {
            id: snapShot.id,
            ...snapShot.data(),
          };
          console.log(userData);

          this.setState({ currentUser: userData });
        });

        console.log(this.state);
      } else {
        this.setState({ currentUser: null }); // Handle user logout state by setting currentUser to null
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/signup" element={<SignInAndSignUpPage />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </div>
    );
  }
}

export default App;
