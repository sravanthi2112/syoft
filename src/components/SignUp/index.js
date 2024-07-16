// src/SignUp.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css'

const SignUp = () => {
    const [formData, setFormData] = useState({
        user_firstname: '',
        user_email: '',
        user_phone: '',
        user_password: '',
    });
    
    const navigate = useNavigate()

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const data = {
            ...formData,
            user_lastname: 'kannapally',
            user_city: 'Hyderabad',
            user_zipcode: '500072'
        };
        try {
            const response = await fetch('https://syoft.dev/Api/user_registeration/api/user_registeration', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            const result = await response.json();
            localStorage.setItem('user', JSON.stringify(result));
            console.log(result);
            navigate('/login',{replace: true})
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="signup_page">
            <div className='signup_page_body'>
                <div className='firstpartbg'>
                    <h1 className='head'>Welcome to Syoft Carees</h1>
                    <p className='description'>Sign up to Explore the Oppurtunities.</p>
                </div>
                <div className='secondpartbg'>
                    <h1>Sign UP</h1>
                    <p>Already have an Account? <a href='/login'>Sign in</a></p>
                <form onSubmit={handleSubmit}>
                    <label htmlFor='firstname'>First name<span className='star'> *</span> </label><br/>
                    <input id='firstname' type="text" name="user_firstname" placeholder="First Name" className='inputfield' onChange={handleChange} required /><br/>
                    <label htmlFor='email'>Email address<span className='star'> *</span> </label><br/>
                    <input type="email" name="user_email" placeholder="Email" className='inputfield' onChange={handleChange} required /><br/>
                    <label htmlFor='phone'>Phone number<span className='star'> *</span> </label><br/>
                    <input type="text" name="user_phone" placeholder="Phone" className='inputfield' onChange={handleChange} required /><br/>
                    <label htmlFor='password'>Password<span className='star'> *</span> </label><br/>
                    <input type="password" name="user_password" placeholder="Password" className='inputfield' onChange={handleChange} required /><br/>
                    <input type='checkbox' id="checkbox" />
                    <label htmlFor='checkbox' >I agree terms of service and Privacy Policy </label><br/>
                    <button type="submit">Sign Up</button>
                </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
