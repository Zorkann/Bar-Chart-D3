const AxisBottom = ({ xScale, innerHeight }) => {
  return (
    <>
      {xScale.ticks().map((tickValue) => (
        <g
          className="tick"
          key={tickValue}
          transform={`translate(${xScale(tickValue)}, 0)`}
        >
          <line y2={innerHeight} />
          <text y={innerHeight + 3} dy=".71em" style={{ textAnchor: "middle" }}>
            {tickValue}
          </text>
        </g>
      ))}
    </>
  );
};

export default AxisBottom;
