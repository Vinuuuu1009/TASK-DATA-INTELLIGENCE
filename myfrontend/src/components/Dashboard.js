import React, { useEffect, useState } from 'react';
import LineChart from './LineChart';
import BarChart from './BarChart';
import PieChart from './PieChart';
import ScatterPlot from './ScatterPlot';
import AreaChart from './AreaChart';  // Importing the AreaChart component
import ColumnChart from './ColumnChart';  // Importing the ColumnChart component

import './Dashboard.css';

const Dashboard = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/dashboard/api/chart-data/');
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="dashboard">
      <LineChart data={data.line} />
      <BarChart data={data.bar} />
      <PieChart data={data.pie} />
      <ScatterPlot data={data.scatter} />
      <AreaChart data={data.area} />
      <ColumnChart data={data.column} />  {/* Adding the ColumnChart to the dashboard */}
    </div>
  );
};

export default Dashboard;
