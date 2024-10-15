import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Reviews() {
  const [name, setName] = useState('');
  const [university, setUniversity] = useState('');
  const [message, setMessage] = useState('');
  const [testimonials, setTestimonials] = useState([]);

  const fetchReviews = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/reviews`);
      const data = await response.json();
      if (data.success) {
        setTestimonials(data.reviews);
      }
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/reviews`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          university,
          message,
        }),
      });

      const responseData = await response.json();

      if (responseData.success) {
        console.log('Review submitted successfully');
        setName('');
        setUniversity('');
        setMessage('');
        fetchReviews(); // Fetch updated reviews after submission
      } else {
        console.log('Review submission failed');
      }
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };
  return (
    <div style={{ backgroundColor: "#1F1B2D", minHeight: "100vh", color: "white", fontFamily:"Times New Roman" }}>
      <Navbar />
     
      <section className="pt-5 p-md-5 text-center shadow-1-strong rounded">
        <div className="rounded p-5 text-white bg-transparent border-0 shadow-lg" style={{ background: `linear-gradient(145deg, #FD5631, #1F1B2D)` }}>
          <div className="card-body">
            <h3 className="card-title mb-2">Share Your Review</h3>
            <h1 className="card-title mb-4 ">
              You Matter, Your Reviews Matter !
            </h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your University"
                  value={university}
                  onChange={(e) => setUniversity(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  rows="3"
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <button style={{backgroundColor:"#FD5631"}} type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </section>
      <h1 className='d-flex justify-content-center'>Customers Reviews</h1>
  <div className='text-center pb-5 m-5'  style={{background: "linear-gradient(180deg, #FD5631 0%, #1F1B2D 100%)"}}>
 
    <Slider
      dots={true}
      infinite={true}
      speed={500}
      slidesToShow={1}
      slidesToScroll={1}
     
      className="testimonial-slider mb-5"
      appendDots={(dots) => (
        <ul style={{ textAlign: "center", margin: "10px 0" }}> {dots} </ul>
      )}
    >
     {testimonials.map((testimonial, index) => (
  <div key={index} className="testimonial-slide">
    <div className="row justify-content-center">
      <div className=" text-center">
        <p className="fw-bold lead mb-2 pt-5">
          <em className='h3'>{testimonial.name}</em>
        </p>
        <p className="fw-bold text-black mb-0 h5">{testimonial.university}</p>
        <p className="fw-light h4 pb-5">{"''"}{testimonial.message}{"''"}</p>
      </div>
    </div>
  </div>
))}

    </Slider>
  </div>

<div className='mt-5 pt-5'>
      <Footer/>
      </div>
    </div>
  )
}
