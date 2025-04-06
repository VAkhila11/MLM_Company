import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = ({ onLogin }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Mock login for now
        onLogin({ email: formData.email });
        navigate('/dashboard');
    };

    return (
        <div className="auth-container">
            <div className="auth-box">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit">Login</button>
                </form>
                <div className="switch-auth">
                    <p>Don't have an account? <button className="switch-btn" onClick={() => navigate('/register')}>Register</button></p>
                </div>
            </div>
        </div>
    );
};

export default Login; 