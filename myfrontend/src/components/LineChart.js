import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register the components you need
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart = ({ data }) => {
  return (
    <div className="chart-container">
      <h3>Line Chart</h3>
      <Line data={data} />
    </div>
  );
};

export default LineChart;
