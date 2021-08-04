import React, { useEffect, useState } from "react";
import styled from "styled-components";
import DoughnutChart from "../../../../chart/DoughnutChart";
import axios from "axios";
import WorldMap from "../../../../map/WorldMap";

const Container = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    height: auto;
    align-items: center;
  }
`;

const MapContainer = styled.div`
  width: 65%;
  height: 90%;
  margin-right: 1.5rem;
  background-color: #f5f6f8;
  border-radius: 6px;
  padding: 1rem;
  @media (max-width: 1024px) {
    width: 96%;
    margin: 0;
    padding: 2vw;
  }
`;
const MapContainerOnLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 65%;
  height: 90%;
  margin-right: 1.5rem;
  background-color: #f5f6f8;
  border-radius: 6px;
  padding: 1rem;
`;
const DoughuntContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 30%;
  height: 90%;
  padding: 1rem;
  background-color: #fbfbfb;
  border-radius: 6px;
  @media (max-width: 1024px) {
    margin: 1rem 0;
    height: 55vh;
    width: 35%;
  }
  @media (max-width: 769px) {
    margin: 1rem 0;
    height: 65vh;
    width: 45%;
  }
  @media (max-width: 515px) {
    margin: 1rem 0;
    height: 70vh;
    width: 90%;
  }
  @media (max-width: 400px) {
    margin: 1rem 0;
    height: 60vh;
    width: 90%;
  }
  @media (max-width: 300px) {
    margin: 1rem 0;
    height: 50vh;
    width: 90%;
  }
`;
const Title = styled.h3`
  text-align: center;
  margin: 0;
  color: #4f5d75;
  @media (max-width: 429px) {
    font-size: 4vw;
  }
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
  border-radius: 6px;
  background-color: #4f5d75;
  color: #ffffff;
  padding: 2px;
  @media (max-width: 429px) {
    font-size: 4vw;
  }
  cursor: pointer;
`;
const Loading = styled.img`
  width: 4vw;
  height: 4vw;
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
  const [error, setError] = useState("");

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
        setError("error");
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
    <React.Fragment>
      {globalInforamtion ? (
        <Container>
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

          <DoughuntContainer>
            <DoughnutChart
              globalInforamtion={globalInforamtion}
              selectedCountry={selectedCountry}
              setSelectedCountry={setSelectedCountry}
            />
          </DoughuntContainer>
        </Container>
      ) : (
        <React.Fragment>
          {error ? (
            <Container>
              <MapContainerOnLoading>
                <p>cant find data</p>
              </MapContainerOnLoading>
              <DoughuntContainer>
                <p>cant find data</p>
              </DoughuntContainer>
            </Container>
          ) : (
            <Container>
              <MapContainerOnLoading>
                <Loading src="/loading/Rotating globe.gif" />
              </MapContainerOnLoading>
              <DoughuntContainer>
                <Loading src="/loading/rip.gif" />
              </DoughuntContainer>
            </Container>
          )}
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default MapAndDoughnut;
