import React from "react";

const Orange = () => {
  return (
    <div className="flex flex-row gap-3">
      <p>WEAK</p>
      <div className="coloredBoxs">
        <div className="box bg-orange"></div>
        <div className="box bg-orange"></div>
        <div className="emptyBox"></div>
        <div className="emptyBox"></div>
      </div>
    </div>
  );
};

export default Orange;
