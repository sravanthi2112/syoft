// src/Dashboard.js
import React from 'react';
import './index.css'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const details = user.user_data[0]
    console.log(user.status)
    const navigate = useNavigate()
    const handleSignup = () => {
        navigate('/signup',{replace:true})
    }
    if(user.status){
        return (
            <div className='user_dashboard'>
                <div className='user_details_body'>
                    <h1>Dashboard</h1>
                    <p>Name: {details.user_firstname} {details.user_lastname}</p>
                    <p>Email: {details.user_email}</p>
                    <p>Phone: {details.user_phone}</p>
                    <p>City: {details.user_city}</p>
                    <p>Zipcode: {details.user_zipcode}</p>
                </div>
            </div>
        );
        
    }else{
        return(
            <div className='user_dashboard'><div className='user_details_body'><h1>Account doesn't exist</h1>
        <p>To create Account click on Signup button</p>
        <button type="submit" onClick = {handleSignup}>Sign Up</button></div></div>
        )
    }
    
};

export default Dashboard;
