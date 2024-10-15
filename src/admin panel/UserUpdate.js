import React, { useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2';

export default function UserUpdate(props) {

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    newemail:""
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
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/getuserdata/${userData.email}`
      );

      if (!response.data) {
        Swal.fire({
          title: "Oops!",
          text: "User not found with the provided email",
          icon: "warning",
          confirmButtonText: "OK",
          iconColor: '#FD5631',
          confirmButtonColor: '#FD5631',
          background: '#1F1B2D',
          color: "white",
        });
        return;
      }
      const updatedUserData = {
        name: userData.name ,
        password: userData.password , // Empty password if not provided
        email:userData.newemail
      };
  
      const updateResponse = await axios.put(
        `${process.env.REACT_APP_API_URL}/api/updateuser/${response.data._id}`,
        updatedUserData
      );

      if (updateResponse.data.success) {
        Swal.fire({
          icon: 'success',
          title: 'Congratulations!',
          text: 'Record Updated Successfully!',
          iconColor: '#FD5631',
          confirmButtonColor: '#FD5631',
          background: '#1F1B2D',
          color: "white",
        });
  
      } else {
        Swal.fire({
          icon: 'warning',
          title: 'Sorry!',
          text: 'Failed to Update Record!',
          iconColor: '#FD5631',
          confirmButtonColor: '#FD5631',
          background: '#1F1B2D',
          color: "white",
        });
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: 'warning',
        title: 'Sorry!',
        text: 'Failed to Update Record!',
        iconColor: '#FD5631',
        confirmButtonColor: '#FD5631',
        background: '#1F1B2D',
        color: "white",
      });
    }
  };

  return (
    <div className="pt-4">
      <h1 className="mt-5 text-white font-weight-bold h1">Update User</h1>
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
              <label htmlFor="name" className="text-white font-weight-bold h5">
                Enter New name
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
                Enter New Email
              </label>
              <input
                value={userData.newemail}
                type="email"
                id="newemail"
                className="form-control"
                required
                onChange={handleFieldChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password" className="text-white font-weight-bold h5">
                Enter New Password
              </label>
              <input
                value={userData.password}
                type="password"
                id="password"
                className="form-control"
                onChange={handleFieldChange}
              />
            </div>
            <div className="form-group">
              <button
                type="submit"
                className="btn btn-dark w-100"
                style={{ backgroundColor: "#FD5631" }}
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
