import React, { useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2';
export default function FileUpdate() {
    const [fileData, setFileData] = useState({
        universityName: "",
        paperYear: "",
        courseName: "",
        paperType: "",
        images: null,
      });
    
      const handleFileChange = (e) => {
        setFileData({ ...fileData, [e.target.id]: e.target.value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await axios.get("http://localhost:5001/api/deletepaper", {
            params: fileData, 
            headers: {
              "Content-Type": "application/json",
            },
          });
          Swal.fire({
            icon: 'success',
            title: 'Congratulations!',
            text: 'Record Deleted Successfully!' ,
            iconColor: '#FD5631', // Custom icon color
            confirmButtonColor: '#FD5631', // Custom confirm button color
            background: '#1F1B2D', 
            color:"white",
          });
        } catch (error) {
          console.error(error);
          Swal.fire({
            title: "Oops!",
            text: "Filed to Delete Paper.",
            type: "warning",
            icon:"warning",
            confirmButtonText: "Try Again",
            iconColor: '#FD5631', // Custom icon color
            confirmButtonColor: '#FD5631', // Custom confirm button color
            background: '#1F1B2D', 
            color:"white",
          });
        }
      };
    
      // Generate an array of years from 2000 to the current year
      const currentYear = new Date().getFullYear();
      const years = Array.from({ length: currentYear - 1999 }, (_, index) => currentYear - index);
    
  return (
    <div className="pt-4 ">
      <h1 className="pt-5 pb-2 pl-3 text-white font-weight-bold h1">Delete Paper</h1>
      <div className=" pt-3 mr-3">
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
              <label htmlFor="universityName" className="text-white font-weight-bold h5">
                University Name
              </label>
              <input
                type="text"
                id="universityName"
                className="form-control"
                required
                onChange={handleFileChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="paperYear" className="text-white font-weight-bold h5">
                Paper Year
              </label>
              <select
                id="paperYear"
                className="form-control"
                required
                onChange={handleFileChange}
              >
                <option value="">Select Paper Year</option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="courseName" className="text-white font-weight-bold h5">
                Course Name
              </label>
              <input
                type="text"
                id="courseName"
                className="form-control"
                required
                onChange={handleFileChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="paperType" className="text-white font-weight-bold h5">
                Paper Type
              </label>
              <select
                id="paperType"
                className="form-control "
                required
                onChange={handleFileChange}
              >
                <option value="">Select Paper Type</option>
                <option value="mid1">mid1</option>
                <option value="mid2">mid2</option>
                <option value="final">final</option>
              </select>
            </div>
            <div className="form-group">
              <button
                type="submit"
                className="btn btn-dark w-100 font-weight-bold h5"
                style={{ backgroundColor: "#FD5631" }}
              >
                Delete
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
