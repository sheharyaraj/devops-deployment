import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

function HeaderAndFooterExample() {
  return (
  <Container>
      <Card className="text-center">
      <Card.Header></Card.Header>
      <Card.Body>
        <Card.Title>File Upload</Card.Title>
        <Card.Text>
          <div>Format Supported: .epub .pdf .docx .xls</div>
        </Card.Text>
        <Button variant="primary">Upload</Button>
      </Card.Body>
      <Card.Footer className="text-muted">Last File Uploaded: 2 days ago</Card.Footer>
    </Card>
    <hr />
    <h2 style={{fontFamily:"Times New Roman", textAlign:"left"}}> Previously Uploaded Files</h2>
    <hr />
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>File Name</th>
          <th>Upload Date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Physics Past Papers</td>
          <td>1st January, 2023</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Cal-I Past Papers</td>
          <td>20th June, 2023</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Islamiyat Past Papers</td>
          <td>21st June, 2023</td>
        </tr>
      </tbody>
    </Table>
  </Container>
  );
}

export default HeaderAndFooterExample;