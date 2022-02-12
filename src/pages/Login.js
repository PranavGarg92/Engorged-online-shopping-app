import React from "react";
import Sale from "../components/Sale";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <Link to="/productlist">
        <Sale />
      </Link>
      <div className="log">
        <div className="Register">
          <div className="register-wrapper">
            <h4>Login</h4>
            <form action="">
              <div>
                <input type="text" placeholder="username" />
              </div>

              <div>
                <input type="text" placeholder="password" />
              </div>

              <button>Login</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
