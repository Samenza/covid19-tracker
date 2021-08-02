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
  const [globalCoronaData, setGlobalCoronaData] = useState();
  const [globalInforamtion, setGlobalinformation] = useState();
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [coronaDataByCountry, setCoronaDataByCountry] = useState([]);

  const CreateGlobalInformation = (coronaData) => {
    let data = { info: {} };
    data.info.death = coronaData.deaths;
    data.info.recovered = coronaData.recovered;
    data.info.totalCases = coronaData.cases;
    data.info.active = coronaData.active;
    coronaData.country && (data.name = coronaData.country);
    setGlobalinformation(data);
  };

  useEffect(() => {
    axios
      .get("https://corona.lmao.ninja/v2/all")
      .then((res) => {
        setGlobalCoronaData(res.data);
        CreateGlobalInformation(res.data);
      })
      .catch((error) => {
        alert("error");
      });
  }, []);
  useEffect(() => {
    if (selectedCountry) {
      let data = coronaDataByCountry.filter((country) => {
        return country.countryInfo.iso3 === selectedCountry.properties.iso_a3;
      });
      CreateGlobalInformation(data[0]);
    } else {
      if (globalCoronaData) {
        CreateGlobalInformation(globalCoronaData);
      } else {
        return;
      }
    }
  }, [selectedCountry, coronaDataByCountry, globalCoronaData]);
  return (
    <Container>
      {globalInforamtion && (
        <React.Fragment>
          <MapContainer>
            <WorldMap
              setSelectedCountry={setSelectedCountry}
              setCoronaDataByCountry={setCoronaDataByCountry}
              coronaDataByCountry={coronaDataByCountry}
            />
          </MapContainer>
          <DoughnutChart
            globalInforamtion={globalInforamtion}
            selectedCountry={selectedCountry}
            setSelectedCountry={setSelectedCountry}
          />
        </React.Fragment>
      )}
    </Container>
  );
};

export default MapAndDoughnut;
