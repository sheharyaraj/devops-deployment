import Table from 'react-bootstrap/Table';

function DarkExample() {
  return (
   <>
   <div>
    <h1 style={{fontFamily:"Roboto-slab", textAlign:"center"}}>Sales Data</h1>
   </div>
   <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Package Type</th>
          <th>Date of Purchase</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>Premium</td>
          <td>4th June,2023</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>Premium</td>
          <td>5th June,2023</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>Premium</td>
          <td>1st June, 2023</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>Basic</td>
          <td>6th June,2023</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>Premium</td>
          <td>7th June,2023</td>
        </tr>
        <tr>
          <td>6</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>Premium</td>
          <td>8th June,2023</td>
        </tr>
        <tr>
          <td>7</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>Basic</td>
          <td>9th June,2023</td>
        </tr>
        <tr>
          <td>8</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>Premium</td>
          <td>10th June,2023</td>
        </tr>
       
      </tbody>
    </Table>
   </>
  );
}

export default DarkExample;