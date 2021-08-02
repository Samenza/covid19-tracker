import React, { useRef, useEffect, useState } from "react";
import { geoMercator, geoPath, scaleLinear, select } from "d3";
import data from "../../services/maps/custom.geo.json";
import axios from "axios";
import styled from "styled-components";

const Map = styled.svg`
  & :hover.country {
    stroke: black;
    stroke-width: 2px;
    cursor: pointer;
  }
`;

const WorldMap = ({
  setSelectedCountry,
  coronaDataByCountry,
  setCoronaDataByCountry,
  selectedOptions,
}) => {
  const svgRef = useRef();
  const coronaDataReadyRef = useRef(false);
  const mapWrapperRef = useRef();
  const [maxCases, setMaxCases] = useState(1);

  useEffect(() => {
    let max = 1;
    axios.get("https://corona.lmao.ninja/v2/countries?sort").then((res) => {
      for (let country of res.data) {
        country[selectedOptions] > max && (max = country[selectedOptions]);
      }

      coronaDataReadyRef.current = true;
      setCoronaDataByCountry(res.data);
      setMaxCases(max);
    });
  }, [setCoronaDataByCountry, selectedOptions]);
  useEffect(() => {
    if (coronaDataReadyRef.current) {
      const svg = select(svgRef.current);
      const mapWrapper = select(mapWrapperRef.current);
      const projection = geoMercator();
      const pathGenerator = geoPath().projection(projection);

      const colorScale = scaleLinear()
        .domain([0, maxCases / 10])
        .range(["#d4bbbb", "#ca0000"]);

      const countryCases = (feature) => {
        let data = coronaDataByCountry.filter((country) => {
          return country.countryInfo.iso3 === feature.properties.iso_a3;
        });

        return data[0] ? data[0][selectedOptions] : 10;
      };

      const countryText = (feature) => {
        let data = coronaDataByCountry.filter((country) => {
          return country.countryInfo.iso3 === feature.properties.iso_a3;
        });
        return data[0] ? data[0][selectedOptions] : null;
      };

      mapWrapper
        .attr("viewBox", "0, 0, 1000, 650")
        .attr("preserveAspectRatio", "xMidYMid meet");

      svg
        .selectAll(".country")
        .data(data.features)
        .join("path")
        .on("click", (e, feature) => setSelectedCountry(feature))
        .attr("class", "country")
        .attr("fill", (feature) => colorScale(countryCases(feature)))
        .attr("d", (feature) => pathGenerator(feature))
        .attr("transform", "translate(20,200)")
        .append("title")
        .text((feature) => {
          return `${selectedOptions}: ${countryText(feature)}`;
        });
    }
  }, [coronaDataByCountry, maxCases, setSelectedCountry]);

  return (
    <svg ref={mapWrapperRef}>
      <Map ref={svgRef}></Map>
    </svg>
  );
};

export default WorldMap;
