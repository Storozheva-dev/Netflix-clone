import css from "./Login.module.css";
import React from "react";
import Logo from "../../../assets/logo.png";
import { useState } from "react";
import { login, signUp } from "../../../firebase";
import NetflixSpinner from "../../../assets/netflix_spinner.gif";

const Login = () => {
  const [signState, setSignState] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const user_auth = async (event) => {
    event.preventDefault();
    setLoading(true);
    if (signState === "Sign Up") {
      await signUp(email, password, name);
    } else {
      await login(email, password);
    }
    setLoading(false);
  };

  return loading ? (
    <div className={css.loginSpinner}>
      <img src={NetflixSpinner} alt="Netflix Logo" />
    </div>
  ) : (
    <div className={css.login}>
      <img src={Logo} alt="Netflix Logo" />
      <div className={css.loginForm}>
        <h1>{signState}</h1>
        <form>
          {signState === "Sign Up" ? (
            <input
              type="name"
              placeholder="Your name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          ) : (
            <></>
          )}

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button onClick={user_auth} type="submit">
            {signState}
          </button>
          <div className={css.formHelp}>
            <div className={css.remember}>
              <input type="checkbox" />
              <label htmlFor="">Remember me</label>
            </div>
            <p style={{ cursor: "pointer" }}>Need Help?</p>
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
