"use client";
import { useEffect, useState } from "react";
import DivSection from "./DivSection";
import { VisibilityKeys } from "@/app/(group)/cena/page";

const ButtonSegment = ({
  id,
  styles,
  show,
  info,
}: {
  id: VisibilityKeys;
  styles: string;
  show: boolean;
  info: (id: VisibilityKeys) => void;
}) => {
  const [isGrid, setGrid] = useState(show);
  const handleButtonClick = () => {
    const newGrid = !isGrid;
    setGrid(newGrid);
    setTimeout(() => {
      info(id);
    }, 0);
  };
  useEffect(() => {
    setGrid(show);
  }, [show]);
  const isHeart =
    id !== "V-srdcich" ? <DivSection id={id} show={show} /> : null;
  return (
    <div className={`${styles}`}>
      <button
        className={`border-solid border-2 bg-orange-300 border-orange-500 rounded-lg w-20 h-10 cursor-default row-start-1 ${isGrid ? "bg-orange-500 lg:hover:bg-orange-500" : "bg-orange-300 lg:hover:bg-orange-400"}`}
        onClick={handleButtonClick}
        id={id}
        data-selected={isGrid}
      >
        {id}
      </button>
      <div
        className={`${isGrid ? "grid" : "hidden"} 
          ${id === "Hra" ? "row-span-2 grid-rows-2 sm:row-span-3 sm:grid-rows-3" : ""}
          ${id === "Betl" ? "row-span-2 grid-rows-2 sm:row-span-3 sm:grid-rows-3 md:row-span-2 md:grid-rows-2 md:gap-y-8 lg:gap-0" : ""}
          ${id === "Durch" ? "row-span-2 grid-rows-2 items-center md:gap-y-8 lg:gap-0" : ""}
          ${id === "Sedma" ? "row-span-3 grid-rows-3" : ""}
          ${id === "Kilo" ? "row-span-4 grid-rows-4" : ""}
          lg:grid-rows-4 h-full lg:row-span-4 items-center justify-items-center`}
      >
        {isHeart}
      </div>
    </div>
  );
};

export default ButtonSegment;
