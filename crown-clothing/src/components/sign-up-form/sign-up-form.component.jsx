import React from "react";
import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import "./sign-up-form.styles.scss";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signUpStart } from "../../store/user/user-actions";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handlerSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      // const response = await createAuthUserWithEmailAndPassword(
      //   email,
      //   password
      // );

      // const { user } = response;

      // await createUserDocumentFromAuth(user, { displayName });

      dispatch(signUpStart(email, password, { displayName }));

      resetFormFields();
      navigate("/");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      }

      if (error.code === "auth/weak-password") {
        alert("Password should be at least 6 characters long");
      }

      console.log("Could not create user", error);
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account ?</h2>
      <span>Sign Up with your email and password</span>
      <form onSubmit={handlerSubmit}>
        <FormInput
          label={"Display Name"}
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

        <FormInput
          label={"Email"}
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label={"Password"}
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <FormInput
          label={"Confirm Password"}
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />

        <Button buttonType={BUTTON_TYPE_CLASSES.google} type="submit">
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default SignUpForm;
