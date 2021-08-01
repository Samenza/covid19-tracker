import React from "react";
import styled from "styled-components";
import Statistics from "./statistics/statistics";
import MapAndDoughnut from "./mapAndDoughnut/mapContainer/MapAndDoughnut";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 10vh;
  padding: 2rem;
  width: 100%;
  background-color: #f2f2f2;
`;

const Content = () => {
  return (
    <Container>
      <Statistics />
      <MapAndDoughnut />
    </Container>
  );
};

export default Content;
