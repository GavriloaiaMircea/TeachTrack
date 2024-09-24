import React, { useEffect } from "react";
import AuthForm from "../components/AuthForm";
import { validateLogin } from "../validationSchema";
import { login } from "../services/authService";
import { useNavigate } from "react-router-dom";
import useUserStore from "../stores/useUserStore";

function LoginPage() {
  const user = useUserStore((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

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
      request={login}
    />
  );
}

export default LoginPage;
