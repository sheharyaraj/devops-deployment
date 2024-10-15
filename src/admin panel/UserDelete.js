import React, { useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2';

export default function UserDelete(props) {

  const [userData, setUserData] = useState({
    name: "",
    email: ""
  });

  const handleFieldChange = (e) => {
    setUserData({ ...userData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userData.email) {
      Swal.fire({
        title: "Oops!",
        text: "Please enter an email",
        icon: "warning",
        confirmButtonText: "OK",
        iconColor: '#FD5631',
        confirmButtonColor: '#FD5631',
        background: '#1F1B2D',
        color: "white",
      });
      return;
    }
    
    if (userData.email === process.env.REACT_APP_ADMIN_EMAIL) {
      Swal.fire({
        title: "Warning!",
        text: "Cannot delete Admin.",
        icon: "warning",
        confirmButtonText: "OK",
        iconColor: "#FD5631",
        confirmButtonColor: "#FD5631",
        background: "#1F1B2D",
        color: "white",
      });
      return;
    }
        try {
          const response=await axios.get(`${process.env.REACT_APP_API_URL}/api/deleteuser`, {
            params: userData, 
            headers: {
              "Content-Type": "application/json",
            },
          });
          if (response.data.success){
          Swal.fire({
            icon: 'success',
            title: 'Congratulations!',
            text: 'User Deleted Successfully!' ,
            iconColor: '#FD5631', // Custom icon color
            confirmButtonColor: '#FD5631', // Custom confirm button color
            background: '#1F1B2D', 
            color:"white",
          });
        }
        else{
            Swal.fire({
                title: "Oops!",
                text: "User Not Found.",
                type: "warning",
                icon:"warning",
                confirmButtonText: "Try Again",
                iconColor: '#FD5631', // Custom icon color
                confirmButtonColor: '#FD5631', // Custom confirm button color
                background: '#1F1B2D', 
                color:"white",
              });
        }
        } catch (error) {
          console.error(error);
          Swal.fire({
            title: "Oops!",
            text: "Filed to Delete User.",
            type: "warning",
            icon:"warning",
            confirmButtonText: "Try Again",
            iconColor: '#FD5631', // Custom icon color
            confirmButtonColor: '#FD5631', // Custom confirm button color
            background: '#1F1B2D', 
            color:"white",
          });
      };
      
  };

  return (
    <div className="pt-4">
      <h1 className="mt-5 text-white font-weight-bold h1">Delete User</h1>
      <div className="mr-3 pt-3">
        <div
          className=" p-4 shadow"
          style={{
            background: "linear-gradient(180deg, #FB5631 0%, #1F1B2D 100%)",
            color: "white",
            borderRadius: "20px",
            boxShadow: "0 4px 8px rgba(253, 86, 49, 0.4)",
            transition: "box-shadow 0.3s ease-in-out",
          }}
        >
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="text-white font-weight-bold h5">
                Name
              </label>
              <input
                value={userData.name}
                type="text"
                id="name"
                className="form-control"
                required
                onChange={handleFieldChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="text-white font-weight-bold h5">
                Email
              </label>
              <input
                value={userData.email}
                type="email"
                id="email"
                className="form-control"
                required
                onChange={handleFieldChange}
              />
            </div>
            <div className="form-group">
              <button
                type="submit"
                className="btn btn-dark w-100"
                style={{ backgroundColor: "#FD5631" }}
              >
                Delete
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
