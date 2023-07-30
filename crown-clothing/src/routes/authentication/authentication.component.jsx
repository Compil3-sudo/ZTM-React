import React from "react";
import {
  auth,
  signinWithGoolePopup,
  createUserDocumentFromAuth,
  signinWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";
import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import "./authentication.styles.scss";

const Authentication = () => {
  // const logGoogleUser = async () => {
  //   const response = await signinWithGoolePopup();
  //   const userDocRef = await createUserDocumentFromAuth(response.user);
  // };

  // useEffect(() => {
  //   const createUserWithRedirect = async () => {
  //     const response = await getRedirectResult(auth);
  //     if (response) {
  //       const userDocRef = await createUserDocumentFromAuth(response.user);
  //     }
  //   };
  //   createUserWithRedirect();
  // }, []);

  return (
    <div className="authentication-container">
      {/* <h1>SignIn Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button> */}
      {/* <button onClick={signinWithGoogleRedirect}>
        Sign in with Google Redirect
      </button> */}
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
