import img from "../images/image.jpg";
import Navbar from "../components/Navbar";
import { Row, Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Swal from 'sweetalert2'; 
import icon1 from "../images/icon1.png";
import icon2 from "../images/icon2.png";
import icon3 from "../images/icon3.png";
import icon4 from "../images/icon4.png";
import icon5 from "../images/icon5.png";
import icon6 from "../images/icon6.png";
import icon7 from "../images/icon7.png";
import side from "../images/side.png";
import side2 from "../images/side2.png";
import {React,useState} from "react";
import '../styles/Home.css'

import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import emailjs from 'emailjs-com'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Home() {

  const [email, setEmail] = useState('');
  

  const handleSubmit = async(event) => {
    console.log(email);
    event.preventDefault();
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/uploademail`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email})
    }) 
    const json = await response.json();
    console.log(json);
    if(json.success){
        
      Swal.fire({
        icon: 'success',
        title: 'Welcome :)',
        text: 'Subscription Successful!',
        iconColor: '#FD5631', // Custom icon color
        confirmButtonColor: '#FD5631', // Custom confirm button color
        background: '#1F1B2D', 
        color:"white",
      });
        const  {REACT_APP_NEWSLETTER_TEMPLATE_ID,REACT_APP_NEWSLETTER_SERVICE_ID,REACT_APP_NEWSLETTER_PUBLIC_KEY} = process.env
        emailjs.sendForm(REACT_APP_NEWSLETTER_SERVICE_ID,
        REACT_APP_NEWSLETTER_TEMPLATE_ID,event.target,
        REACT_APP_NEWSLETTER_PUBLIC_KEY).then(res=>{
          console.log(res)
        }).catch(err=>console.log(err));
}
else{
  Swal.fire({
    title: "Subscriber",
    text: "You've already subscribed to the newsletter.",
    type: "info",
    icon: 'info',
    confirmButtonText: "Okay",
    iconColor: '#FD5631', // Custom icon color
    confirmButtonColor: '#FD5631', // Custom confirm button color
    background: '#1F1B2D', 
    color:"white",
  });
};
}

  return (
    <div style={{ backgroundColor: "#1F1B2D", color: "white", overflowY:"hidden",overflowX:"hidden" }}>
      <Navbar />
<div
    className="d-flex align-items-start justify-content-center start-lg-10"

  style={{
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    width: "100vw",
    height: "100vh",
    flexDirection:"column"
  }}
>
  <h1
  className="ml-5 "
    style={{
      color: "white",
      fontFamily: "Roboto-slab",
      fontSize: "3rem",
    }}
  >
    Papers Vault
  </h1>
  <h4
   className="ml-5 "
    style={{
      color: "white",
      fontFamily: "Roboto-slab",
    }}
  >
    The best ever on the internet
  </h4>
  <Link
    to="/universities"
    style={{
      backgroundColor: "#FD5631",
      color: "#FFFFFF",
      textDecoration: "none",
    }}
    className="btn btn-lg w-25 w-lg-75  ml-5 explore-box"
  >
    Explore
  </Link>
</div>



      <div>
        <Container>
          <Row
            className="h-100 justify-content-center align-items-center"
            style={{ paddingTop: "20px" }}
          >
            <h2
              style={{
                color: "#white",
                fontFamily: "Roboto-slab",
                fontWeight: "bold",
              }}
            >
              Why Choose us?
            </h2>
          </Row>
          <Row
            className="h-100 justify-content-center align-items-center"
            style={{ paddingTop: "20px" }}
          >
            <Col xs={12} md={4} className="text-center">
              <img
                src={icon1}
                alt=""
                style={{ width: "80px", height: "80px" }}
              />
              <h4
                style={{
                  color: "white",
                  fontFamily: "Roboto-slab",
                  fontWeight: "bold",
                }}
              >
                Value-Driven
              </h4>
              <div className="container">
                <p
                  style={{
                    color: "white",
                    fontFamily: "Roboto-slab",
                    fontSize: "17px",
                    paddingTop: "5px",
                  }}
                >
                  We believe that every student deserves access to high-quality
                  past papers that can help them ace their exams and achieve
                  their academic goals. That’s why we offer a value-driven
                  service that provides you with the best past papers at an
                  affordable price.
                </p>
              </div>
            </Col>
            <Col xs={12} md={4} className="text-center">
              <img
                src={icon2}
                alt=""
                style={{ width: "80px", height: "80px" }}
              />
              <h4
                style={{
                  color: "white",
                  fontFamily: "Roboto-slab",
                  fontWeight: "bold",
                }}
              >
                Personalized
              </h4>
              <div className="container">
                <p
                  style={{
                    color: "white",
                    fontFamily: "Roboto-slab",
                    fontSize: "17px",
                    paddingTop: "5px",
                  }}
                >
                  No two students are alike, and neither are their learning
                  needs. That’s why we tailor our service to your preferences
                  and interests. You can choose from a variety of subjects,
                  levels, formats, and difficulty levels to find the past papers
                  that suit you best.
                </p>
              </div>
            </Col>
            <Col xs={12} md={4} className="text-center">
              <img
                src={icon3}
                alt=""
                style={{ width: "80px", height: "80px" }}
              />
              <h4
                style={{
                  color: "white",
                  fontFamily: "Roboto-slab",
                  fontWeight: "bold",
                }}
              >
                Best Resources
              </h4>
              <div className="container">
                <p
                  style={{
                    color: "white",
                    fontFamily: "Roboto-slab",
                    fontSize: "17px",
                    paddingTop: "5px",
                  }}
                >
                  We don’t just give you past papers. We give you the best
                  resources to help you prepare for your exams. Our past papers
                  are carefully selected, verified, and updated by our team of
                  experts. They also come with detailed solutions, explanations,
                  and tips as well.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div
        className=""
        style={{
          position: "relative",
          textAlign: "center",
          backgroundColor: "#FD5631",
        }}
      >
        <Container>
          <Row
            className="h-100 justify-content-start align-items-center "
            style={{ paddingTop: "20px" }}
          >
            <Col
              xs={12}
              md={6}
              className="ms-md-5"
              style={{ paddingTop: "20px", paddingBottom: "20px" }}
            >
              <h3
                style={{
                  color: "white",
                  fontFamily: "Roboto-slab",
                  fontWeight: "bold",
                  paddingTop: "10px",
                }}
              >
                Recommended by millions of customers across the globe.
              </h3>
            </Col>
            <Col
              xs={12}
              md={6}
              className="align-self-end text-center text-md-right"
            >
              <img
                src={icon4}
                alt=""
                style={{ width: "60px", height: "60px" }}
              />
            </Col>
          </Row>
        </Container>
      </div>

      <div style={{ paddingBottom: "40px" }}>
        <Container>
          <Row
            className="h-100 justify-content-center align-items-center"
            style={{ paddingTop: "40px" }}
          >
            <Col xs={12} md={5} className="text-center">
              <img src={side} alt="" className="img-fluid d-none d-md-block" />
            </Col>

            <Col xs={12} md={5} className="text-center">
              <h4 className="h2"
                style={{
                  color: "white",
                  fontFamily: "Roboto-slab",
                  fontWeight: "bold",
                  paddingTop: "10px",
                }}
              >
                Read Documents on the go.
              </h4>
              <p
              className="h4"
                style={{
                  color: "white",
                  fontFamily: "Roboto-slab",
                  fontSize: "17px",
                  paddingTop: "5px",
                }}
              >
                We have the best features. With our new document viewer, you can
                always read documents on the go, whether you are working,
                studying, or traveling. You can view it on our website. Try it
                today and see the difference for yourself!
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      <div
        style={{
          position: "relative",
          textAlign: "left",
          backgroundColor: "#FD5631",
          paddingTop: "20px",
          paddingBottom: "20px",
        }}
      >
        <Container>
          <Row
            className="h-100 justify-content-center align-items-center"
            style={{ paddingTop: "20px" }}
          >
           <Col xs={12} md={5} className="text-center">
              <h4
              className="h2"
                style={{
                  color: "white",
                  fontFamily: "Roboto-slab",
                  fontWeight: "bold",
                  paddingTop: "10px",
                }}
              >
                Best User Interface
              </h4>
              <p
              className="h4"
                style={{
                  color: "white",
                  fontFamily: "Roboto-slab",
                  fontSize: "17px",
                  paddingTop: "5px",
                }}
              >
                Our website adapts to different screen sizes, so
                users can access your past papers on their laptops, tablets, or
                smartphones.
              </p>
              <p
                 className="h4"
                style={{
                  color: "white",
                  fontFamily: "Roboto-slab",
                  fontSize: "17px",
                  paddingTop: "5px",
                }}
              >
                Our website allows users to search for past papers by subject,
                level, year, or keyword. Users can also filter the results by
                difficulty, topic, or type of question. This helps users find
                the most relevant past papers for their needs.
              </p>
            </Col>
            <Col xs={12} md={5} className="text-center text-md-right">
              <img
                src={side2}
                alt=""
                style={{ width: "auto", height: "50%" }}
                className="img-fluid d-none d-md-block"
              />
            </Col>
           
          </Row>
        </Container>
      </div>



      <div style={{ paddingTop: "20px", paddingBottom: "20px" }}>
        <Container>
          <Row
            className="h-100 justify-content-center align-items-center"
            style={{ paddingTop: "20px" }}
          >
            <h2
              style={{
                color: "white",
                fontFamily: "Roboto-slab",
                fontWeight: "bold",
              }}
            >
              Some more Benefits
            </h2>
          </Row>
          <Row
            className="h-100 justify-content-center align-items-center"
            style={{ paddingTop: "20px" }}
          >
            <Col xs={12} md={4} className="text-center">
              <img
                src={icon5}
                alt=""
                style={{ width: "80px", height: "80px" }}
              />
              <h4
                style={{
                  color: "white",
                  fontFamily: "Roboto-slab",
                  fontWeight: "bold",
                }}
              >
                Academic Journals
              </h4>
            </Col>
            <Col xs={12} md={4} className="text-center">
              <img
                src={icon6}
                alt=""
                style={{ width: "80px", height: "80px" }}
              />
              <h4
                style={{
                  color: "white",
                  fontFamily: "Roboto-slab",
                  fontWeight: "bold",
                }}
              >
                Premium Papers
              </h4>
            </Col>
            <Col xs={12} md={4} className="text-center">
              <img
                src={icon7}
                alt=""
                style={{ width: "80px", height: "80px" }}
              />
              <h4
                style={{
                  color: "white",
                  fontFamily: "Roboto-slab",
                  fontWeight: "bold",
                }}
              >
                Updated Daily
              </h4>
            </Col>
          </Row>
        </Container>
      </div>

      <hr />

      <div
        style={{ textAlign: "left", paddingTop: "20px", paddingBottom: "20px" }}
      >
        <Container>
          <Row className="align-items-start">
            <h3
              style={{
                color: "white",
                fontFamily: "Roboto-slab",
                fontWeight: "bold",
              }}
            >
              Never miss out on any update!
            </h3>
          </Row>
          <Row className="align-items-start">
            <h5
              style={{
                color: "white",
                fontFamily: "Roboto-slab",
                fontWeight: "bold",
              }}
            >
              Subscribe to our newsletter
            </h5>
          </Row>
          <Row
            className="justify-content-center"
            style={{ paddingTop: "20px", paddingBottom: "20px" }}
          >
            <div className='container'>
              <form onSubmit={handleSubmit}>
                <div className='email-box'>
                  <i><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon></i>
                  <input className='tbox' type='email' name='user_email'
              placeholder='name@example.com'
              value={email}
              onChange={(event) => setEmail(event.target.value)} />
                  <button className='btn1' >Subscribe</button>
                </div>
              </form>
            </div>
        

          </Row>
        </Container>
      </div>

      <Footer />
    </div>
  );
}
