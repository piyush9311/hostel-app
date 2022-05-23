import React from 'react';
import { useState, useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import './signup.css';
import { UserAuthContext } from '../context/UserAuthContext';

function Signup() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");
    const [user, setUser] = useContext(UserAuthContext);
    let navigate = useNavigate();

    // Handling the name change
    const handleName = (e) => {
        setName(e.target.value);
        setSubmitted(false);
    };

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
    const handleSubmit = (e) => {
        e.preventDefault();
        setUser(prevUser => [...prevUser, { name: name, email: email, password: password }])
        setError("");
        navigate("/");
        setSubmitted(true);

    };

    // Showing success message
    const successMessage = () => {
        return (
            <div
                className="success"
                style={{
                    display: submitted ? '' : 'none',
                }}>
                <h1>User {name} successfully registered!!</h1>
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
        <div className='form-outer' id="register">
            <div className="form" id="container">
                <div>
                    <h1>User Registration</h1>
                </div>

                {/* Calling to the methods */}
                <div className="messages">
                    {errorMessage()}
                    {successMessage()}
                </div>

                <form>
                    <label className="label">Name</label>
                    <input onChange={handleName} className="input"
                        value={name} type="text" />

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
                Already have an account? <Link to="/">Log In</Link>
            </div>
        </div>
    )
}

export default Signup