import React, { useState } from "react";
import styled from "styled-components";
import LineChart from "./../../../../chart/chart";
const Box = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 35%;
`;
const Card = styled.div`
  height: 15vh;
  width: 70%;
  box-shadow: 0px -1px 4px 1px #d1d1d199;
  padding: 1rem;
  background-color: #fbfbfb;
  border: 0.5px solid #4f5d7547;
  border-radius: 1rem;
`;

const TitleCard = styled.div`
  height: 6vh;
  width: 70%;
  box-shadow: 0px -1px 4px 1px #d1d1d199;
  padding: 1rem;
  margin: 1rem 0;
  background-color: #fbfbfb;
  border: 0.5px solid #4f5d7547;
  border-radius: 1rem;
`;

const Title = styled.h3`
  margin: 0;
  text-align: center;
  color: ${(props) => {
    return props.color.border;
  }};
`;
const StatesticCard = ({ color, data, cardChartData }) => {
  //this useState is for this error =>  color is a function
  const [cardColor] = useState(color);
  return (
    <Box>
      <TitleCard>
        <Title color={cardColor}>{data.title}</Title>
        <Title color={cardColor}>{data.number}</Title>
      </TitleCard>
      <Card>
        <LineChart color={cardColor} chartData={cardChartData} />
      </Card>
    </Box>
  );
};

export default StatesticCard;
