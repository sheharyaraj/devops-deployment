import React from 'react'
import Table from 'react-bootstrap/Table';


export default function Newsletter() {
  return (
    <>
    <div>
        <h1 style={{fontFamily:"Roboto-slab"}}>NewsLetter Signups</h1>
    </div>
    <hr />
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th className='w-25'>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Ahmad</td>
          <td>Ahmad@gmail.com</td>
        </tr>
        <tr>
          <td>2</td>
          <td>ALi</td>
          <td>ALi@gmail.com</td>
        </tr>
     
        <tr>
          <td>3</td>
          <td>Ayla</td>
          <td>Ayla@gmail.com</td>
        </tr>
     
        <tr>
          <td>4</td>
          <td>Adnan</td>
          <td>Adnan@gmail.com</td>
        </tr>
     
      
      </tbody>
    </Table>
    </>
  )
}
