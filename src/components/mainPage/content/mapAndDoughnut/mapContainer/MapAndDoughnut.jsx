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
  height: 90%;
  margin-right: 1.5rem;
  background-color: #fbfbfb;
  border-radius: 1rem;
  box-shadow: 0 2px 2px 2px #c2c2c2;
  padding: 1rem;
`;

const Title = styled.h5`
  text-align: center;
  margin: 0;
  color: #4f5d75;
  font-size: 1.2vw;
`;
const Divider = styled.hr`
  width: 40%;
  margin: 5px auto;
  height: 1px;
  background-color: #c2c2c2;
  border: none;
`;
const SelectOptions = styled.select`
  outline: none;
  user-select: none;
  border-radius: 1rem;
  padding: 2px;
`;
const MapAndDoughnut = () => {
  const [globalCoronaData, setGlobalCoronaData] = useState();
  const [globalInforamtion, setGlobalinformation] = useState();
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [coronaDataByCountry, setCoronaDataByCountry] = useState([]);
  const [options] = useState([
    "cases",
    "active",
    "critical",
    "deaths",
    "recovered",
  ]);
  const [selectedOptions, setSelectedOptions] = useState("cases");

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
            <Title>World Map | global {selectedOptions}</Title>
            <Divider />
            <SelectOptions
              onChange={(e) => setSelectedOptions(e.target.value)}
              name="options"
              id="selectOptions"
            >
              {options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </SelectOptions>
            <WorldMap
              setSelectedCountry={setSelectedCountry}
              setCoronaDataByCountry={setCoronaDataByCountry}
              coronaDataByCountry={coronaDataByCountry}
              selectedOptions={selectedOptions}
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
