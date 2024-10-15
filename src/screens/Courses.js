import React, { useState, useEffect } from 'react';
import '../styles/Courses.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsSearch } from 'react-icons/bs';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [uni, setUni] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState('');
  const [selectedUniversity, setSelectedUniversity] = useState('');
  const [selectedPaperType, setSelectedPaperType] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {

    fetch(`${process.env.REACT_APP_API_URL}/api/get-course-details`)
      .then(response => response.json())
      .then(data => {
        setCourses(data);
        setFilteredCourses(data);
      })
      .catch(error => console.error(error));
  }, []);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/get-university-details`)
      .then(response => response.json())
      .then(data => {
        setUni(data);
      })
      .catch(error => console.error(error));
  }, []);

  const uniqueCourseNames = [...new Set(courses.map(course => course.courseName))];
  const uniquePaperTypes = [...new Set(courses.map(course => course.paperType))];
  const uniqueYears = [...new Set(courses.map(course => course.paperYear))];

  useEffect(() => {
    let filtered = courses;

    if (selectedUniversity) {
      filtered = filtered.filter(course => course.universityName === selectedUniversity);
    }
    if (selectedCourse) {
      filtered = filtered.filter(course => course.courseName === selectedCourse);
    }
    if (selectedPaperType) {
      filtered = filtered.filter(course => course.paperType === selectedPaperType);
    }
    if (selectedYear) {
      filtered = filtered.filter(course => course.paperYear === selectedYear);
    }

    setFilteredCourses(filtered);
  }, [selectedCourse, selectedUniversity, selectedPaperType, selectedYear, courses]);

  useEffect(() => {
    if (searchTerm) {
      const filteredBySearch = courses.filter(course =>
        course.universityName.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredCourses(filteredBySearch);
    } else {
      setFilteredCourses(courses);
    }
  }, [searchTerm, courses]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey) {
        e.preventDefault();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div style={{ background: "linear-gradient(180deg, #FD5631 0%, #1F1B2D 100%)" }}>
      <Navbar />
      <div className="uni-screen container pt-5 pb-5">
        <div className="row">
          <div className="col-lg-3">
            <div className="search-bar input-group rounded mr-5 ml-1">
              <input
                type="text"
                className="form-control rounded"
                placeholder="Search for University..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="input-group-append">
                <span className="input-group-text rounded-right box-elem" style={{ backgroundColor: "#1F1B2D", color: "white" }}>
                  <BsSearch />
                </span>
              </div>
            </div>
            <div className="course-buttons">
              <button className='uni-name-box' onClick={() => {
                setSelectedUniversity('');
                setSelectedCourse('');
                setSelectedPaperType('');
                setSelectedYear('');
                setSearchTerm('');
              }}>
                All
              </button>
              {uni.map(university => (
                <button className='uni-name-box'
                  key={university._id}
                  onClick={() => setSelectedUniversity(university.name)}
                >
                  {university.name}
                </button>
              ))}
            </div>
          </div>
          <div className="col-lg-9">
            <div className="filters">
              <div className="filter">
                <select
                  value={selectedCourse}
                  onChange={e => setSelectedCourse(e.target.value)}
                >
                  <option value="">Select Course</option>
                  {uniqueCourseNames.map(courseName => (
                    <option key={courseName} value={courseName}>
                      {courseName}
                    </option>
                  ))}
                </select>
              </div>
              <div className="filter">
                <select
                  value={selectedPaperType}
                  onChange={e => setSelectedPaperType(e.target.value)}
                >
                  <option value="">Select Paper Type</option>
                  {uniquePaperTypes.map(paperType => (
                    <option key={paperType} value={paperType}>
                      {paperType}
                    </option>
                  ))}
                </select>
              </div>
              <div className="filter">
                <select
                  value={selectedYear}
                  onChange={e => setSelectedYear(e.target.value)}
                >
                  <option value="">Select Year</option>
                  {uniqueYears.map(year => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="card-container">
              {filteredCourses.length > 0 ? (
                filteredCourses.map(course => (
                  <Card
                    key={course._id}
                    courseName={course.courseName}
                    images={course.images}
                  />
                ))
              ) : (
                <h1 style={{ textAlign: 'center', marginTop: '100px', color: 'white', height: "200px" }}>
                  No Record Exists
                </h1>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Courses;
