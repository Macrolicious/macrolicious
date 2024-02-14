import React from 'react';
import { Line } from 'react-chartjs-2';

function WeightTracker() {
  const data = {
    labels: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ],
    datasets: [
      {
        label: 'Weight',
        data: [70, 69, 70, 71, 72, 71, 70],
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  const options = {
    scales: {
      x: {},
      y: {
        ticks: {
          beginAtZero: true,
        },
      },
    },
  };
  return (
    <div>
      <h2>Daily Weight Tracker</h2>
      <Line data={data} options={options} />
    </div>
  );
}

export default WeightTracker;
