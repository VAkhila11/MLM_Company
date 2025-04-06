import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        referralCode: ''
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
        // Mock registration for now
        navigate('/');
    };

    return (
        <div className="auth-container">
            <div className="auth-box">
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
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
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="referralCode"
                        placeholder="Referral Code (Optional)"
                        value={formData.referralCode}
                        onChange={handleChange}
                    />
                    <button type="submit">Register</button>
                </form>
                <div className="switch-auth">
                    <p>Already have an account? <button className="switch-btn" onClick={() => navigate('/')}>Login</button></p>
                </div>
            </div>
        </div>
    );
};

export default Register; 