import React from "react";

const CenaText = ({ divStyles }: { divStyles: string }) => {
  return (
    <div className={divStyles}>
      <p className="text-base lg:text-xl h-fit">Typ Hry</p>
      <p className="text-base lg:text-xl h-fit">Hlášeno</p>
      <p className="text-base lg:text-xl h-fit">Fleknuto</p>
      <span className="flex flex-col text-base lg:text-xl h-fit">
        <p className="text-base lg:text-xl">Uhrál</p>
        <p className="text-xs">Povinnost/obrana</p>
      </span>
      <p className="text-base lg:text-xl h-fit">Uhrané Body</p>
    </div>
  );
};

export default CenaText;
