import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import StatesticCard from "./statsticsCard/StatesticsCard";

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  padding: 1rem;
  background-color: #fbfbfb;
  border-radius: 1rem;
  box-shadow: 0 2px 2px 2px #c2c2c2;
`;
const Statistics = () => {
  const [cards, setCards] = useState();
  const [cardChartData, setCardChartData] = useState();

  useEffect(() => {
    let data = [
      { title: "Cases", number: 0 },
      { title: "Recovered", number: 0 },
      { title: "Deaths", number: 0 },
    ];
    axios.get("https://corona.lmao.ninja/v2/all").then((res) => {
      for (let card of data) {
        switch (card.title) {
          case "Cases":
            card.number = res.data.cases;
            break;
          case "Recovered":
            card.number = res.data.recovered;
            break;
          case "Deaths":
            card.number = res.data.deaths;
            break;
          default:
            card.number = 0;
        }
      }
      setCards(data);
    });
  }, []);

  useEffect(() => {
    let cases = [];
    let recovered = [];
    let deaths = [];
    let data = { cases: [], recovered: [], deaths: [] };
    axios.get("https://corona.lmao.ninja/v2/historical/all").then((res) => {
      cases = Object.values(res.data.cases);
      data.Cases = cases;

      deaths = Object.values(res.data.deaths);
      data.Deaths = deaths;

      recovered = Object.values(res.data.recovered);
      data.Recovered = recovered;

      setCardChartData(data);
    });
  }, []);

  const colorChoose = (data) => {
    let color = {};
    switch (data.title) {
      case "Recovered":
        color.border = "#0ead68c1";
        color.background = "#e1fff2";
        return color;
      case "Deaths":
        color.border = "#f94144b5";
        color.background = "#ffe4e4";
        return color;
      case "Cases":
        color.border = "#70d6ffac";
        color.background = "#e6f8ff";
        return color;
      default:
        color.border = "#000000";
        color.background = "#000000";
        return color;
    }
  };

  return (
    <Container>
      {cards &&
        cardChartData &&
        cards.map((data) => {
          return (
            <StatesticCard
              key={data.title}
              color={() => colorChoose(data)}
              data={data}
              cardChartData={cardChartData[data.title]}
            />
          );
        })}
    </Container>
  );
};

export default Statistics;
