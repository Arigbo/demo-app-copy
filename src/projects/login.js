import React from "react";
import ButtonComp from "../button";

const LoginComp = () => {
  return (
    <div>
      <div class="form">
        <form action="login">
          <div>
            <p className="earn">Login/Register</p>
            <p>Please enter your email address and password:</p>
          </div>
          <p>
            {" "}
            <label for="email">Email</label>
          </p>
          <p>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="example@gmail.com"
            />
          </p>
          <label for="password">Password</label>
          <p>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="*******"
            />
          </p>
          <input type="checkbox" name="checkbox" id="checkbox" />
          <label for="checkbox" className="checkbox">
            Show Password
          </label>
          <p>
            <ButtonComp name="Login" />
          </p>
          <div
            className="forget
          "
          >
            <p>Forget Password</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginComp;
