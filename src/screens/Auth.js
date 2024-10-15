import React from 'react'
import Adminpanel from '../screens/Adminpanel'
import Error from '../screens/Error'

export default function Auth() {
    let  email='';
    const response =  fetch(`${process.env.REACT_APP_API_URL}/api/loginuser`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email})
      });
  
       email = localStorage.getItem('email');
  

  return (
    localStorage.getItem('email')=='admin@gmail.com' ? <Adminpanel/> : <Error/>
  )
}
