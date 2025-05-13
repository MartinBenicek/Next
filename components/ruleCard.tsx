"use client";
import React, { useState } from "react";
import Image from "next/image";

export const RuleCard = ({
  ruleTitle,
  ruleDescription,
  id,
}: {
  ruleTitle: string;
  ruleDescription: string;
  id: string;
}) => {
  const [clickTriangle, setClickTriangle] = useState(false);
  return (
    <section className="w-4/5">
      <div
        className="flex items-center justify-between text-2xl border-b-2 border-black border-solid cursor-pointer"
        id={id}
        onClick={() => {
          setClickTriangle(!clickTriangle);
        }}
      >
        <h2 className="lg:text-3xl">{ruleTitle}</h2>
        <div
          className={`relative h-12 w-12 ${clickTriangle ? "rotate-0" : "rotate-90"} duration-150 ease-out`}
        >
          <Image src={"/img/triangle.svg"} alt="triangle" fill></Image>
        </div>
      </div>
      <div
        className={`overflow-hidden transform transition-all duration-150 ease-out ${
          clickTriangle ? "opacity-100" : "max-h-0 opacity-0"
        } pt-3 text-justify`}
        id={`${id}-section`}
      >
        {ruleDescription.split("\n").map((line, index) => {
          return (
            <p
              className={`lg:text-xl ${ruleDescription.includes("\n") && "mb-3"}`}
              key={index}
              id={`${id}-text-${index}`}
            >
              {line}
            </p>
          );
        })}
      </div>
    </section>
  );
};
