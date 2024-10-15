import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { ArcElement } from "chart.js";
import Chart from "chart.js/auto";
 

 

const PieChart = () => {
  const [userCount, setUserCount] = useState(0);
  const [paperCount, setPaperCount] = useState(0);
  const [courseCount, setCourseCount] = useState(0);

  useEffect(() => {
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
  }, []);

  const data = {
    labels: ['Users', 'Courses', 'Papers'],
    datasets: [
      {
        data: [userCount, courseCount, paperCount],
        backgroundColor: ['pink', '#17a2b8', '#ffc107'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div style={{ width: '300px', height: '300px' }}>
      <Pie data={data} />
    </div>
  );
};

export default PieChart;