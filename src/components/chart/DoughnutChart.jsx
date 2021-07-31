import React from "react";
import { Doughnut } from "react-chartjs-2";

const options = {
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top",
    },
  },
};
const data = (data) => {
  let title = Object.keys(data);
  let value = Object.values(data);
  return {
    labels: title,
    datasets: [
      {
        label: "Dataset 1",
        data: value,
        backgroundColor: ["#F94144", "#0EAD69", "#70D6FF", "#4F5D75"],
      },
    ],
  };
};

const DoughnutChart = ({ globalInforamtion }) => {
  return (
    <Doughnut
      options={options}
      data={() => data(globalInforamtion)}
      width="100%"
      height="60%"
    />
  );
};

export default DoughnutChart;
