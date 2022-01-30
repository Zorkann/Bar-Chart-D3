const AxisLeft = ({ yScale }) => {
  return (
    <>
      {yScale.domain().map((tickValue) => (
        <g className="tick">
          <text
            key={tickValue}
            x={-3}
            y={yScale(tickValue) + yScale.bandwidth() / 2}
            dy=".32em"
            style={{ textAnchor: "end" }}
          >
            {tickValue}
          </text>
        </g>
      ))}
    </>
  );
};

export default AxisLeft;
