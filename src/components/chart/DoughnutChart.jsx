import React from "react";
import { Doughnut } from "react-chartjs-2";
import styled from "styled-components";

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
  },
};
const DATA_COUNT = 5;
const data = {
  labels: ["Red", "Orange", "Yellow", "Green", "Blue"],
  datasets: [
    {
      label: "Dataset 1",
      data: [10, 20, 30, 40, 50],
    },
  ],
};

const DoughnutChart = () => {
  return <Doughnut options={options} data={data} />;
};

export default DoughnutChart;
