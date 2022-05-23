import React from 'react';
import { useState } from 'react';
import './signup.css'
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");
    const { logIn, googleSignIn } = useUserAuth();
    const navigate = useNavigate();

    // Handling the email change
    const handleEmail = (e) => {
        setEmail(e.target.value);
        setSubmitted(false);
    };

    // Handling the password change
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted(false);
    };

    // Handling the form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await logIn(email, password);
            setSubmitted(true);
            navigate("/welcome");
        } catch (err) {
            setError(err.message);
            setSubmitted(false);
        }
    };

    // Showing success message
    const successMessage = () => {
        return (
            <div
                className="success"
                style={{
                    display: submitted ? '' : 'none',
                }}>
                <h1>User {email} successfully logged!!</h1>
            </div>
        );
    };

    // Showing error message if error is true
    const errorMessage = () => {
        return (
            <div
                className="error"
                style={{
                    display: error ? '' : 'none',
                }}>
                <h1>Please enter all the fields</h1>
            </div>
        );
    };
    return (
        <div className='form-outer' id="login">
            <div className="form" id="container">
                <div>
                    <h1>User Login</h1>
                </div>

                {/* Calling to the methods */}
                <div className="messages">
                    {errorMessage()}
                    {successMessage()}
                </div>

                <form>
                    <label className="label">Email</label>
                    <input onChange={handleEmail} className="input"
                        value={email} type="email" />

                    <label className="label">Password</label>
                    <input onChange={handlePassword} className="input"
                        value={password} type="password" />

                    <button onClick={handleSubmit} className="btn" type="submit">
                        Submit
                    </button>
                </form>
            </div>

            <div style={{ margin: "10px;", textAlign: "center" }}>
                Do not have an account? <Link to="/register">Sign Up</Link>
            </div>
        </div>
    )
}

export default Login