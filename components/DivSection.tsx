"use client";
import React from "react";

const initialState = {
  checked: false,
  flekValue: 0,
  hlasenoValue: false,
  bodyValue: 0,
};

import { useState } from "react";

const DivSection = ({ id }: { id: string }) => {
  const [inputValues, setInputValues] = useState(initialState);
  const handleCheckboxClick = () => {
    setInputValues((prevState) => ({
      ...prevState,
      checked: !prevState.checked,
    }));
  };
  const handleFlekIncrease = () => {
    setInputValues((prevState) => ({
      ...prevState,
      flekValue: prevState.flekValue + 1,
    }));
  };

  const handleFlekDecrease = () => {
    setInputValues((prevState) => ({
      ...prevState,
      flekValue: Math.max(prevState.flekValue - 1, 0),
    }));
  };
  const handleFlekChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10) || 0;
    setInputValues((prevState) => ({
      ...prevState,
      flekValue: value,
    }));
  };
  const hlaseno = (id === "Sedma" || id === "Kilo") && (
    <span className={`flex w-full relative justify-around`}>
      <label
        className={`${inputValues.checked ? "bg-lime-400" : "bg-red-500"} cursor-pointer block h-7 w-7 border-2 border-black border-solid content-['']  rounded-md `}
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
  return (
    <>
      {hlaseno}
      <div className="grid grid-cols-3 grid-rows-2 items-center gap-1 row-start-2">
        <label className="relative h-full w-12 block content-[''] border-2 border-black border-solid rounded-md row-span-2 col-span-2">
          <input
            type="number"
            min="0"
            className="absolute inset-0 rounded-md p-1 outline-none"
            value={inputValues.flekValue}
            onChange={handleFlekChange}
          />
        </label>
        <button
          onClick={handleFlekIncrease}
          className="border-2 border-black border-solid rounded-md col-start-3 row-start-1 text-xs"
        >
          +
        </button>
        <button
          onClick={handleFlekDecrease}
          className="border-2 border-black border-solid rounded-md col-start-3 row-start-2 text-xs"
        >
          -
        </button>
      </div>
    </>
  );
};

export default DivSection;
