import React from "react";
import { Doughnut } from "react-chartjs-2";
import styled from "styled-components";

const options = {
  maintainAspectRatio: true,
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

const DoughuntContainer = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fbfbfb;
  border-radius: 1rem;
  box-shadow: 0 2px 2px 2px #c2c2c2;
  padding: 1rem;
`;

const Title = styled.h4`
  color: #4f5d75;
  font-size: 2vw;
`;
const DoughnutChart = ({ globalInforamtion }) => {
  return (
    <DoughuntContainer>
      <Title>Global statistics</Title>
      <Doughnut options={options} data={() => data(globalInforamtion)} />
    </DoughuntContainer>
  );
};

export default DoughnutChart;
