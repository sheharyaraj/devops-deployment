import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Dashboard from '../admin panel/Dashboard';
import FileUpload from '../admin panel/FileUpload';
import { Link } from "react-router-dom";
import React from 'react';
import FileUpdate from '../admin panel/FileUpdate';
import FileDelete from '../admin panel/FileDelete';
import UserUpdate from '../admin panel/UserUpdate';
import UserDelete from '../admin panel/UserDelete';

function LeftTabsExample() {
  return (
    <div className='font-weight-bold' style={{overflowX: "hidden", fontFamily:"Roboto-slab" }} >
    <Tab.Container id="left-tabs-example" defaultActiveKey="first" className="container-fluid" >
      <Row>
        <Col sm={3} md={2} style={{ backgroundColor: "#FD5631", minHeight: "100vh", }}>
          <Nav variant="pills" className="flex-column" style={{ paddingTop: "30px", paddingBottom: "100px" }}>
            <h5 className='text-white text-center font-weight-bold h2'>PapersVault</h5>
            <Nav.Item style={{ paddingTop: "50px"}}>
              <Nav.Link eventKey="first" className='text-white fs-6  d-flex align-items-center font-weight-bold h6' style={{ backgroundColor: "#FD5631" }}>
                <i className="fas fa-user font-weight-bold mr-3 h6"></i>
                <span className=''>Overview</span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link eventKey="third" className='text-white fs-6 d-flex align-items-center font-weight-bold h6' style={{ backgroundColor: "#FD5631" }}>
                <i className="fas fa-file-export font-weight-bold mr-3 h6"></i>
                <span>File Upload</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="fifth" className='text-white fs-6 d-flex align-items-center font-weight-bold h6' style={{ backgroundColor: "#FD5631" }}>
                <i className="fas fa-pen font-weight-bold mr-3 h6"></i>
                <span>File Update</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="sixth" className='text-white fs-6 d-flex align-items-center font-weight-bold h6' style={{ backgroundColor: "#FD5631" }}>
                <i className="fas fa-trash font-weight-bold mr-3 h6"></i>
                <span>File Delete</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="seventh" className='text-white fs-6 d-flex align-items-center font-weight-bold h6' style={{ backgroundColor: "#FD5631" }}>
                <i className="fas fa-pen font-weight-bold mr-3 h6"></i>
                <span>User Update</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="eighth" className='text-white fs-6 d-flex align-items-center font-weight-bold h6' style={{ backgroundColor: "#FD5631" }}>
                <i className="fas fa-trash font-weight-bold mr-3 h6"></i>
                <span>User Delete</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="forth" className='text-white fs-6 d-flex align-items-center font-weight-bold h6' style={{ backgroundColor: "#FD5631" }}>
                <i className="fas fa-sign-out-alt font-weight-bold mr-3 h6"></i>
                <Link to='/login' style={{textDecoration:"None", color:"white"}}>Sign out</Link> 
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9} md={10} style={{ backgroundColor: "#1F1B2D", minHeight: "100vh" }}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <Dashboard />
            </Tab.Pane>
            <Tab.Pane eventKey="third">
              <FileUpload/>
            </Tab.Pane>
            <Tab.Pane eventKey="fifth">
              <FileUpdate/>
            </Tab.Pane>
            <Tab.Pane eventKey="sixth">
              <FileDelete/>
            </Tab.Pane>
            <Tab.Pane eventKey="seventh">
              <UserUpdate/>
            </Tab.Pane>
            <Tab.Pane eventKey="eighth">
              <UserDelete/>
            </Tab.Pane>
            
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
    </div>
  );
}

export default LeftTabsExample;
