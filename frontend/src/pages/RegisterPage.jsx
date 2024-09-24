import React from "react";
import AuthForm from "../components/AuthForm";

function RegisterPage() {
  const fields = [
    {
      type: "email",
      id: "floatingInput",
      label: "Email address",
      placeholder: "name@example.com",
    },
    {
      type: "text",
      id: "floatingUsername",
      label: "Username",
      placeholder: "John Doe",
    },
    {
      type: "password",
      id: "floatingPassword",
      label: "Password",
      placeholder: "Password",
    },
    {
      type: "password",
      id: "floatingPassword2",
      label: "Confirm password",
      placeholder: "Confirm password",
    },
  ];

  return (
    <AuthForm
      title="Please sign up"
      fields={fields}
      buttonText="Register"
      linkText="Already have an account?"
      linkPath="/login"
    />
  );
}

export default RegisterPage;
