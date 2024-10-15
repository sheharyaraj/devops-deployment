import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Button from 'react-bootstrap/Button';
import Dashboard from '../components/Dashboard'
import Sales from '../components/Sales'
import Fileupload from '../components/Fileupload'
import Newsletter from '../components/Newsletter';

function LeftTabsExample() {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first">Dashboard</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">NewsLetter</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third">Sales</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="forth">FIle Upload</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
          
         <Dashboard/>
     
            </Tab.Pane>
            <Tab.Pane eventKey="second">
            <Newsletter/>
            </Tab.Pane>
            <Tab.Pane eventKey="third">
            <Sales/>
            </Tab.Pane>
            <Tab.Pane eventKey="forth">
           <Fileupload/>
            </Tab.Pane>

          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default LeftTabsExample;
