import React, { useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2';


export default function FileUpdate2(props) {

    let paper = props.paperData

    const [fileData, setFileData] = useState({
      universityName: paper[0].universityName,
      paperYear: paper[0].paperYear,
      courseName: paper[0].courseName,
      paperType: paper[0].paperType,
      images: paper[0].images.map(url => ({ url })),
    });
    
    
      const handleFileChange = (e) => {
        setFileData({ ...fileData, [e.target.id]: e.target.value });
      };
    
      const handleImageChange = (e) => {
        if (e.target.files.length > 0) {
          setFileData({ ...fileData, images: [...fileData.images, ...e.target.files] });
        }
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
        const formData = new FormData();
        formData.append("universityName", fileData.universityName);
        formData.append("paperYear", fileData.paperYear);
        formData.append("courseName", fileData.courseName);
        formData.append("paperType", fileData.paperType);
        for (let i = 0; i < fileData.images.length; i++) {
          formData.append("images", fileData.images[i]);
        }
    
        try {
          const response= await axios.put(`${process.env.REACT_APP_API_URL}/api/updatepaper/`+paper[0]._id, formData, {
            params:fileData,
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
          Swal.fire({
            icon: 'success',
            title: 'Congratulations!',
            text: 'Record Updated Successfully!',
            iconColor: '#FD5631', // Custom icon color
            confirmButtonColor: '#FD5631', // Custom confirm button color
            background: '#1F1B2D', 
            color:"white",
          });
          props.setShow(false);
        } catch (error) {
          console.error(error);
          Swal.fire({
            icon: 'warning',
            title: 'Sorry!',
            text: 'Failed to Update Record!',
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
    <div>
        <h1 className="text-white font-weight-bold h1">Update Your Paper</h1>
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
              <label htmlFor="universityName" className="text-white font-weight-bold h5">
                University Name
              </label>
              <input
                value={fileData.universityName}
                type="text"
                id="universityName"
                className="form-control"
                required
                onChange={handleFileChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="paperYear" className="text-white  font-weight-bold h5" >
                Paper Year
              </label>
              <select
                id="paperYear"
                className="form-control"
                required
                onChange={handleFileChange}
                value={fileData.paperYear}
              >
                <option >Select Paper Year</option>
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
                value={fileData.courseName}
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
                value={fileData.paperType}
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
  <label htmlFor="images" className="text-white font-weight-bold h5">
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
  {/* <div className="mt-2">
    { Display default image names }
    {fileData.images.map((image, index) => (
      <img src={image.url}></img>
    ))}
  </div> */}
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
  )
}
