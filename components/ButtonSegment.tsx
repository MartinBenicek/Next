"use client";
import { useState } from "react";
import DivSection from "./DivSection";

const ButtonSegment = ({ id, styles }: { id: string; styles: string }) => {
  const [isGrid, setGrid] = useState(false);
  const handleButtonClick = () => {
    const newGrid = !isGrid;
    setGrid(newGrid);
    /*
    setTimeout(() => {
      props.info(props.id);
    }, 0);*/
  };
  return (
    <div className={`${styles}`}>
      <button
        className={`border-solid border-2 bg-orange-300 border-orange-500 rounded-lg w-20 h-10 cursor-default row-start-1 ${isGrid ? "bg-orange-500 lg:hover:bg-orange-500" : "bg-orange-300 lg:hover:bg-orange-400"}`}
        onClick={handleButtonClick}
      >
        {id}
      </button>
      <div
        className={`${isGrid ? "grid" : "hidden"} grid-rows-4 h-full row-start-2 row-span-4 items-center justify-items-center`}
      >
        <DivSection id={`${id}`} />
      </div>
    </div>
  );
};

export default ButtonSegment;
