//GOOGLE AUTHENTICATION WITH FIREBASE

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
const app = initializeApp(config);

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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// STORAGE USING FIREBASE FIRESTORE

import { getFirestore } from "firebase/firestore";
import { getDoc, doc, setDoc } from "firebase/firestore";

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// GOOGLE AUTHENTICATION STORAGE

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = doc(db, "users", userAuth.uid);

  const snapShot = await getDoc(userRef);

  if (!snapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    const info = { displayName, email, createdAt, ...additionalData };

    try {
      await setDoc(userRef, info);
    } catch (error) {
      console.log(`Error Creating new user`, error.message);
    }
  }

  return userRef;
};
