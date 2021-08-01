import React, { useRef, useEffect, useState } from "react";
import { geoMercator, geoPath, scaleLinear, select, selectAll } from "d3";
import data from "../../services/maps/custom.geo.json";
import axios from "axios";

const WorldMap = ({ setSelectedCountry }) => {
  const svgRef = useRef();
  const coronaDataReadyRef = useRef(false);
  const mapWrapperRef = useRef();
  const [coronaData, setCoronaData] = useState([]);
  const [maxCases, setMaxCases] = useState(1);

  useEffect(() => {
    let max = 1;
    axios.get("https://corona.lmao.ninja/v2/countries?sort").then((res) => {
      for (let country of res.data) {
        country.cases > max && (max = country.cases);
      }
      coronaDataReadyRef.current = true;
      setCoronaData(res.data);
      setMaxCases(max);
    });
  }, []);
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
        let data = coronaData.filter((country) => {
          return country.countryInfo.iso3 === feature.properties.iso_a3;
        });
        return data[0] ? data[0].cases : 10;
      };
      const mouseOverHandle = (feature) => {
        selectAll(".country").style("opacity", 0.8);

        select(feature.path[0]).style("opacity", 1).style("stroke", "black");
      };
      const mouseLeaveHandle = (feature) => {
        selectAll(".country").style("opacity", 1);
        select(feature.path[0]).style("stroke", "transparent");
        selectAll(".country")
          .style("opacity", 1)
          .style("stroke", "transparent");
      };
      const countryText = (feature) => {
        let data = coronaData.filter((country) => {
          return country.countryInfo.iso3 === feature.properties.iso_a3;
        });
        console.log(feature);
        return data[0] ? data[0].cases : null;
      };

      mapWrapper
        .attr("viewBox", "0, 0, 1000, 650")
        .attr("preserveAspectRatio", "xMidYMid meet");

      svg
        .selectAll(".country")
        .data(data.features)
        .join("path")
        .on("mouseleave", (d) => mouseLeaveHandle(d))
        .on("mouseover", (d) => mouseOverHandle(d))
        .on("click", (d) => setSelectedCountry(d))
        .attr("class", "country")
        .attr("fill", (feature) => colorScale(countryCases(feature)))
        .attr("d", (feature) => pathGenerator(feature))
        .attr("transform", "translate(20,200)")
        .style("cursor", "pointer")
        .append("title")
        .text((feature) => {
          return `cases: ${countryText(feature)}`;
        });
    }
  }, [coronaData, maxCases, setSelectedCountry]);

  return (
    <svg ref={mapWrapperRef}>
      <svg ref={svgRef}></svg>
    </svg>
  );
};

export default WorldMap;
