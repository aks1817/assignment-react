import React from "react";
import "./SignIn.css";
import FormGroup from "../components/FormGroup";
import Socials from "../components/Socials";
import logoWhite from "../assets/logo-white.png";

const SignIn = () => {
  return (
    <div className="signin__page__container">
      <a href="index.html" className="logo">
        <img src={logoWhite} alt="log" className="logo-white" />
      </a>

      <div className="form__container">
        <h1 className="board__logo">BASE</h1>

        <FormGroup />
      </div>

      <Socials />
    </div>
  );
};

export default SignIn;
