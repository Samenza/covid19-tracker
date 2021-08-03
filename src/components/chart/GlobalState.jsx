import axios from "axios";
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import styled from "styled-components";

const data = (data) => {
  let dateData = Object.keys(data.cases);

  return {
    labels: dateData,
    datasets: [
      {
        label: "Cases",
        borderWidth: 1.5,
        borderColor: "#04862f",
        backgroundColor: "#52eba652",
        data: Object.values(data.cases),
        fill: true,
      },
      {
        hidden: true,
        label: "Death",
        borderWidth: 1.5,
        borderColor: "#F94144",
        backgroundColor: "#ffd3d444",
        data: Object.values(data.deaths),
        fill: true,
      },

      {
        hidden: true,
        label: "Recovered",
        borderWidth: 1.5,
        borderColor: "#1081ad",
        backgroundColor: "#006c9731",
        data: Object.values(data.recovered),
        fill: true,
      },
    ],
  };
};
const options = {
  maintainAspectRatio: false,
};

const Card = styled.div`
  position: relative;
  height: 40vh;
  width: 100%;
  padding: 1rem 0;
  margin: 1rem 0;
  box-shadow: 0px 0px 4px 2px #c2c2c2;
  background-color: #fbfbfb;
  border: 0.5px solid #4f5d7547;
  border-radius: 1rem;
  .lineChart {
    padding: 1rem;
  }
`;
const Title = styled.h3`
  margin: 0;
  font-size: 1.1vw;
  color: #4f5d75;
  text-align: center;
`;
const Divider = styled.hr`
  width: 20%;
  height: 1px;
  background-color: #c5c5c5;
  border: none;
  margin: 5px auto;
`;
const GlobalStatChart = () => {
  const [coronaByTime, setCoronaByTime] = useState();
  useEffect(() => {
    axios
      .get("https://corona.lmao.ninja/v2/historical/all")
      .then((res) => {
        setCoronaByTime(res.data);
      })
      .catch((error) => {
        console.log("error");
      });
  }, []);
  return (
    <Card>
      <Title>Global chart | By time</Title>
      <Divider />
      {coronaByTime && (
        <Line
          className="lineChart"
          width="80%"
          height="100%"
          data={() => data(coronaByTime)}
          options={options}
        />
      )}
    </Card>
  );
};

export default GlobalStatChart;
