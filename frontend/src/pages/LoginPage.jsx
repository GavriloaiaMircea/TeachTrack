import React from "react";
import AuthForm from "../components/AuthForm";
import { validateLogin } from "../validationSchema";

function LoginPage() {
  const fields = [
    {
      type: "text",
      id: "usernameOrEmail",
      label: "Email address or Username",
      placeholder: "name@example.com",
    },
    {
      type: "password",
      id: "password",
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
      validationSchema={validateLogin}
    />
  );
}

export default LoginPage;
