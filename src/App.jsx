//REACT IMPORTS

import React, { Component } from "react";

//REACT ROUTER DOM IMPORTS

import { Routes, Route, Navigate } from "react-router-dom";

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

//IMPORT REDUX
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/userAction";

//IMPORT NOTISTACK
import { SnackbarProvider, enqueueSnackbar } from "notistack";

///////////////////////////////////////////

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    //Notifications

    const signinNotify = (currentUser) => {
      enqueueSnackbar(
        `Sign In Successful, ${currentUser.displayName.split(" ")[0]}!`,
        {
          anchorOrigin: {
            vertical: "top",
            horizontal: "center",
          },
        }
      );
    };

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

          setCurrentUser(userData);
          signinNotify(userData);
        });
      } else {
        setCurrentUser(null); // Handle user logout state by setting currentUser to null
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.props;

    return (
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route
            path="/signup"
            element={
              currentUser ? <Navigate to="/" /> : <SignInAndSignUpPage />
            }
          />
        </Routes>
        <SnackbarProvider />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.user.currentUser,
  };
};
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
