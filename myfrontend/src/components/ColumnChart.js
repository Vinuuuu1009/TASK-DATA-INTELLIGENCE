import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register the necessary components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ColumnChart = ({ data }) => {
  return (
    <div className="chart-container">
      <h3>Column Chart</h3>
      <Bar data={data} options={{
        indexAxis: 'y', // Makes it a column chart
        scales: {
          x: {
            beginAtZero: true
          }
        }
      }} />
    </div>
  );
};

export default ColumnChart;
