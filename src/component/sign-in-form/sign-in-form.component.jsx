import { useState } from "react";
import "./sign-in-form.styles.scss";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";

import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

const signInFormFields = {
  signInEmail: "",
  signInPassword: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(signInFormFields);
  const { signInEmail, signInPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(signInFormFields);
  };
  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        signInEmail,
        signInPassword
      );

      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/invalid-email":
          alert("Invalid email");
          break;
        case "auth/user-not-found":
          alert("User not found");
          break;
        case "auth/wrong-password":
          alert("Wrong password");
          break;
        default:
          console.log("Sign in error", error);
      }
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-in-container">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="text"
          required
          onChange={handleChange}
          name="signInEmail"
          value={signInEmail}
        />
        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="signInPassword"
          value={signInPassword}
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
