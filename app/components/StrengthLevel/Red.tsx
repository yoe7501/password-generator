import React from "react";

const Red = () => {
  return (
    <div className="flex flex-row gap-3">
      <p>TOO WEAK!</p>
      <div className="coloredBoxs">
        <div className="box bg-red"></div>
        <div className="emptyBox"></div>
        <div className="emptyBox"></div>
        <div className="emptyBox"></div>
      </div>
    </div>
  );
};

export default Red;
