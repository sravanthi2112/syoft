// src/Login.js
import './index.css'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({
        user_email: '',
        user_password: ''
    });
    const navigate = useNavigate();
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://syoft.dev/Api/userlogin/api/userlogin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const result = await response.json();
            localStorage.setItem('user', JSON.stringify(result));
            navigate('/dashboard', {replace: true});
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="login_bg">
            <div className="login-body"><form onSubmit={handleSubmit}>
            <h1>Login</h1>
                <label htmlFor='email'>Email address<span className='star'> *</span> </label><br/>
                <input type="email" name="user_email" placeholder="Email" className='inputfield' onChange={handleChange} required /><br/>
                <label htmlFor='password'>Password<span className='star'> *</span> </label><br/>
                <input type="password" name="user_password" placeholder="Password" className='inputfield' onChange={handleChange} required /><br/>
                <button type="submit">Log In</button>
            </form>
            </div>
        </div> 
    );
};

export default Login;
