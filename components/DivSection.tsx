"use client";
import React from "react";
import { useState } from "react";
import Winner from "./Winner";
import ButtonBox from "./ButtonBox";

const initialState = {
  checked: false,
  hlasenoValue: false,
};

const DivSection = ({ id }: { id: string }) => {
  const [inputValues, setInputValues] = useState(initialState);
  const handleCheckboxClick = () => {
    setInputValues((prevState) => ({
      ...prevState,
      checked: !prevState.checked,
    }));
  };
  const hlaseno = (id === "Sedma" || id === "Kilo") && (
    <span className={`flex w-full relative justify-around`}>
      <label
        className={`${inputValues.checked ? "bg-checkboxGreen" : "bg-checkboxRed lg:hover:bg-checkboxGreenhover"} cursor-pointer block h-7 w-7 border-2 border-black border-solid content-['']  rounded-md `}
      >
        <input
          className="hidden"
          type="checkbox"
          id={`hlaseno-${id}`}
          onChange={handleCheckboxClick}
          checked={inputValues.checked}
        />
      </label>
    </span>
  );
  const body =
    id === "Kilo" ? (
      <ButtonBox
        minimum={100}
        styles="row-start-4"
        numberValue={10}
      ></ButtonBox>
    ) : null;
  return (
    <>
      {hlaseno}
      <ButtonBox minimum={0} styles="row-start-2" numberValue={1}></ButtonBox>
      <Winner></Winner>
      {body}
    </>
  );
};

export default DivSection;
