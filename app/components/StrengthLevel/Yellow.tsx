import React from "react";

const Yellow = () => {
  return (
    <div className="flex flex-row gap-3">
      <p>MEDIUM</p>
      <div className="coloredBoxs">
        <div className="box bg-yellow"></div>
        <div className="box bg-yellow"></div>
        <div className="box bg-yellow"></div>
        <div className="emptyBox"></div>
      </div>
    </div>
  );
};

export default Yellow;
