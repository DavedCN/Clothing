// import firebase, { initializeApp } from "../../node_modules/firebase/app/dist/app";

import "firebase/firestore";
import "firebase/auth";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";

const config = {
  apiKey: "AIzaSyABRKAAB3TLqFaaYWSKf0FhbSd57ybf8Do",
  authDomain: "e-shopnow.firebaseapp.com",
  projectId: "e-shopnow",
  storageBucket: "e-shopnow.appspot.com",
  messagingSenderId: "869927156699",
  appId: "1:869927156699:web:8da24c6ded009a0703c5fe",
};
initializeApp(config);

// export const firestore = firebase.firestore();

const provider = new GoogleAuthProvider();

export const auth = getAuth();
export const signInWithGoogle = () =>
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });

export default signInWithGoogle;
