import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import LoginForm from "./LoginForm/loginForm";
import FormValues from "./Login.model";
import "./login.css";

import 'dotenv';

import { LogIn } from "../../data/AuthService";

import { ErrorAlert } from "../../components/PageAlert/pageAlert";

const Login = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    userName: "werner",
    password: "12345",
  });
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value, title } = event.target;

    setFormValues({ ...formValues, [title]: value });
  }

  async function onSubmit() {
    const response = await LogIn({ user: formValues });

    if (response) {
      sessionStorage.setItem("authenticated", JSON.stringify(true));
      setError("");
      navigate("/");
    } else {
      setError("Username or password is invalid!");
    }
  }

  return (
    <div className="card login">
      <h1 className="heading">Login screen</h1>
      <div className="login-form-container">
        <LoginForm data={formValues} onChange={onChange} onSubmit={onSubmit} />
        {error && <ErrorAlert message={error} />}
      </div>
    </div>
  );
};

export default Login;
