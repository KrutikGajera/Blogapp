import React from "react";
import { Link } from "react-router-dom";
import './Login.css'

function Login() {
  return (
    <div>
      <section>
        <div className="container-fluid content2 backimg1">
        <div className="container content">
          <form>
            <p className="contenttext buttonfamaily">Login</p>
            <p className="title1">Email:-</p>
            <input
              type="email"
              placeholder="Enter Email"
              className="textbox"
            />
            <br />
            <p className="title1">Password:-</p>
            <input
              type="password"
              placeholder="Enter Password"
              className="textbox"
            />
            <div className="p-5">
              <Link to="/signup">
                <button className="btn btn-dark buttonfamaily">Signup</button>
              </Link>
              <Link to={'imgui'}>
                <button className="btn submit buttonfamaily gap">Submit</button>
              </Link>
            </div>
          </form>
        </div>
        </div>
      </section>
    </div>
  );
}

export default Login;


