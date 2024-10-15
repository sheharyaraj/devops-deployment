import React, { useEffect } from "react";
import img from "../images/exams.png";
import img2 from "../images/image2.jpg";
import "../styles/AboutUs.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AboutUs() {
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    const fadeElements = document.querySelectorAll(".fadeInOnScroll");

    fadeElements.forEach((element) => {
      observer.observe(element);
    });

    function handleIntersection(entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
        } else {
          entry.target.style.opacity = 0;
        }
      });
    }
  }, []);
  console.log(process.env)
  return (

    <div style={{ fontFamily: "Roboto-slab", backgroundColor: "#1F1B2D" }}>
      <Navbar />
      <div
        className="p-5 m-5 fadeInOnScroll text-center text-white"
        style={{
          backgroundColor: "#FD5631",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h1 className="h3  ">WE ARE YOUR KEY TO ACADEMIC SUCCESS</h1>
        <h1 className="h1 font-weight-bold  ">
          We Collaborate As Your Study Partners
        </h1>
      </div>
      <div
        className="p-5 text-white fadeInOnScroll"
        style={{
          display: "flex",
          justifyContent: "space-around",
          background: "linear-gradient(90deg, #FD5631 0%, #1F1B2D 100%)",
          color: "white",
        }}
      >
        <div className="text p-5">
          <h1 className="font-weight-bold" style={{ fontSize: "3rem" }}>
            Helping Millions
          </h1>
          <h1 className="font-weight-bold" style={{ fontSize: "5rem" }}>
            Grow Better
          </h1>
          <p style={{ fontSize: "1.2rem" }}>
            At PaperVault, we understand the importance of practicing with
            previous exam papers to gain insights into the exam format, question
            patterns, and time management skills. Whether you are a student
            preparing for upcoming exams or a teacher looking to design
            effective lesson plans, our platform offers a diverse selection of
            past papers to suit your needs.
          </p>
        </div>
        <div className="img d-none d-md-block">
          {/* d-none hides the image on small screens (hidden on screens below md breakpoint) */}
          <img
            src={img}
            alt=""
            width="500px"
            style={{
              border: "solid 2px",
              borderRadius: "20px",
              backgroundColor: "#FF8049",
            }}
          />
        </div>
      </div>

      <div
        className="p-5 text-white fadeInOnScroll"
        style={{
          display: "flex",
          justifyContent: "space-around",
          background: "linear-gradient(270deg, #FD5631 0%, #1F1B2D 100%)",
          color: "white",
        }}
      >
        <div className="img d-none d-md-block">
          {/* d-none hides the image on small screens (hidden on screens below md breakpoint) */}
          <img
            src={img2}
            alt=""
            width="500px"
            style={{ border: "solid 2px", borderRadius: "20px" }}
          />
        </div>
        <div className="text p-5 pb-0">
          <h1 className="font-weight-bold" style={{ fontSize: "3rem" }}>
            Our Mission
          </h1>
          <p style={{ fontSize: "1.2rem" }}>
            At PaperVault, our mission is to empower students and educators with
            a comprehensive collection of past exam papers, fostering a culture
            of academic excellence and success. We are dedicated to providing a
            user-friendly platform that offers a diverse selection of up-to-date
            past papers sourced from reputable institutions. By equipping
            learners with valuable resources and insights, we aim to enhance
            exam preparation, promote effective learning, and inspire continuous
            growth. Our commitment to delivering reliable and relevant past
            papers seeks to support students in their educational journey,
            enabling them to achieve their fullest potential and excel in their
            academic pursuits.
          </p>
        </div>
      </div>

      <div
  className="p-5 fadeInOnScroll"
  style={{
    background: "linear-gradient(180deg, #FD5631 0%, #1F1B2D 100%)",
    display: "flex",
    justifyContent: "center",
    color: "white",
  }}
>
  <div className="text-center mt-5">
    <h1 className="font-weight-bold" style={{ fontSize: "3rem" }}>
      Our Services
    </h1>
    <p className="h5">
      Comprehensive services for Past Papers and Exam Preparation!
    </p>
  </div>
</div>

<div className="container mt-5 mb-5" >
  <div className="row">
    <div className="col-md-6 mb-3">
      <div
        className=" h-100"
        style={{
          backgroundColor: "transparent",
          color: "white",
          borderRadius: "20px",
          boxShadow: "0 4px 8px rgba(253, 86, 49, 0.4)", // Add box shadow for glow effect
          transition: "box-shadow 0.3s ease-in-out", // Add smooth transition on hover
        }}
      >
        <div className="card-body">
          <h5 className="card-title">Comprehensive Past Papers Repository</h5>
          <p className="card-text p-5">The website provides a vast collection of past exam papers from various educational boards, universities, and competitive exams. It covers a wide range of subjects and levels, allowing users to access past papers for their specific courses or exams.</p>
        </div>
      </div>
    </div>

    <div className="col-md-6 mb-3">
      <div
        className=" h-100"
        style={{
          backgroundColor: "transparent",
          color: "white",
          borderRadius: "20px",
          boxShadow: "0 4px 8px rgba(253, 86, 49, 0.4)", // Add box shadow for glow effect
          transition: "box-shadow 0.3s ease-in-out", // Add smooth transition on hover
        }}
      >
        <div className="card-body">
          <h5 className="card-title">Subject-Wise Study Guides</h5>
          <p className="card-text p-5"> Along with past papers, 
          the website provides subject-wise study guides, tips, 
          and resources to help users prepare effectively. 
           It aims to support students in their exam preparation
           journey beyond just offering past papers.</p>
        </div>
      </div>
    </div>
  </div>
</div>


      <Footer />
    </div>
  );
}
