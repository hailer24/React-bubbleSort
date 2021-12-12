import React from "react";

const Bars = ({ arr }) => {
  return (
    <div>
      {arr.map((e) => {
        return <div className={e}>{e}</div>;
      })}
    </div>
  );
};

export default Bars;
