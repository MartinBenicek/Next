"use client";

import React from "react";

const ButtonSegment = ({ id, styles }: { id: string; styles: string }) => {
  return (
    <div className={`${styles}`}>
      <button className="border-solid border-2 bg-orange-300 border-orange-500 lg:hover:bg-orange-500 rounded-lg w-20 h-10 cursor-default">
        {id}
      </button>
    </div>
  );
};

export default ButtonSegment;
