"use client";
import { useState } from "react";

const initialState = {
  flekValue: 0,
  hlasenoValue: false,
  bodyValue: 0,
};

const ButtonSegment = ({ id, styles }: { id: string; styles: string }) => {
  const [isGrid, setGrid] = useState(false);
  const [checked, setChecked] = useState(false);
  const [inputValues, setInputValues] = useState(initialState);
  const handleButtonClick = () => {
    const newGrid = !isGrid;
    setGrid(newGrid);
    /*
    setTimeout(() => {
      props.info(props.id);
    }, 0);*/
  };
  const handleCheckboxClick = () => {
    setChecked(!checked);
  };
  const hlaseno = (id === "Sedma" || id === "Kilo") && (
    <span className={`flex w-full relative justify-around`}>
      <label
        className={`${checked ? "bg-lime-400" : "bg-red-500"} cursor-pointer block h-7 w-7 border-2 border-black border-solid content-['']  rounded-md `}
      >
        <input
          className="hidden"
          type="checkbox"
          id={`hlaseno-${id}`}
          onChange={handleCheckboxClick}
          checked={checked}
        />
      </label>
    </span>
  );
  return (
    <div className={`${styles}`}>
      <button
        className={`border-solid border-2 bg-orange-300 border-orange-500  rounded-lg w-20 h-10 cursor-default row-start-1 lg:hover:bg-orange-500 ${isGrid ? "bg-orange-500 " : "bg-orange-300 "} `}
        onClick={handleButtonClick}
      >
        {id}
      </button>
      <div
        className={`${isGrid ? "grid" : "hidden"} grid-rows-4 h-full row-start-2 row-span-4 items-center justify-center`}
      >
        {hlaseno}
        <label className="h-6 w-12 block content-[''] border-2 border-black border-solid rounded-md">
          <input type="number" min="0" className="hidden" />
        </label>
      </div>
    </div>
  );
};

export default ButtonSegment;
