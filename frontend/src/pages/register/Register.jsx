import React from "react";
import "./register.scss";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>SerDev Social.</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente,
            officiis corporis ab aliquam sint consequatur molestiae! Minus, eum
            quibusdam rerum fugiat iusto harum expedita sint repellat illum,
            omnis magnam aut!
          </p>
          <span>Don you have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="text" placeholder="Name" />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
