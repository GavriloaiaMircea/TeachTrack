import React, { useState } from "react";
import { Link } from "react-router-dom";
import icon from "../assets/icon.png";

function AuthForm({
  title,
  fields,
  buttonText,
  linkText,
  linkPath,
  validationSchema,
}) {
  const [data, setData] = useState({});
  const [err, setErr] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setData((prev) => ({ ...prev, [id]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const { success, errors } = validationSchema(data);

    if (success) {
      console.log("Form data:", data);
    } else {
      const errorObj = {};
      errors.forEach((error) => {
        errorObj[error.path[0]] = error.message;
      });
      setErr(errorObj);
      console.log("Validation errors:", errors);
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{ backgroundColor: "#343a40" }}
    >
      <form
        className="text-center p-4 bg-light rounded"
        style={{ width: "300px" }}
        onSubmit={onSubmit}
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
              className={`form-control ${err[field.id] ? "is-invalid" : ""}`}
              id={field.id}
              placeholder={field.placeholder}
              onChange={handleChange}
              value={data[field.id] || ""}
            />
            <label htmlFor={field.id}>{field.label}</label>

            {err[field.id] && (
              <div className="invalid-feedback">{err[field.id]}</div>
            )}
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
