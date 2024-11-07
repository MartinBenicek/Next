"use client";
import Card from "@/components/Card";
import { heartCards, diamondCards, spadesCards, clubCards } from "@/constants";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { useState } from "react";

const Page = () => {
  const [click, setClick] = useState(false);
  const restart = () => {
    setClick(!click);
  };
  return (
    <>
      <main className="grid grid-rows-2 grid-cols-2 justify-items-center gap-y-5 py-5 sm:flex sm:flex-row sm:justify-evenly lg:flex-col lg:flex-grow lg:justify-center lg:items-center">
        <button
          onClick={restart}
          className="absolute lg:relative bg-orange-300 rounded-lg h-10 w-20 border-solid border-2 transition-color duration-75 border-orange-500 lg:hover:bg-orange-500 transition-color lg:hover:text-white"
        >
          Restart
        </button>
        <ul className="flex flex-col gap-5 mt-16 lg:m-0 lg:flex-row lg:p-2">
          {heartCards.map((card) => (
            <Card
              key={card.key}
              name={card.number}
              suit={card.suit}
              click={click}
            ></Card>
          ))}
        </ul>
        <ul className="flex flex-col gap-5 mt-16 lg:m-0 lg:flex-row lg:p-2">
          {diamondCards.map((card) => (
            <Card
              key={card.key}
              name={card.number}
              suit={card.suit}
              click={click}
            ></Card>
          ))}
        </ul>
        <ul className="flex flex-col gap-5 sm:mt-16 lg:m-0 lg:flex-row lg:p-2">
          {spadesCards.map((card) => (
            <Card
              key={card.key}
              name={card.number}
              suit={card.suit}
              click={click}
            ></Card>
          ))}
        </ul>
        <ul className="flex flex-col gap-5 sm:mt-16 lg:m-0 lg:flex-row lg:p-2">
          {clubCards.map((card) => (
            <Card
              key={card.key}
              name={card.number}
              suit={card.suit}
              click={click}
            ></Card>
          ))}
        </ul>
      </main>
      <SpeedInsights />
    </>
  );
};

export default Page;
