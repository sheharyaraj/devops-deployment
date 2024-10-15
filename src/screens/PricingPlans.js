import React, { useState } from 'react';
import emailjs from 'emailjs-com'
import '../styles/PricingPlans.css';
import { FcCheckmark } from "react-icons/fc";
import { Link } from 'react-router-dom';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Swal from 'sweetalert2'; 
export default function PricingPlans() {

  const [email, setEmail] = useState('');
  const [faqState1, setFaqState1] = useState(false);
  const [faqState2, setFaqState2] = useState(false);
  const [faqState3, setFaqState3] = useState(false);

  function handleClick1() {
    setFaqState1(btnState1 => !btnState1);
  }
  function handleClick2() {
    setFaqState2(btnState1 => !btnState1);
  }
  function handleClick3() {
    setFaqState3(btnState1 => !btnState1);
  }

  let toggleClassCheck1 = faqState1 ? ' active' : null;
  let toggleClassCheck2 = faqState2 ? ' active' : null;
  let toggleClassCheck3 = faqState3 ? ' active' : null;

  const handleSubmit = async(event) => {
    console.log(email);
    event.preventDefault();
    // Send the form data to the server
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
    <div className='body1' style={{ backgroundColor: "#1F1B2D" }}>
      <Navbar />
      <div
            className="p-5 m-5 text-center text-white "
            style={{
              backgroundColor: "#FD5631",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <h1 className="h3  ">Subscribe Now!</h1>
            <h1 className="h1 font-weight-bold  ">
              Don't Let The Learning Stop.
            </h1>
          </div>
      <div>
        <div className='pricing-area'>
        
          <div className='container'>
            <div className='row'>
              <div className='col-md-4 col-sm-6 mt-5'>
                <div className='single-price cardWise'>
                  <div className='price-header'>
                    <h3 className='title'>1 Month</h3>
                  </div>
                  <div className='price-value'>
                    <div className='value'>
                      <span className='currency'>Rs</span>
                      <span className='amount'>500</span>
                      {/* <span className='month'>/month</span> */}
                    </div>
                  </div>
                  <div>
                    <ul className='deals'>
                      <div className='point'>
                        <li>
                          <span className='point-details'><FcCheckmark size='1.5rem' /></span>
                        </li>
                        <span className='point-details point-text'><p>Download PastPapers</p></span>
                      </div>
                      <div className='point'>
                        <li>
                          <span className='point-details'><FcCheckmark size='1.5rem' /></span>
                        </li>
                        <span className='point-details point-text'><p>Save resources</p></span>
                      </div>
                      <div className='point'>
                        <li>
                          <span className='point-details'><FcCheckmark size='1.5rem' /></span>
                        </li>
                        <span className='point-details point-text'><p>Seamless access to thousands of Quizzes,
                          Midterms, Finals, Assignments, and more</p></span>
                      </div>
                    </ul>
                  </div>
                  <div className='btn-div'>
                    <Link className='btn' to='/login'>get started</Link>
                  </div>
                </div>

              </div>
              <div className='col-md-4 col-sm-6 mt-5'>
                <div className='single-price cardWise'>
                  <div className='price-header'>
                    <h3 className='title'>6 Months</h3>
                  </div>
                  <div className='price-value'>
                    <div className='value'>
                      <span className='currency'>Rs</span>
                      <span className='amount'>2500</span>
                      {/* <span className='month'>/month</span> */}
                    </div>
                  </div>
                  <div>
                    <ul className='deals'>
                      <div className='point'>
                        <li>
                          <span className='point-details'><FcCheckmark size='1.5rem' /></span>

                        </li>
                        <span className='point-details point-text'><p>Download PastPapers</p></span>
                      </div>
                      <div className='point'>
                        <li>
                          <span className='point-details'><FcCheckmark size='1.5rem' /></span>

                        </li>
                        <span className='point-details point-text'><p>Save resources</p></span>
                      </div>
                      <div className='point'>
                        <li>
                          <span className='point-details'><FcCheckmark size='1.5rem' /></span>
                        </li>
                        <p className='point-details point-text'>seamless access to thousands of Quizzes,
                          Midterms, Finals, Assignments, and more</p>
                      </div>
                    </ul>
                    <Link className='btn' to='/login'>get started</Link>

                  </div>
                </div>
              </div>
              <div className='col-md-4 col-sm-6 mt-5'>
                <div className='single-price cardWise'>
                  <div className='price-header'>
                    <h3 className='title'>12 Months</h3>
                  </div>
                  <div className='price-value'>
                    <div className='value'>
                      <span className='currency'>Rs</span>
                      <span className='amount'>5000</span>
                      {/* <span className='month'>/month</span> */}
                    </div>
                  </div>
                  <div>
                    <ul className='deals'>
                      <div className='point'>
                        <li>
                          <span className='point-details'><FcCheckmark size='1.5rem' /></span>
                        </li>
                        <span className='point-details point-text'><p>Download PastPapers</p></span>
                      </div>
                      <div className='point'>
                        <li>
                          <span className='point-details'><FcCheckmark size='1.5rem' /></span>
                        </li>
                        <span className='point-details point-text'><p>Save resources</p></span>
                      </div>
                      <div className='point'>
                        <li>
                          <span className='point-details'><FcCheckmark size='1.5rem' /></span>
                        </li>
                        <span className='point-details point-text'><p>Seamless access to thousands of Quizzes,
                          Midterms, Finals, Assignments, and more</p></span>
                      </div>
                    </ul>
                    <Link className='btn' to='/login'>get started</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className='horizontal-line'></hr>
        </div>
        <div className='faq-section'>
          <div className='container'>
            <section>
              <h2 className='title'>FAQs</h2>
              <div className={`faq ${toggleClassCheck1}`} onClick={handleClick1}>
                <div className='question'>
                  <h3>Is there a free trial?</h3>

                  <svg width='15' height='10' viewBox='0 0 42 25'>
                    <path d='M3 3L21 21L39 3' stroke='black' strokeWidth='5' strokeLinecap='round' />
                  </svg>

                </div>
                <div className='answer'>
                  <p>Unfortunately not right now but we will be working on it shortly.</p>
                </div>
              </div>

              <div className={`faq ${toggleClassCheck2}`} onClick={handleClick2}>
                <div className='question'>
                  <h3>Can I subscribe through any third-party?</h3>

                  <svg width='15' height='10' viewBox='0 0 42 25'>
                    <path d='M3 3L21 21L39 3' stroke='black' strokeWidth='5' strokeLinecap='round' />
                  </svg>

                </div>
                <div className='answer'>
                  <p>No, beware of websites or individuals claiming such things as you can only subscribe through our website.</p>
                </div>
              </div>

              <div className={`faq ${toggleClassCheck3}`} onClick={handleClick3}>
                <div className='question'>
                  <h3>Can I get a refund if i want to later?</h3>

                  <svg width='15' height='10' viewBox='0 0 42 25'>
                    <path d='M3 3L21 21L39 3' stroke='black' strokeWidth='5' strokeLinecap='round' />
                  </svg>

                </div>
                <div className='answer'>
                  <p>Yes, we offer refund for as long as a week after you subscribe, so go do it now!!</p>
                </div>
              </div>
             
   
            </section>
          </div>
        </div>

        <div className='img-section'>
          <div className='section1'>
            <h3 className='text'>We Believe In Learning</h3>
            <div className='container'>
              <form onSubmit={handleSubmit}>
                <h1>Join Our Newsletter</h1>
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
          </div>
        </div>
      </div>
      <script src="../ppScript.js"></script>
      <Footer />
    </div>
  )
}
