"use client";
import Card from "@/components/Card";
import { cards } from "@/constants";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { useState } from "react";

const Page = () => {
  const [click, setClick] = useState(false);
  const restart = () => {
    setClick(!click);
  };
  return (
    <>
      <main className="grid grid-cols-2 sm:grid-cols-4 justify-items-center py-5 lg:flex lg:flex-col lg:flex-grow lg:gap-5 lg:justify-center lg:items-center">
        <button
          onClick={restart}
          className="absolute lg:relative bg-orange-300 rounded-lg h-10 w-20 border-solid border-2 transition-color duration-75 border-orange-500 lg:hover:bg-orange-500 transition-color lg:hover:text-white"
        >
          Restart
        </button>
        {cards.map((suit, index) => (
          <ul
            key={index}
            className={`flex flex-col gap-5 lg:m-0 lg:flex-row lg:p-2 ${index < 2 ? "mt-16" : "mt-5"} sm:mt-16`}
          >
            {suit.map((cards) => (
              <Card
                key={cards.key}
                name={cards.number}
                suit={cards.suit}
                click={click}
              />
            ))}
          </ul>
        ))}
      </main>
      <SpeedInsights />
    </>
  );
};

export default Page;
