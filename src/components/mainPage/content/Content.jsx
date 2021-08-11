import React from "react";
import styled from "styled-components";
import MapAndDoughnut from "./mapAndDoughnut/mapContainer/MapAndDoughnut";
import GlobalStatChart from "./../../chart/GlobalState";
import { MainPageContext } from "./../MainPage";

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

const Content = () => {
  return (
    <MainPageContext.Consumer>
      {({ themes, theme }) => (
        <ContentContainer theme={themes[theme]}>
          <Container>
            <GlobalStatChart />
            <MapAndDoughnut />
          </Container>
        </ContentContainer>
      )}
    </MainPageContext.Consumer>
  );
};

export default Content;
