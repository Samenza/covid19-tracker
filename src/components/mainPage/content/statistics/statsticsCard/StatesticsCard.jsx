import React, { useState } from "react";
import styled from "styled-components";
import LineChart from "./../../../../chart/chart";
const Box = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
`;
const Card = styled.div`
  position: relative;
  height: 12vh;
  width: 70%;
  padding: 1rem;
  box-shadow: 0px 0px 4px 2px ${(props) => props.color.background};
  background-color: #fbfbfb;
  border: 0.5px solid #4f5d7547;
  border-radius: 1rem;
`;

const TitleCard = styled.div`
  position: absolute;
`;

const Title = styled.h3`
  margin: 0;
  text-align: center;
  color: #4f5d75;
`;
const StatesticCard = ({ color, data, cardChartData }) => {
  //this useState is for this error =>  color is a function
  const [cardColor] = useState(color);
  return (
    <Box>
      <Card color={cardColor}>
        <TitleCard>
          <Title>{data.title}</Title>
          <Title>{data.number}</Title>
        </TitleCard>
        <LineChart color={cardColor} chartData={cardChartData} />
      </Card>
    </Box>
  );
};

export default StatesticCard;
