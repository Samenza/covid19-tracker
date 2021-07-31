import React, { useRef } from "react";
import { useEffect } from "react";
import { geoMercator, geoPath, select } from "d3";
import data from "../../services/maps/custom.geo.json";

const WorldMap = () => {
  const svgRef = useRef();
  const mapWrapperRef = useRef();
  useEffect(() => {
    const svg = select(svgRef.current);
    const mapWrapper = select(mapWrapperRef.current);
    const projection = geoMercator();
    const pathGenerator = geoPath().projection(projection);
    mapWrapper
      .attr("viewBox", "0, 0, 1000, 650")
      .attr("preserveAspectRatio", "xMidYMid meet");
    svg
      .selectAll(".country")
      .data(data.features)
      .join("path")
      .attr("class", "country")
      .attr("d", (feature) => pathGenerator(feature))
      .attr("transform", "translate(20,200)");
  }, []);
  return (
    <svg ref={mapWrapperRef}>
      <svg ref={svgRef}></svg>
    </svg>
  );
};

export default WorldMap;
