// useCardState.js
import { useState } from "react";
import { PassWordGenerator } from "../password/PassWordGenerator";
export const useCardState = () => {
  const [checked, setChecked] = useState([0, 0, 0, 0]);
  const [color, setColor] = useState(0);
  const [value, setValue] = useState(14);
  const [disable, setDisable] = useState(0);
  const [password, setPassword] = useState('');

  const changeColor = () => {
    const count = checked.reduce((acc, item) => acc + item, 0);
    setColor(count);
    console.log(count);
  };

  const generatePassword = () => {
    const newPassword = PassWordGenerator(checked, value);
    setPassword(newPassword);
  };



  return {
    checked,
    setChecked,
    color,
    value,
    setValue,
    changeColor,
    disable,
    setDisable,
    generatePassword,
    password
  };
};
