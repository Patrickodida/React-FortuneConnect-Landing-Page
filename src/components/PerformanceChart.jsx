import React from 'react'
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Title,
  Tooltip,
  Legend
);

const PerformanceChart = ({ investments }) => {
    const data = {
    labels: investments.map(investment => investment.name),
    datasets: [
      {
        label: 'Investment Performance (%)',
        data: investments.map(investment => investment.performance),
        backgroundColor: 'rgba(61, 195, 228, 0.2)',
        borderColor: 'rgba(61, 195, 228, 1)',
        borderWidth: 2,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Performance (%)',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Investments',
        },
      },
    },
  };
  return (
    <div className="bg-white shadow-md rounded-lg p-4 m-2 h-full">
      <h3 className="text-lg font-semibold text-gray-700 mb-2 text-center">Performance Chart</h3>
      <div className='h-full'>
        <Line data={data} options={options} />
      </div>
    </div>
  )
}

export default PerformanceChart;

