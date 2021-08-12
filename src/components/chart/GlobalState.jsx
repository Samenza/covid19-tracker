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

const Card = styled.div`
  position: relative;
  height: 40vh;
  width: 100%;
  padding: 1rem 0;
  margin: 1rem 0;
  background-color: ${(props) => props.theme.secondBackground};
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
  color: ${(props) => props.theme.text};
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

const GlobalStatChart = React.memo(({ theme }) => {
  const [coronaByTime, setCoronaByTime] = useState();
  const [error, setError] = useState("");
  //chart option is here ...pass theme to options in this way work fine
  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: theme.text,
        },
      },
    },
    scales: {
      xAxes: {
        grid: {
          color: theme.chartColorGrid,
        },
        ticks: {
          color: theme.text,
        },
      },
      yAxes: {
        grid: {
          color: theme.chartColorGrid,
        },
        ticks: {
          color: theme.text,
        },
      },
    },
  };

  useEffect(() => {
    axios
      .get("https://corona.lmao.ninja/v2/historical/all")
      .then((res) => {
        setCoronaByTime(res.data);
      })
      .catch((error) => setError(error));
  }, []);
  const cardRender = (
    <Card theme={theme}>
      <Title theme={theme}>Global Stats | By time</Title>
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
});

export default GlobalStatChart;
