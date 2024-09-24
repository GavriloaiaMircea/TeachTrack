import React from "react";
import AuthForm from "../components/AuthForm";

function LoginPage() {
  const fields = [
    {
      type: "email",
      id: "floatingInput",
      label: "Email address or Username",
      placeholder: "name@example.com",
    },
    {
      type: "password",
      id: "floatingPassword",
      label: "Password",
      placeholder: "Password",
    },
  ];

  return (
    <AuthForm
      title="Please sign in"
      fields={fields}
      buttonText="Sign in"
      linkText="Don't have an account?"
      linkPath="/register"
    />
  );
}

export default LoginPage;
