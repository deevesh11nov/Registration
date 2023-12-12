import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8000/login", { email, password })
      .then((result) => {
        console.log(result);
        if (result.data === "Success") {
          Navigate("/property");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ maxWidth: "630px", paddingTop: "15px" }}
    >
      <div className="col-md-6 w-100 ">
        <div className="d-inline-block container d-flex justify-content-center align-items-center">
          <div
            className="position-relative d-inline-block"
            style={{
              width: "50px",
              height: "50px",
              backgroundColor: "#E7319D",
              borderRadius: "50%",
            }}
          ></div>

          <h5
            className="d-inline-block ml-2 text-center"
            style={{ paddingTop: "10px" }}
          >
            OHSM
          </h5>
        </div>

        <br />
        <h1 className="text-center">Sign in to OHSM</h1>
        <br />
        <form onSubmit={handleSubmit}>
          {/* ... Form fields */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              <h6>Email</h6>
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              style={{ borderColor: "#999999" }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Username or email"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              <h6>Password</h6>
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              style={{ borderColor: "#999999" }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary d-block mx-auto w-100 "
            style={{ backgroundColor: "#2FA551", border: "none" }}
          >
            Sign In
          </button>

          <p className="mt-3 text-center">
            <h6>
              {" "}
              Don't have an account?{" "}
              <a href="/signup" style={{ color: " #E7319D" }}>
                SignUp
              </a>
            </h6>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
