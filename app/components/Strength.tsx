import React from "react";
import Green from "./StrengthLevel/Green";
import Yellow from "./StrengthLevel/Yellow";
import Orange from "./StrengthLevel/Orange";
import Red from "./StrengthLevel/Red";

interface Props {
  color: number;
}

const DynamicComponent = ({ number }: { number: number }) => {
  let ComponentToRender;

  switch (number) {
    case 0:
      ComponentToRender = <Red />;
      break;
    case 1:
      ComponentToRender = <Red />;
      break;
    case 2:
      ComponentToRender = <Orange />;
      break;
    case 3:
      ComponentToRender = <Yellow />;
      break;
    case 4:
      ComponentToRender = <Green />;
      break;
 
  }

  return <div>{ComponentToRender}</div>
};

const Strength = ({ color }: Props) => {
  return (
    <div className="strengthCard">
      <p className="text-grey">STRENGTH</p>
      <DynamicComponent number={color}/>
    </div>
  );
};

export default Strength;
