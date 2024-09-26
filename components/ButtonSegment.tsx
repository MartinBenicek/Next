"use client";

import React from "react";

const ButtonSegment = ({ id, styles }: { id: string; styles: string }) => {
  const hlaseno = (id === "Sedma" || id === "Kilo") && (
    <span
      className={`flex w-full relative justify-around ${id === "Sedma" ? "row-start-3" : "row-start-4"}`}
    >
      <input
        className="cursor-pointer m-auto h-7 w-7 opacity-0 absolute"
        type="checkbox"
        id={`hlaseno-${id}`}
      />
      <label
        className="cursor-pointer flex before:h-7 before:w-7 before:border-2 before:border-orange-500 before:border-solid before:content-[''] before:bg-orange-100 before:rounded-md "
        htmlFor={`hlaseno-${id}`}
      ></label>
    </span>
  );
  return (
    <div className={`${styles}`}>
      <button className="border-solid border-2 bg-orange-300 border-orange-500 lg:hover:bg-orange-500 rounded-lg w-20 h-10 cursor-default row-start-1">
        {id}
      </button>
      {hlaseno}
    </div>
  );
};

export default ButtonSegment;
