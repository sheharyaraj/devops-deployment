import React from 'react'
import '../styles/Terms.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Terms() {
  return (
    <div className='terms-body Roboto-slab'>
      <Navbar />
      <div className='container'>
        <div className="content">
          <h1 className='container heading'>Terms And Conditions</h1>
          <p className='container heading-text pl-5 pr-5'>By using Paper Vault you agree to be bound by these terms of use, all applicable laws and regulations and agree that you are responsible for compliance with applicable local laws. Please carefully read and understand the following terms and conditions before using our website to access past papers.</p>

          <div className='container terms pl-5 pr-5 '>
            <ul className='container terms-list'>
              <li>
                <h3 className='pt-3 pb-3'>Usage Limitations:</h3>
                <p >
                The past papers available on this website are provided solely for educational and reference purposes.
                </p>
                <p>
                You are allowed to access and view the past papers, but you may not reproduce, distribute, modify, or use them for any purpose other than personal educational use.
                </p>
                <p>
                You may not use the past papers for any commercial purposes or gain any financial benefit from their use.
                </p>
              </li>
              <li>
                <h3 className='pt-3 pb-3'>Copyright and Ownership:</h3>
                <p>The past papers available on this website are protected by copyright law. The copyright for each past paper belongs to its respective owner or institution.You may not claim ownership or authorship of any past paper from this website.
                </p >
              </li>
              <li>
                <h3 className='pt-3 pb-3'>Unauthorized Use:</h3>
                <p>
                You may not copy, share, republish, or upload the past papers to any other website, platform, or medium without proper authorization.
                </p>
                <p>
                Any unauthorized use of the past papers beyond the scope of these terms and conditions may result in legal action.
                </p>
              </li>
              <li>
                <h3 className='pt-3 pb-3'>
                  Disclaimer:
                </h3>
                <p> We provide the past papers on an "as-is" basis. While we strive to ensure accuracy and quality, we do not guarantee the completeness, accuracy, or reliability of the past papers.</p>
                <p>We are not liable for any loss, damage, or inconvenience arising from the use of the past papers.</p>
              </li>
              <li>
                <h3 className='pt-3 pb-3'>Modification of Terms:</h3>
                <p>These terms and conditions may be modified or updated at any time without prior notice. Your continued use of the website signifies your acceptance of any changes.</p>
              </li>
              <li>
                <h3 className='pt-3 pb-3'>Termination:</h3>
                <p>We reserve the right to terminate your access to the past papers and this website if we determine that you have violated these terms and conditions.</p>
              </li>
            </ul>
            <p className='container bottom-text'>By accessing the past papers on this website, you acknowledge that you have read, understood, and agree to be bound by these terms and conditions. If you do not agree with any part of these terms, please refrain from using this website for accessing past papers.</p>

            <p className=' container bottom-text'>For any questions or concerns regarding these terms and conditions, please contact us at any of our socials.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
