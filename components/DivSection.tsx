"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import Winner from "./Winner";
import ButtonBox from "./ButtonBox";

const initialState = {
  checked: false,
  hlasenoValue: false,
  flekValue: 0,
};

const DivSection = ({ id, show }: { id: string; show: boolean }) => {
  const [inputValues, setInputValues] = useState(initialState);

  useEffect(() => {
    if (!show) {
      setInputValues(initialState);
    }
  }, [show]);

  const handleCheckboxClick = () => {
    setInputValues((prevState) => ({
      ...prevState,
      checked: !prevState.checked,
    }));
  };
  const hlaseno = (id === "Sedma" || id === "Kilo") && (
    <span className={`flex w-full relative justify-around`}>
      <label
        className={`cursor-pointer block h-7 w-7 border-2 border-black border-solid content-[''] rounded-md
          ${inputValues.checked ? "bg-checkboxGreen" : "bg-checkboxRed lg:hover:bg-checkboxGreenhover"}`}
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
        minimum={0}
        styles="row-start-4"
        numberValue={10}
        id="game-points"
        show={show}
      ></ButtonBox>
    ) : null;
  return (
    <>
      {hlaseno}
      <ButtonBox
        minimum={0}
        styles={` ${id === "Hra" ? "row-start-1 sm:row-start-2" : ""} ${id === "Betl" ? "row-start-1 sm:row-start-2 md:row-start-1 lg:row-start-2" : ""} ${id === "Durch" ? "row-start-1 lg:row-start-2 sm:pb-2 md:pb-0" : ""}`}
        numberValue={1}
        id={`${id}-flek`}
        show={show}
      ></ButtonBox>
      <Winner id={id} show={show}></Winner>
      {body}
    </>
  );
};

export default DivSection;
