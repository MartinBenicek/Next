import React from "react";

const CenaText = ({
  divStyles,
  textStyles,
}: {
  divStyles: string;
  textStyles: string;
}) => {
  return (
    <div className={divStyles}>
      <p className={textStyles}>Typ Hry</p>
      <p className={textStyles}>Hlášeno</p>
      <p className={textStyles}>Fleknuto</p>
      <span className={`flex flex-col ${textStyles}`}>
        <p className="text-base lg:text-xl">Uhrál</p>
        <p className="text-xs">Povinnost/obrana</p>
      </span>
      <p className={textStyles}>Uhrané Body</p>
    </div>
  );
};

export default CenaText;
