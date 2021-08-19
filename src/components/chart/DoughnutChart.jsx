import React from "react";
import { Doughnut } from "react-chartjs-2";
import styled from "styled-components";

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
  color: ${(props) => props.theme.text};
  margin: 0;
  @media (max-width: 429px) {
    font-size: 4vw;
  }
`;
const Buttun = styled.button`
  padding: 0.6rem;
  margin-top: 1rem;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.secondText};
  box-shadow: 0 1px 1px 1px ${(props) => props.theme.darkOnlight};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  @media (max-width: 429px) {
    font-size: 4vw;
  }
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
  ({ globalInforamtion, setSelectedCountry, theme }) => {
    const options = {
      maintainAspectRatio: true,
      plugins: {
        legend: {
          position: "top",
          labels: {
            color: theme.text,
          },
        },
      },
    };
    return (
      <React.Fragment>
        <Title theme={theme}>
          {globalInforamtion.name ? globalInforamtion.name : "Global Statistic"}
        </Title>
        <Divider />
        <Doughnut options={options} data={() => data(globalInforamtion)} />
        <Buttun onClick={() => setSelectedCountry(null)} theme={theme}>
          global statistic
        </Buttun>
      </React.Fragment>
    );
  }
);

export default DoughnutChart;
