"use client";
import React, { useState } from "react";
import Image from "next/image";

export const RuleCard = ({
  ruleTitle,
  ruleDescription,
}: {
  ruleTitle: string;
  ruleDescription: string;
}) => {
  const [clickTriangle, setClickTriangle] = useState(false);
  return (
    <section className="w-4/5">
      <div
        className="flex items-center justify-between text-2xl border-b-2 border-black border-solid cursor-pointer"
        onClick={() => {
          setClickTriangle(!clickTriangle);
        }}
      >
        <h1>{ruleTitle}</h1>
        <div
          className={`relative h-12 w-12 ${clickTriangle ? "rotate-0" : "rotate-90"} duration-300`}
        >
          <Image src={"/img/triangle.svg"} alt="triangle" fill></Image>
        </div>
      </div>
      <div className={`${clickTriangle ? "block" : "hidden"} pr-2`}>
        {ruleDescription}
      </div>
    </section>
  );
};
