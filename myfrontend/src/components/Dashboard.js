// src/components/Dashboard.js
import React from 'react';
import LineChart from './LineChart';
import BarChart from './BarChart';
import PieChart from './PieChart';
import ScatterPlot from './ScatterPlot'; 
import AreaChart from './AreaChart';
import ColumnChart from './ColumnChart';

import './Dashboard.css';

const Dashboard = () => {
  // Hardcoded data for each chart
  const lineData = {
    labels: ['January', 'February', 'March', 'April'],
    datasets: [
      {
        label: 'Sales',
        data: [10, 20, 30, 40],
        fill: false,
        borderColor: 'rgba(0, 128, 128, 1)',
        tension: 0.1,
      },
    ],
  };

  const barData = {
    labels: ['January', 'February', 'March', 'April'],
    datasets: [
      {
        label: 'Revenue',
        data: [15, 25, 35, 45],
        backgroundColor: 'rgba(0, 128, 128, 0.5)',
        borderColor: 'rgba(0, 128, 128, 1)',
        borderWidth: 1,
      },
    ],
  };

  const pieData = {
    labels: ['Red', 'Blue', 'Yellow', 'Green'],
    datasets: [
      {
        label: 'Votes',
        data: [12, 19, 3, 5],
        backgroundColor: [
          'rgba(139, 0, 0, 0.5)',
          'rgba(0, 0, 139, 0.5)',
          'rgba(139, 139, 0, 0.5)',
          'rgba(0, 139, 0, 0.5)',
        ],
        borderColor: [
          'rgba(139, 0, 0, 1)',
          'rgba(0, 0, 139, 1)',
          'rgba(139, 139, 0, 1)',
          'rgba(0, 139, 0, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const scatterData = {
    datasets: [
      {
        label: 'My Scatter Dataset',
        data: [
          { x: 10, y: 20 },
          { x: 15, y: 25 },
          { x: 30, y: 40 },
        ],
        backgroundColor: 'rgba(0, 128, 128, 0.5)',
        borderColor: 'rgba(0, 128, 128, 1)',
        borderWidth: 1,
      },
    ],
  };

  const columnData = {
    labels: ['Category 1', 'Category 2', 'Category 3', 'Category 4'],
    datasets: [
      {
        label: 'Column Dataset',
        data: [30, 50, 70, 90],
        backgroundColor: 'rgba(0, 0, 139, 0.7)',
        borderColor: 'rgba(0, 0, 139, 1)',
        borderWidth: 1,
      },
    ],
  };

  const areaData = {
    labels: ['January', 'February', 'March', 'April'],
    datasets: [
      {
        label: 'Growth',
        data: [20, 30, 50, 70],
        backgroundColor: 'rgba(102, 0, 153, 0.4)',
        borderColor: 'rgba(102, 0, 153, 1)',
        borderWidth: 2,
        fill: true,
      },
    ],
  };

  return (
    <div className="dashboard">
      <LineChart data={lineData} />
      <BarChart data={barData} />
      <PieChart data={pieData} />
      <ScatterPlot data={scatterData} />
      <AreaChart data={areaData} />
      <ColumnChart data={columnData} />
    </div>
  );
};

export default Dashboard;
