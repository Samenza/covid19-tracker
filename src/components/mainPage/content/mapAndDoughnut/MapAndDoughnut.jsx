import React from "react";
import styled from "styled-components";
import DoughnutChart from "./../../../chart/DoughnutChart";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const DoughuntContainer = styled.div`
  width: 30%;
  height: 100%;
`;

const Map = styled.div`
  width: 70%;
  height: 100%;
`;

const MapAndDoughnut = () => {
  return (
    <Container>
      <Map />
      <DoughuntContainer>
        <DoughnutChart />
      </DoughuntContainer>
    </Container>
  );
};

export default MapAndDoughnut;
