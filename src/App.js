import { useState } from "react";
import { scaleBand, scaleLinear, max } from "d3";
import AxisLeft from "./AxisLeft";
import AxisBottom from "./AxisBottom";
import Marks from "./Marks";
import "./styles.css";
import { mockData } from "./Data";

const width = 760;
const height = 500;
const margin = { top: 20, right: 30, bottom: 60, left: 100 };
const innerHeight = height - margin.top - margin.bottom;
const innerWidth = width - margin.left - margin.right;
const xAxisLabelOffset = 50;

export default function App() {
  const [data] = useState(mockData);

  const yValue = (d) => d.country;
  const xValue = (d) => d.count;

  const yScale = scaleBand()
    .domain(data.map(yValue))
    .range([0, innerHeight])
    .paddingInner(0.2);

  const xScale = scaleLinear()
    .domain([0, max(data, xValue)])
    .range([0, innerWidth]);

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        <AxisBottom xScale={xScale} innerHeight={innerHeight} />
        <AxisLeft yScale={yScale} />
        <text
          className="axis-label"
          x={innerWidth / 2}
          textAnchor="middle"
          y={innerHeight + xAxisLabelOffset}
        >
          Population
        </text>
        <Marks
          data={data}
          xScale={xScale}
          yScale={yScale}
          xValue={xValue}
          yValue={yValue}
        />
      </g>
    </svg>
  );
}
