import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/PrivacyPolicy.css'

export default function PrivacyPolicy() {
  return (
    <div className='privacy-body Roboto-slab'>
      <Navbar />
      <div className='container'>
        <div className="content">
          <h1 className='heading'>Privacy Policy</h1>
          <p className='heading-text'>Your privacy is important to us. This policy explains how we collect, use, and share your personal information.</p>

          <div className='terms'>
            <ul className='terms-list'>
              <li>
                <h3 >General Information</h3>
                <p >
                When you use Paper Vault, you agree to follow these terms and conditions. This includes obeying all the laws and rules that apply to you locally. These terms start as soon as you visit our platform for the first time. If you don't agree with all these terms, please stop using Paper Vault.
                </p>
                <p>
                The things you find on this platform are protected by copyright and trademark laws. If you don't follow these rules, we might have to block your account without warning and without giving your money back.
                </p>
              </li>
              <li>
                <h3>How we collect data</h3>
                <p>At Paper Vault, we respect your privacy and take the security of your data seriously. This overview explains how we gather and handle the information you provide during login and signup.
                When you sign up or log in, we collect essential details such as your email address and password. You willingly share this information to create an account for accessing our platform. Your email acts as your unique identifier, and your password secures your account.
                </p>
                <p>
                Remember, you willingly provide your email and password during signup and login. You're in control of the accuracy of the data you give, and we encourage using a strong password to enhance account security.
                We store your data securely using advanced encryption and industry-standard security practices. Your password is hashed and stored in a way that ensures even we can't access it.
                </p>
                <p>
                We're transparent about data usage. Your email and other information are only used for activities directly linked to your interaction with our platform. We never share your email for marketing without your permission.
                </p>
              </li>
              <li>
                <h3>Whom we Share your data with</h3>
                <p>
                The data collected by us automatically serves to enhance both our service and website. These enhancements encompass resolving issues and optimizing the presentation of our website's content for enhanced efficiency on your devices.
                </p>
                <p>
                In situations where disagreements arise, such as court or administrative disputes, your data may be employed as evidence, including by subcontractors like credit restriction service providers.
                </p>
                <p>
                We might share your information with appropriate law enforcement agencies, regulatory bodies, government entities, courts, or other parties if we believe it's necessary to comply with a law, regulation, exercise our rights, establish or defend legal claims, or safeguard your vital interests.
                </p>
                <p>
                Your personal details could be disclosed to a potential or actual purchaser, including their agents and advisors, in connection with a merger, acquisition, sale, or any similar transaction related to our business. However, such sharing will be contingent upon the buyer agreeing to employ the information solely for purposes outlined in this policy.
                </p>
              </li>
              <li>
                <h3>
                  Final Considerations
                </h3>
                <p>All the quoted policies may change at any moment. The users will be notified if any changes are made. We suggest full reading of the policies before you begin surfing the website.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
