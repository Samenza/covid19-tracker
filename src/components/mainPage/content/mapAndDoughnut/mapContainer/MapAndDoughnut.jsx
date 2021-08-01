import React, { useEffect, useState } from "react";
import styled from "styled-components";
import DoughnutChart from "../../../../chart/DoughnutChart";
import axios from "axios";
import WorldMap from "../../../../map/worldMap";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const MapContainer = styled.div`
  width: 65%;
  height: 100%;
  margin-right: 1.5rem;
  background-color: #fbfbfb;
  border-radius: 1rem;
  box-shadow: 0 2px 2px 2px #c2c2c2;
  padding: 1rem;
`;

const MapAndDoughnut = () => {
  const [globalInforamtion, setGlobalinformation] = useState();
  useEffect(() => {
    let data = {};
    axios
      .get("https://corona.lmao.ninja/v2/all")
      .then((res) => {
        data.death = res.data.deaths;
        data.recovered = res.data.recovered;
        data.totalCases = res.data.cases;
        data.active = res.data.active;

        setGlobalinformation(data);
      })
      .catch((error) => {
        alert("error");
      });
  }, []);
  return (
    <Container>
      {globalInforamtion && (
        <React.Fragment>
          <MapContainer>
            <WorldMap />
          </MapContainer>
          <DoughnutChart globalInforamtion={globalInforamtion} />
        </React.Fragment>
      )}
    </Container>
  );
};

export default MapAndDoughnut;
