import React from "react"
import { Link } from "react-router-dom"
import { useState } from 'react';
import Swal from 'sweetalert2'; 



export default function Signup() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/createuser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, password, location })
    });
  
    const json = await response.json();
  
    if (json.success) {
      Swal.fire({
        icon: 'success',
        title: 'Congratulations!',
        text: 'Account Created Successfully!',
        iconColor: '#FD5631', // Custom icon color
        confirmButtonColor: '#FD5631', // Custom confirm button color
        background: '#1F1B2D', 
        color:"white",
      });
      
    } else if (json.message === 'Account already exists') {
      Swal.fire({
        title: 'Hey!',
        text: 'Account already exists!',
        icon: 'info',
        confirmButtonText: 'OK',
        iconColor: '#FD5631', // Custom icon color
        confirmButtonColor: '#FD5631', // Custom confirm button color
        background: '#1F1B2D', 
        color:"white",
      });
    } else {
      Swal.fire({
        title: 'Oops!',
        text: 'Account Creation Failed!',
        icon: 'error',
        confirmButtonText: 'Try Again',
        iconColor: '#FD5631', // Custom icon color
        confirmButtonColor: '#FD5631', // Custom confirm button color
        background: '#1F1B2D', 
        color:"white",
      });
    }
  };
  

  

  return (
    <div className="Auth-form-container" >
      <form className="Auth-form"  onSubmit={handleSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title" style={{fontFamily:"Roboto-slab !important"}}>Sign Up</h3>
          <div className="text-center" style={{fontFamily:"Roboto-slab !important"}}>
            Already registered?{" "}
            <Link className="link" to="/login">
              Sign In
            </Link>
          </div>
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input
             
              className="form-control mt-1"
              type='text'
              placeholder='Name'
              value={name}
              onChange={(event) => setName(event.target.value)}              
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              className="form-control mt-1"
              type='email'
              placeholder='name@example.com'
              value={email}
              onChange={(event) => setEmail(event.target.value)}            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              className="form-control mt-1"
              type='password'
              placeholder='Password'
              value={password}
              onChange={(event) => setPassword(event.target.value)}            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary" onSubmit={handleSubmit}>
              Sign Up
            </button>
          </div>
        
        </div>
      </form>
    </div>
  )
};
