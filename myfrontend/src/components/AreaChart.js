import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register the components you need
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const AreaChart = ({ data }) => {
  return (
    <div className="chart-container">
      <h3>Area Chart</h3>
      <Line data={data} options={{ fill: true }} />
    </div>
  );
};

export default AreaChart;
