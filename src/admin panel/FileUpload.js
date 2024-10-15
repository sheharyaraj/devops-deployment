import React, { useState } from "react";
import axios from "axios";

import Swal from 'sweetalert2';
export default function FileUpload() {
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

  const handleImageChange = (e) => {
    setFileData({ ...fileData, images: e.target.files });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !fileData.universityName ||
      !fileData.paperYear ||
      !fileData.courseName ||
      !fileData.paperType ||
      !fileData.images
    ) {
      Swal.fire({
        title: "Oops!",
        text: "Please fill out all fields",
        icon: "warning",
        confirmButtonText: "OK",
        iconColor: '#FD5631', // Custom icon color
        confirmButtonColor: '#FD5631', // Custom confirm button color
        background: '#1F1B2D', 
        color:"white",
      });
      return; // Don't proceed with submission
      
    }
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/checkRecord`, {
        params: {
          universityName: fileData.universityName,
          paperYear: fileData.paperYear,
          courseName: fileData.courseName,
          paperType: fileData.paperType,
        },
      });

      if (response.data.exists) {
        Swal.fire({
          title: "Record Already Exists",
          text: "The record you are trying to upload already exists.",
          icon: "warning",
          confirmButtonText: "OK",
          iconColor: '#FD5631', // Custom icon color
          confirmButtonColor: '#FD5631', // Custom confirm button color
          background: '#1F1B2D', 
          color:"white",
        });
        return; // Don't proceed with submission
      }
    } catch (error) {
      console.error(error);
    }

    const formData = new FormData();
    formData.append("universityName", fileData.universityName);
    formData.append("paperYear", fileData.paperYear);
    formData.append("courseName", fileData.courseName);
    formData.append("paperType", fileData.paperType);
    for (let i = 0; i < fileData.images.length; i++) {
      formData.append("images", fileData.images[i]);
    }

    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/api/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      Swal.fire({
        icon: 'success',
        title: 'Congratulations!',
        text: 'File Uploaded Successfully!',
        iconColor: '#FD5631', // Custom icon color
        confirmButtonColor: '#FD5631', // Custom confirm button color
        background: '#1F1B2D', 
        color:"white",
      });
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: "Oops!",
        text: "File Uploading FAiled!",
        type: "warning",
        icon:"warning",
        confirmButtonText: "Try Again",
        background: '#1F1B2D', 
        color:"white",
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
    <div className="pt-4" style={{overflowX:"hidden"}}>
      <h1 className="pt-5 pb-2 pl-3 font-weight-bold h1 text-white">Upload Your Paper</h1>
      <div className=" pt-0 pl-2 pr-2">
        <div
          className="p-4 shadow"
          style={{
            background: "linear-gradient(180deg, #FB5631 0%, #1F1B2D 100%)",
            color: "white",
            borderRadius: "20px",
            boxShadow: "0 4px 8px rgba(253, 86, 49, 0.4)",
            transition: "box-shadow 0.3s ease-in-out",
          }}
        >
          <form onSubmit={handleSubmit}>
            <div className="form-group ">
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
              <label htmlFor="paperYear" className="text-white  font-weight-bold h5">
                Paper Year
              </label>
              <select
                id="paperYear"
                className="form-control "
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
              <label htmlFor="courseName" className="text-white  font-weight-bold h5">
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
              <label htmlFor="paperType" className="text-white  font-weight-bold h5">
                Paper Type
              </label>
              <select
                id="paperType"
                className="form-control"
                required
                onChange={handleFileChange}
              >
                <option value="">Select Paper Type</option>
                <option value="mid1">Mid1</option>
                <option value="mid2">Mid2</option>
                <option value="final">Final</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="images" className="text-white  font-weight-bold h5">
                Select Images
              </label>
              <input
                type="file"
                id="images"
                className="form-control"
                multiple
                accept="image/png, image/jpeg, image/jpg"
                onChange={handleImageChange}
              />
            </div>
            <div className="form-group">
              <button
                type="submit"
                className="btn btn-dark"
                style={{ backgroundColor: "#FD5631", width:"100%" }}
                
              >
                Upload
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
