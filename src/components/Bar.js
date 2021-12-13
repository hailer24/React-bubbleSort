import React from "react";
import "../css/bar.css";
const Bar = ({ index, length, color }) => {
  const colors = [
    "rgba(61,90,241,0.5)",
    "rgba(255,48,79,1)",
    "rgba(131,232,90,0.5)",
  ];
  const style = {
    height: `${length}%`,
    background: colors[color],
    margin: `0px 2px`,
    width: `30px`,
  };

  return (
    <div className="flex">
      <div className="bar" style={style}></div>
      <div className="label">{length}</div>
    </div>
  );
};

export default Bar;
