import React, { useEffect } from "react";
import AuthForm from "../components/AuthForm";
import { validateRegister } from "../validationSchema";
import { register } from "../services/authService";
import { useNavigate } from "react-router-dom";
import useUserStore from "../stores/useUserStore";

function RegisterPage() {
  const user = useUserStore((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const fields = [
    {
      type: "email",
      id: "email",
      label: "Email address",
      placeholder: "name@example.com",
    },
    {
      type: "text",
      id: "username",
      label: "Username",
      placeholder: "John Doe",
    },
    {
      type: "password",
      id: "password",
      label: "Password",
      placeholder: "Password",
    },
    {
      type: "password",
      id: "confirmPassword",
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
      validationSchema={validateRegister}
      request={register}
    />
  );
}

export default RegisterPage;
