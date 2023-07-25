import React from "react";
import {
  auth,
  signinWithGoolePopup,
  createUserDocumentFromAuth,
  signinWithGoogleRedirect,
} from "../../utils/firebase.utils";
import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signinWithGoolePopup();
    const userDocRef = await createUserDocumentFromAuth(response.user);
  };

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
    <>
      <h1>SignIn Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      {/* <button onClick={signinWithGoogleRedirect}>
        Sign in with Google Redirect
      </button> */}
      <SignUpForm />
    </>
  );
};

export default SignIn;
