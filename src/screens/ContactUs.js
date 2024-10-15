import React, { useState } from 'react';
import '../styles/ContactUs.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import contactLogo from '../images/contactLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faYoutube, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import Swal from 'sweetalert2';

export default function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const apiUrl = process.env.REACT_APP_API_URL;
      const response = await fetch(`${apiUrl}/api/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, phone, message }),
      });

      if (response.ok) {
        console.log('Email sent successfully');
        Swal.fire({
          icon: 'success',
          title: 'Email Sent Successfully!',
          iconColor: '#FD5631', // Custom icon color
          confirmButtonColor: '#FD5631', // Custom confirm button color
          background: '#1F1B2D', 
          color:"white",
        });
      } else {
        console.log('Email sending failed');
        Swal.fire({
          title: "Oops!",
          text: "Email Could Not Be Sent.",
          type: "warning",
          confirmButtonText: "Try Again",
          iconColor: '#FD5631', // Custom icon color
          confirmButtonColor: '#FD5631', // Custom confirm button color
          background: '#1F1B2D', 
          color:"white",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Oops!",
        text: "Error Sending Email",
        type: "warning",
        confirmButtonText: "Try Again",
        iconColor: '#FD5631', // Custom icon color
        confirmButtonColor: '#FD5631', // Custom confirm button color
        background: '#1F1B2D', 
        color:"white",
      });
    }
  };

  return (
    <div>
      <Navbar />
      <div className='body p-5'>
        <div className='item'>
          <div className='contact'>
            <div className='first-text'>Let's Get in Touch </div>
            <div className='image-container'>
              <img src={contactLogo} alt="" width="600px" className='image'></img>
            </div>
            <div className='social-links'>
              <span className='second-text'>Connect With Us</span>
              <ul className='social-media'>
              <ul className='social-media'>
              <li>
                <a className='fb-logo'href='https://www.facebook.com/your-facebook-page'>
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
              </li>
              <li>
                <a className='twitter-logo'href='https://twitter.com/your-twitter-page'>
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li>
                <a className='yt-logo'href='https://www.youtube.com/your-youtube-channel'>
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </li>
              <li>
                <a className='linkedin-logo' href='https://www.linkedin.com/company/your-linkedin-page'>
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </li>
            </ul>
              </ul>
            </div>
          </div>
          <div className='submit-form formm'>
            <h4 className='third-text text'>Contact Us</h4>
            <form onSubmit={handleSubmit}>
              <div className='input-box'>
                <input type='text' className='input' required value={name} onChange={(e) => setName(e.target.value)} />
                <label htmlFor='name'>Name</label>
              </div>

              <div className='input-box'>
                <input type='email' className='input' required value={email} onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor='email'>Email</label>
              </div>

              <div className='input-box'>
                <input type='tel' className='input' required value={phone} onChange={(e) => setPhone(e.target.value)} />
                <label htmlFor='phone'>Phone</label>
              </div>

              <div className='input-box'>
                <textarea
                  className='input'
                  required
                  id='message'
                  cols='30'
                  rows='10'
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <label htmlFor='message'>Message</label>
              </div>
              <input className='button' type='submit' value='Submit' />
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
