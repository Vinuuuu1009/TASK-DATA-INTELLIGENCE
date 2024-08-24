import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register the components you need
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ data }) => {
  return (
    <div className="chart-container">
      <h3>Pie Chart</h3>
      <div style={{ position: 'relative', width: '80%', height: '80%', margin: '0 auto' }}>
        <Pie 
          data={data}
          options={{
            maintainAspectRatio: false,
          }}
        />
      </div>
    </div>
  );
};

export default PieChart;
