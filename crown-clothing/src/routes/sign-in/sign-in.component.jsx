import React from "react";
import {
  signinWithGoolePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signinWithGoolePopup();
    const userDocRef = await createUserDocumentFromAuth(response.user);
  };

  return (
    <>
      <h1>SignIn Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
    </>
  );
};

export default SignIn;
