import React, { useRef, useEffect, useState } from "react";
import { geoMercator, geoPath, scaleLinear, select } from "d3";
import data from "../../services/maps/custom.geo.json";
import axios from "axios";

const WorldMap = () => {
  const svgRef = useRef();
  const mapWrapperRef = useRef();
  const [coronaData, setCoronaData] = useState([]);
  const [maxCases, setMaxCases] = useState(1);

  useEffect(() => {
    let max = 1;
    axios.get("https://corona.lmao.ninja/v2/countries?sort").then((res) => {
      for (let country of res.data) {
        country.cases > max && (max = country.cases);
        console.log(country.cases === max && country);
      }
      setCoronaData(res.data);
      setMaxCases(max);
    });
  }, []);
  useEffect(() => {
    const svg = select(svgRef.current);
    const mapWrapper = select(mapWrapperRef.current);
    const projection = geoMercator();
    const pathGenerator = geoPath().projection(projection);

    const colorScale = scaleLinear()
      .domain([0, maxCases / 10])
      .range(["#c4b3b3", "#be0000"]);

    const countryColorSet = (feature) => {
      let data = coronaData.filter((country) => {
        return country.countryInfo.iso3 === feature.properties.iso_a3;
      });

      return data[0] ? data[0].cases : 10;
    };

    mapWrapper
      .attr("viewBox", "0, 0, 1000, 650")
      .attr("preserveAspectRatio", "xMidYMid meet");

    svg
      .selectAll(".country")
      .data(data.features)
      .join("path")
      .attr("class", "country")
      .attr("fill", (feature) => colorScale(countryColorSet(feature)))
      .attr("d", (feature) => pathGenerator(feature))
      .attr("transform", "translate(20,200)");
  }, [coronaData, maxCases]);

  return (
    <svg ref={mapWrapperRef}>
      <svg ref={svgRef}></svg>
    </svg>
  );
};

export default WorldMap;
