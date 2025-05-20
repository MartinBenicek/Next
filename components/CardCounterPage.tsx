"use client";
import { cards } from "@/constants";
import { SpeedInsights } from "@vercel/speed-insights/next";
import React, { useState } from "react";
import Card from "./Card";

const CardCounterPage = () => {
  const [click, setClick] = useState(false);
  const restart = () => {
    setClick(!click);
  };
  return (
    <>
      <main className="py-[4vh]">
        <div className="flex flex-col items-center justify-center gap-5">
          <h1 className="text-3xl md:text-4xl lg:text-5xl">Počítání karet</h1>
          <div className="relative group underline decoration-dotted">
            <p>Nápověda</p>
            <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-48 lg:w-96 p-2 z-10 bg-gray-800 text-white text-sm rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              Tato sekce slouží k počítání karet co byly během hry odehrány, aby
              se nemuseli počítat v hlavě. Je určna hlavně pro začátečníky.
              <br />
              <br />
              Jak používat počítání karet: <br />
              <br />
              Restart: Tlačítko restart zbarví všechny karty na neodehrané.
              <br />
              <br />
              Kliknutí na kartu: Při klinutí na kartu se karta zbarví šedě jako
              odehraná. Při mylném kliknutí lze na kartu kliknout znovu aby byla
              jako neodehraná.
            </div>
          </div>
        </div>
        <section className="grid grid-cols-2 sm:grid-cols-4 justify-items-center py-5 lg:flex lg:flex-col lg:flex-grow lg:gap-5 lg:justify-center lg:items-center">
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
        </section>
      </main>
      <SpeedInsights />
    </>
  );
};

export default CardCounterPage;
