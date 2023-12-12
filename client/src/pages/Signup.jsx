import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [fullName, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [checkBox1, setCheckBox1] = useState(false);
  const [checkBox2, setCheckBox2] = useState(false);
  const Navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8000/register", { fullName, email, password })
      .then((result) => {
        console.log(result);
        Navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ maxWidth: "630px", paddingTop: "10px" }}
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
        <h1 className="text-center">Create an Account</h1>
        <br />
        <form onSubmit={handleSubmit}>
          {/* ... Form fields  ... */}

          <div className="mb-3">
            <label htmlFor="fullName" className="form-label">
              <h6>Full Name</h6>
            </label>
            <input
              type="text"
              className="form-control"
              id="fullName"
              name="fullName"
              style={{ borderColor: "#999999" }}
              value={fullName}
              onChange={(e) => setFullname(e.target.value)}
              placeholder="Full name"
              required
            />
          </div>

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
              placeholder="Email"
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
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label ">
              <h6>Confirm Password</h6>
            </label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              style={{ borderColor: "#999999" }}
              name="confirmPassword"
              value={confirmpassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
              required
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="checkBox1"
              name="checkBox1"
              style={{ borderColor: "#999999" }}
              checked={checkBox1}
              onChange={(e) => setCheckBox1(e.target.value)}
            />
            <label className="form-check-label" htmlFor="checkBox1">
              <h6>Yes, I want to recive an email.</h6>
            </label>
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input "
              style={{ borderColor: "#999999" }}
              id="checkBox2"
              name="checkBox2"
              checked={checkBox2}
              onChange={(e) => setCheckBox2(e.target.value)}
            />
            <label className="form-check-label" htmlFor="checkBox2">
              <h6>
                I agree to all{" "}
                <a style={{ color: "#E7319D" }}>Terms & Privacy Policy</a>
              </h6>
            </label>
            {/* ... Checkbox inputs ... */}
          </div>
          <button
            type="submit"
            className="btn btn-primary d-block mx-auto w-100"
            style={{ backgroundColor: "#2FA551", border: "none" }}
          >
            Submit
          </button>
          <p className="mt-3 text-center">
            <h6>
              {" "}
              Already have an account?{" "}
              <a href="/" style={{ color: "#E7319D" }}>
                Sign in
              </a>
            </h6>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
