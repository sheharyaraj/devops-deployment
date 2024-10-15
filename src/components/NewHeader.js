import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBContainer,
  MDBIcon,
  MDBCollapse,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function App() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <div style={{paddingBottom:"100px"}}>
            <header>
     

     <div
       className='p-5 text-center bg-image'
       style={{ backgroundImage: "url('https://mdbootstrap.com/img/new/slides/041.webp')", height: '400px' }}
     >
       <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
         <div className='d-flex justify-content-center align-items-center h-100'>
           <div className='text-white'>
             <h1 className='mb-3'>Heading</h1>
             <h4 className='mb-3'>Subheading</h4>
             <MDBBtn tag="a" outline size="lg">
               Call to action
             </MDBBtn>
           </div>
         </div>
       </div>
     </div>
   </header>
    </div>
  );
}