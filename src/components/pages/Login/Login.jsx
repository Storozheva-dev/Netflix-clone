import css from "./Login.module.css";
import React from "react";
import Logo from "../../../assets/logo.png";
import { useState } from "react";

const Login = () => {
  const [signState, setSignState] = useState("Sign In");

  return (
    <div className={css.login}>
      <img src={Logo} alt="Netflix Logo" />
      <div className={css.loginForm}>
        <h1>{signState}</h1>
        <form>
          {signState === "Sign Up" ? (
            <input type="name" placeholder="Your name" />
          ) : (
            <></>
          )}

          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>{signState}</button>
          <div className={css.formHelp}>
            <div className={css.remember}>
              <input type="checkbox" />
              <label htmlFor="">Remember me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className={css.formSwitch}>
          {signState === "Sign Up" ? (
            <p>
              Already have an account?{" "}
              <span onClick={() => setSignState("Sign In")}>Sign In Now</span>
            </p>
          ) : (
            <p>
              New to Netflix?{" "}
              <span onClick={() => setSignState("Sign Up")}>Sign Up Now</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
