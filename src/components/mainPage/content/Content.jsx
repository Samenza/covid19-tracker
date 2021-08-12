import React from "react";
import styled from "styled-components";
import MapAndDoughnut from "./mapAndDoughnut/mapContainer/MapAndDoughnut";
import GlobalStatChart from "./../../chart/GlobalState";

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.background};
`;
const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0.4rem 2rem;
  margin: 1rem 0;
  width: 80%;

  @media (max-width: 768px) {
    width: 90%;
    padding: 0;
  }
`;

const Content = ({ theme }) => {
  return (
    <ContentContainer theme={theme}>
      <Container>
        <GlobalStatChart theme={theme} />
        <MapAndDoughnut theme={theme} />
      </Container>
    </ContentContainer>
  );
};

export default Content;
