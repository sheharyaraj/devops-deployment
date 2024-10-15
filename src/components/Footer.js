import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import Xlogo from '../images/X.png'
import facebooklogo from '../images/facebook.png'
import '../styles/footer.css'

export default function Footer() {
  return (
    <div style={{ backgroundColor: '#1F1B2D', color: 'white' }}>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my- border-top container">
        <div className="col-md-4 font-italic font-weight-bold">
          <Link className="navbar-brand" style={{ color: "#FFFFFF" }} to="/home">
            <img src={logo} alt="" width="100px" />
          </Link>
        </div>
        <div className="col-md-4">
          <h6 className='font-italic h5 text-center Roboto-slab'>
            Unlock Your Success with PaperVault!
          </h6>
          <div className='links pb-2 font-italic' >
            <Link to="/privacyPolicy">
              <span className='pages mr-3 ml-3' style={{color:'white', borderBottom:'1px solid'}}>privacy policy  </span>
            </Link>
            <Link to="/termsAndConditions">
              <span className='pages mr-3 ml-3 ' style={{color:'white', borderBottom:'1px solid'}}>terms and conditions</span>
            </Link>
          </div>
          <span className="text-white d-block text-center Roboto-slab">© 2023 Paper Vault, Inc <br/>Rights reserved by <a href='https://www.fastdev.com/' style={{color:'white'}}>FastDev</a></span>
        </div>

        <ul className="nav col-md-4 justify-content-center list-unstyled d-flex">
          <li className="ms-3 ">
            <a className="text-white" href="https://twitter.com/">
              {/* <svg className="bi" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                <path d="M283.94,167.31l386.39,516.64L281.5,1104h87.51l340.42-367.76L984.48,1104h297.8L874.15,558.3l361.92-390.99
		h-87.51l-313.51,338.7l-253.31-338.7H283.94z M412.63,231.77h136.81l604.13,807.76h-136.81L412.63,231.77z" />
              </svg> */}
              <img src={Xlogo} className="bi footer-xlogo" width="30" height="30" fill="currentColor" viewBox="0 0 16 16"></img>
            </a>
          </li>
          <li className="ms-3 ">
            <a className="text-white " href="https://www.facebook.com/yourfacebookpage">
              <svg className="bi footer-fblogo" width="30" height="30" fill="currentColor" viewBox="0 0 16 16" >
                <path d="M5.01 14V8.66h-1.5V6.33h1.5V5.14a3.73 3.73 0 0 1 3.79-4 20.83 20.83 0 0 1 2.33.12V3h-1.41c-1.26 0-1.5.59-1.5 1.46V6.32h2.8l-.37 2.33h-2.43v5.35H5.01z" />
              </svg>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
