// src/components/ScatterPlot.js
import React from 'react';
import { Scatter } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend } from 'chart.js';

// Register the components needed
ChartJS.register(CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

const ScatterPlot = ({ data }) => {
  return (
    <div className="chart-container">
      <h3>Scatter Plot</h3>
      <Scatter data={data} />
    </div>
  );
};
export default ScatterPlot;

