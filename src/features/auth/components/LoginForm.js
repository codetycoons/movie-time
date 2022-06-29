import React, { useState } from "react";
import ButtonComponent from "../../../components/Button";
import Backdrop from "../../misc/Backdrop";
import classes from "./style.module.scss";
import { primarytheme } from "../../../utils";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../lib/auth";
import { validateEmail } from "../../../utils";

function SignIn() {
  const { loginUser } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setError] = useState(false);
  const loginHandler = () => {
    const isEmailValid = validateEmail(email);
    if (!isEmailValid) return setError(true);
    loginUser({ email: email });
    navigate("/");
  };

  return (
    <Backdrop>
      <div className={classes.Form}>
        <h2 className={classes.title}>Sign In</h2>
        <div>
          <input
            type="email"
            placeholder="Enter Email Address"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Enter Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {isError && (
          <div className={classes.error}>
            <p>Invalid Email/Password</p>
          </div>
        )}
        <div className={classes.auth}>
          <div>
            <ButtonComponent
              text="Sign In"
              variant="contained"
              size="medium"
              theme={primarytheme}
              color="primary"
              style={{ width: "-webkit-fill-available", padding: ".8rem" }}
              onClick={loginHandler}
            />
          </div>
          <div className={classes.link}>
            <a>Forgot Password ?</a>
          </div>
          <div className={classes.link}>
            <span>New to WatchAnyMovie ?</span>&nbsp;
            <a onClick={() => navigate("/auth/register")}>Sign up now </a>
          </div>
        </div>
      </div>
    </Backdrop>
  );
}

export default SignIn;
