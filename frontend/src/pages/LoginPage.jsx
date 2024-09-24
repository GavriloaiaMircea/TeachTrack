import React from "react";
import icon from "../assets/icon.png";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{ backgroundColor: "#343a40" }}
    >
      <form
        className="text-center p-4 bg-light rounded"
        style={{ width: "300px" }}
      >
        <img
          className="mb-4"
          src={icon}
          alt=""
          width="100"
          height="100"
          style={{ borderRadius: "50%" }}
        />
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <button className="btn btn-primary w-100 py-2" type="submit">
          Sign in
        </button>
        <p className="mt-3 mb-0">
          Don't have an account? <Link to="/register">Create one.</Link>
        </p>
      </form>
    </div>
  );
}

export default LoginPage;
