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
  background-color: #fbfbfb;
  border: 0.5px solid #4f5d7547;
  border-radius: 6px;
  .lineChart {
    padding: 1rem;
  }
`;
const CardOnLoad = styled(Card)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h3`
  margin: 0;
  color: #4f5d75;
  text-align: center;
  @media (max-width: 429px) {
    font-size: 4vw;
  }
`;
const Divider = styled.hr`
  width: 20%;
  height: 1px;
  background-color: #c5c5c5;
  border: none;
  margin: 5px auto;
`;
const Loading = styled.img`
  width: 4vw;
  height: 4vw;
`;

const ErrorText = styled.p``;

const GlobalStatChart = () => {
  const [coronaByTime, setCoronaByTime] = useState();
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://corona.lmao.ninja/v2/historical/all")
      .then((res) => {
        setCoronaByTime(res.data);
      })
      .catch((error) => setError(error));
  }, []);
  const cardRender = (
    <Card>
      <Title>Global Stats | By time</Title>
      <Divider />
      {coronaByTime && (
        <Line
          className="lineChart"
          data={() => data(coronaByTime)}
          options={options}
        />
      )}
    </Card>
  );
  const cardRenderOnLoad = (
    <CardOnLoad>
      {error ? (
        <ErrorText>cant find data</ErrorText>
      ) : (
        <Loading src="/loading/rip.gif" />
      )}
    </CardOnLoad>
  );
  return (
    <React.Fragment>
      {coronaByTime ? cardRender : cardRenderOnLoad}
    </React.Fragment>
  );
};

export default GlobalStatChart;
