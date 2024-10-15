import React from "react";
import { Link } from "react-router-dom";
import "../styles/Login.css";
import Swal from 'sweetalert2'; 
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async(event) => {
    event.preventDefault();
    
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/loginuser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const json = await response.json();

    if (json.success) {
      Swal.fire({
        icon: 'success',
        title: 'Congratulations!',
        text: 'Login Successful!',
        iconColor: '#FD5631', // Custom icon color
        confirmButtonColor: '#FD5631', // Custom confirm button color
        background: '#1F1B2D', 
        color:"white",
      });


      localStorage.setItem('token', json.authToken);
      localStorage.setItem('email', email);
      
      if (email === process.env.REACT_APP_ADMIN_EMAIL) {
        navigate('/panel');
      } else {
        navigate('/home');
      }
    } else {
      Swal.fire({
        title: "Oops!",
        text: "Wrong Credentials!",
        type: "warning",
        confirmButtonText: "Try Again",
        iconColor: '#FD5631', // Custom icon color
        confirmButtonColor: '#FD5631', // Custom confirm button color
        background: '#1F1B2D', 
        color:"white",
      });
    }
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="text-center">
            Not registered yet?{" "}
            <Link className="link" to="/signup">
              Sign Up
            </Link>
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              className="form-control mt-1"
              type='email'
              placeholder='name@example.com'
              value={email}
              onChange={(event) => setEmail(event.target.value)} />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              className="form-control mt-1"
              type='password'
              placeholder='Password'
              value={password}
              onChange={(event) => setPassword(event.target.value)} />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Sign In
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
