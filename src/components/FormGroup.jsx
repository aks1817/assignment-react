import React, { useState } from "react";
import "../pages/SignIn.css";
import { useAuth } from "../pages/useAuth";
import { useNavigate } from "react-router-dom";

const FormGroup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const hardcodedEmail = "admin@gmail.com";
    const hardcodedPassword = "123456";
    if (email === hardcodedEmail && password === hardcodedPassword) {
      login();
      navigate("/dashboard");
    } else {
      alert("Invalid email or password. Please try again.");
    }
  };
  return (
    <div className="formgroup__container">
      <h1 className="">Sign in</h1>
      <p className="sign_to_ur_acc">
        <strong>Sign in to your account</strong>
      </p>

      <div className="signin__with__buttons">
        <button className="siginin__google btn__primary">
          Sign in with Google
        </button>
        <button className="siginin__apple btn__primary">
          Sign in with Apple
        </button>
      </div>

      <div className="form__wrapper">
        <form action="#" onSubmit={handleFormSubmit}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="input__bar"
            autoComplete="false"
            placeholder="Email id"
            name="email"
            id="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="input__bar"
            autoComplete="false"
            placeholder="Password"
            name="password"
            id="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <p className="forgot__pass">Forgot password?</p>

          <button className="signin__btn">Sign In</button>
        </form>
      </div>

      <p className="form__footer">
        Don't have an account?{" "}
        <span className="forgot__pass">Register here</span>
      </p>
    </div>
  );
};

export default FormGroup;
