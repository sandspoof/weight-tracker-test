import React, { useState } from "react";

import LoginForm from "./LoginForm/loginForm";
import FormValues from "./Login.model";
import './login.css';

const Login = () => {
    const [formValues, setFormValues] = useState<FormValues>({ userName: 'werner', password: '12345'});

    function onChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { value, title } = event.target;
        
        setFormValues({ ...formValues, [title]: value });
    }

    function onSubmit() {
        console.log('Sign In clicked!')
    }

    return (
        <div className="screen login">
            <h1 className="nice-color">Login screen</h1>
            <div className="login-form-container">
                <LoginForm data={formValues} onChange={onChange} onSubmit={onSubmit} />
            </div>
        </div>
    )
}

export default Login;