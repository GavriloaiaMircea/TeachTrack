import React from "react";
import { Link } from "react-router-dom";
import icon from "../assets/icon.png";

function AuthForm({ title, fields, buttonText, linkText, linkPath }) {
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
        <h1 className="h3 mb-3 fw-normal">{title}</h1>

        {fields.map((field, index) => (
          <div className="form-floating mb-3" key={index}>
            <input
              type={field.type}
              className="form-control"
              id={field.id}
              placeholder={field.placeholder}
            />
            <label htmlFor={field.id}>{field.label}</label>
          </div>
        ))}

        <button className="btn btn-primary w-100 py-2" type="submit">
          {buttonText}
        </button>
        <p className="mt-3 mb-0">
          {linkText}{" "}
          <Link to={linkPath}>
            {linkPath === "/login" ? "Login" : "Register"}
          </Link>
        </p>
      </form>
    </div>
  );
}

export default AuthForm;
