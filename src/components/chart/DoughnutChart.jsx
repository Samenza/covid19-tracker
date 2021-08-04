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
  let title = Object.keys(data.info);
  let value = Object.values(data.info);
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

const Title = styled.h3`
  color: #4f5d75;
  font-size: 1.3vw;
  margin: 0;
`;
const Buttun = styled.button`
  padding: 0.6rem;
  margin-top: 1rem;
  font-size: 1.1vw;
  background-color: #4f5d75;
  color: #ffffff;
  box-shadow: 0 1px 1px 1px #c2c2c2;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:active {
    transform: translateY(2px);
    box-shadow: none;
  }
`;
const Divider = styled.hr`
  width: 80%;
  margin: 0;
  height: 1px;
  background-color: #c2c2c2;
  border: none;
`;

const DoughnutChart = React.memo(
  ({ globalInforamtion, setSelectedCountry }) => {
    return (
      <React.Fragment>
        <Title>
          {globalInforamtion.name ? globalInforamtion.name : "Global Statistic"}
        </Title>
        <Divider />
        <Doughnut options={options} data={() => data(globalInforamtion)} />
        <Buttun onClick={() => setSelectedCountry(null)}>
          global statistic
        </Buttun>
      </React.Fragment>
    );
  }
);

export default DoughnutChart;
