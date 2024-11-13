'use client'
import React from "react";
import CheckBox from "./CheckBox";
import Copy from "./Copy";
import SliderSection from "./SliderSection";
import Strength from "./Strength";
import { useCardState } from "../hooks/useCardState";


const Card = () => {
  const{checked, setChecked, color, value, setValue, changeColor,setDisable, disable, password, generatePassword} = useCardState();

  const onGenerate = () => {
    changeColor();
    generatePassword();
  }

  return (
    <div className="wrapper">
      <p className="text-grey m-auto">Password Generator</p>
        <Copy newPassword={password} />
        <div className="mainCard">
          <SliderSection value={value} setValue={setValue}/>
          <CheckBox setDisabled={setDisable} checked={checked} setChecked={setChecked}/>
          <Strength color={color}/>
          {disable < 2 ? <p className="text-red">Must have atleast two check boxes clicked :P</p>: ""}
          <button className="button" onClick={onGenerate} disabled={disable < 2}>
            <p>GENERATE</p>
            <svg className="arrow" width="12" height="12" xmlns="http://www.w3.org/2000/svg"><path d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z"/></svg>

          </button>
        </div>
      </div>
  );
};

export default Card;
