import { useEffect, useState } from 'react';
import PieChart from './PieChart';

const Dashboard = () => {

  const [record, setRecord] = useState([])
  const [userCount, setUserCount] = useState(0);
  const [paperCount, setPaperCount] = useState(0);
  const [courseCount, setCourseCount] = useState(0);

  const getData = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(res => setRecord(res))
  }

  useEffect(() => {
    getData();
    fetch(`${process.env.REACT_APP_API_URL}/api/usersCount`)
    .then(response => response.json())
    .then(data => setUserCount(data.userCount))
    .catch(error => console.error(error));
  

      fetch(`${process.env.REACT_APP_API_URL}/api/papersCount`)
      .then(response => response.json())
      .then(data => setPaperCount(data.paperCount))
      .catch(error => console.error(error));

      fetch(`${process.env.REACT_APP_API_URL}/api/coursesCount`)
      .then(response => response.json())
      .then(data => setCourseCount(data.courseCount))
      .catch(error => console.error(error));

      fetch(`${process.env.REACT_APP_API_URL}/api/users`)
      .then(response => response.json())
      .then(data => setRecord(data))
      .catch(error => console.error('Error fetching user data:', error));
  }, [])

  return (
    <div className="col main pt-5 mt-3" style={{ backgroundColor: "#1F1B2D" }}>
    <h1 className='h1 text-white font-weight-bold'>Admin Dashboard</h1>
    <div className="row mb-3">
      <div className="col-xl-3 col-md-6 py-2">
        <div className="card bg-success text-white h-100">
          <div className="card-body bg-success" style={{ backgroundColor: "#57b960" }}>
            <div className="rotate">
              <i className="fa fa-user fa-4x"></i>
            </div>
            <h6 className="text-uppercase">Users</h6>
            <h1 className="display-4">{userCount}</h1>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-md-6 py-2">
        <div className="card text-white bg-danger h-100">
          <div className="card-body bg-danger">
            <div className="rotate">
              <i className="fas fa-book-reader fa-4x"></i>
            </div>
            <h6 className="text-uppercase">Papers</h6>
            <h1 className="display-4">{paperCount}</h1>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-md-6 py-2">
        <div className="card text-white bg-info h-100">
          <div className="card-body bg-info">
            <div className="rotate">
              <i className="fa fa-book fa-4x"></i>
            </div>
            <h6 className="text-uppercase">Courses</h6>
            <h1 className="display-4">{courseCount}</h1>
          </div>
        </div>
      </div>
    </div>

      <hr />

      <div className="row ">
        <div className="col-lg-7 col-md-6 col-sm-12">
          <h5 className="mt-3 mb-3 text-white font-weight-bold h1">
            Records of Registered Users
          </h5>
          <div className="table-responsive">
      <table className="table table-striped table-light">
        <thead className="thead-light">
          <tr>
            <th className='font-weight-bold h4' >No</th>
            <th  className='font-weight-bold h4'>Name</th>
            <th  className='font-weight-bold h4'>Email</th>
          </tr>
        </thead>
        <tbody className="tbody-light h5">
  {record.map((output, index) => (
    <tr key={index + 1}>
      <td>{index + 1}</td>
      <td>{output.name}</td>
      <td>{output.email}</td>
    </tr>
  ))}
</tbody>
      </table>
    </div>
        </div>
        <div className="col-lg-5 col-md-6 col-sm-12 col-sm-offset-5">
          <h4 className="title mt-3 mb-3 text-center text-white">Data in Chart</h4>
          <div className="mb-5 ml-5" style={{ height: "300px", width: "100%" }}><PieChart /></div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;
