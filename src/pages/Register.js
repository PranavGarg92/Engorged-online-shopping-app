import React from "react";
import Sale from "../components/Sale";
import "./Register.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <Link to="/productlist">
        <Sale />
      </Link>
      <div className="Register">
        <div className="register-wrapper">
          <h4>REGISTER</h4>
          <form action="">
            <div>
              <input type="text" placeholder="name" />
            </div>
            <div>
              <input type="text" placeholder="last name" />
            </div>
            <div>
              <input type="text" placeholder="username" />
            </div>
            <div>
              <input type="text" placeholder="email" />
            </div>
            <div>
              <input type="text" placeholder="password" />
            </div>
            <div>
              <input type="text" placeholder="confirm password" />
            </div>
            <div className="Register-desc">
              By clicling on below button your account will be created
            </div>
            <button>Create user</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
