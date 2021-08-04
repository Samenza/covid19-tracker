import React from "react";
import { Line } from "react-chartjs-2";

const data = (color, chartData) => {
  return {
    labels: chartData,
    datasets: [
      {
        tension: 0.4,
        borderWidth: 1.5,
        borderColor: color.border,
        backgroundColor: color.background,
        data: chartData,
        fill: true,
      },
    ],
  };
};

const options = {
  maintainAspectRatio: false,
  plugins: {
    tooltip: false,
    legend: {
      display: false,
    },
  },
  elements: { point: { radius: 0 } },

  scales: {
    x: { display: false },
    y: { display: false },
  },
};

const LineChart = ({ color, chartData }) => {
  return (
    <Line
      data={() => data(color, chartData)}
      options={options}
      responsive="true"
      width="100%"
      height="100%"
    />
  );
};

export default LineChart;
