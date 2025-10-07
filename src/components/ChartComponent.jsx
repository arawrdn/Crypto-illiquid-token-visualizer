import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

function ChartComponent({ data }) {
  const chartData = {
    labels: data.map(d => d.timestamp),
    datasets: [
      {
        label: 'Price (USD)',
        data: data.map(d => d.price),
        borderColor: 'blue',
        backgroundColor: 'lightblue',
      },
      {
        label: 'Volume',
        data: data.map(d => d.volume),
        borderColor: 'green',
        backgroundColor: 'lightgreen',
        yAxisID: 'volume',
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: { beginAtZero: false },
      volume: { type: 'linear', position: 'right' },
    },
  };

  return <Line data={chartData} options={options} />;
}

export default ChartComponent;
