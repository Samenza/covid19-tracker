import React from "react";
import styled from "styled-components";
import MapAndDoughnut from "./mapAndDoughnut/mapContainer/MapAndDoughnut";
import GlobalStatChart from "./../../chart/GlobalState";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0.4rem 2rem;
  margin: 1rem 0;
  width: 80%;
`;

const Content = () => {
  return (
    <Container>
      {/* <Statistics /> */}
      <GlobalStatChart />
      <MapAndDoughnut />
    </Container>
  );
};

export default Content;
