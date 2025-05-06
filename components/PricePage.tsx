"use client";
import { useState } from "react";
import ButtonSegment from "@/components/ButtonSegment";
import CenaText1, {
  CenaText2,
  CenaText3,
  CenaText4,
} from "@/components/CenaText";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Calculate from "@/components/Calculate";
import { User } from "next-auth";

export type VisibilityKeys =
  | "Hra"
  | "Sedma"
  | "Kilo"
  | "Betl"
  | "Durch"
  | "V-srdcich";

const PricePage = ({
  user,
  history,
}: {
  user: User | undefined;
  history: boolean;
}) => {
  const [show, setShow] = useState({
    Hra: false,
    Sedma: false,
    Kilo: false,
    Betl: false,
    Durch: false,
    "V-srdcich": false,
  });

  const getData = (id: VisibilityKeys) => {
    const visibilityRules = {
      Hra: { Betl: false, Durch: false },
      Sedma: { Hra: true, Betl: false, Durch: false },
      Kilo: { Hra: true, Betl: false, Durch: false },
      Betl: {
        Hra: false,
        Sedma: false,
        Kilo: false,
        Durch: false,
        "V-srdcich": false,
      },
      Durch: {
        Hra: false,
        Sedma: false,
        Kilo: false,
        Betl: false,
        "V-srdcich": false,
      },
      "V-srdcich": { Hra: true, Betl: false, Durch: false },
    };

    const visibility = visibilityRules[id];
    setShow((s) => {
      if (!s[id]) {
        return {
          ...s,
          ...visibility,
          [id]: true,
        };
      } else {
        return {
          ...s,
          [id]: false,
        };
      }
    });
  };

  const styles =
    "lg:row-start-1 lg:row-end-7 grid lg:grid-rows-5 h-full justify-items-center items-center";
  return (
    <>
      <main className="flex flex-grow flex-col items-center justify-center gap-12 md:gap-14 lg:gap-5 py-[4vh]">
        <div className="flex items-center gap-5">
          <h1 className="text-3xl md:text-4xl lg:text-5xl">Výpočet ceny</h1>
          <div className="relative group">
            <span className="text-xl font-bold cursor-default">?</span>
            <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-48 lg:w-96 p-2 z-10 bg-gray-800 text-white text-sm rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              Jak použít výpočet ceny: <br />
              <br />
              Typ hry: Zaškrknete si co se všechno bylo odehrálo ve hře. Ke
              každé sekci vyjou údaje kdo uhrál danou kategorii, co bylo
              flekováno případě hlášeno a u kila kolik bodů odehráno. <br />
              Hlášeno: Jestli že byla odehrána sedma nebo stovka tak je
              automaticky tichá, při zaškrnutí tlačítka hlášeno se změní že byla
              hlášená. <br />
              Fleknuto: Zapíše se kolikrát byl daný typ hry flekován. <br />
              Uhrál: Zde se zapíše kdo danou kategorii uhrál (levé tlačítko je
              pro povinnost a pravé pro obrannu). <br />
              Uhrané body: Zde se zapíše kolik bodů bylo uhráno u kila. <br />
            </div>
          </div>
        </div>
        <section className="lg:h-[40vh]">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 grid-rows-19 sm:grid-rows-12 md:grid-rows-8 lg:grid-rows-5 justify-items-center items-center h-full gap-x-5 gap-y-12 sm:gap-y-16 md:gap-y-10 lg:gap-0">
            <CenaText1 divStyles="md:row-start-1 md:row-end-6 h-full hidden md:grid md:grid-rows-5 items-center"></CenaText1>
            <CenaText2 divStyles="h-full sm:hidden grid grid-rows-3 row-span-3 items-center"></CenaText2>
            <CenaText3 divStyles="h-full hidden sm:grid grid-rows-4 row-span-4 items-center md:hidden"></CenaText3>
            <ButtonSegment
              styles={`lg:col-start-2 ${styles} row-span-3 grid-rows-3 sm:row-span-4 sm:grid-rows-4 md:row-span-5 md:grid-rows-5`}
              id="Hra"
              show={show.Hra}
              info={getData}
            ></ButtonSegment>
            <CenaText3 divStyles="h-full sm:hidden grid grid-rows-4 row-span-4 items-center"></CenaText3>
            <ButtonSegment
              styles={`lg:col-start-3 ${styles} row-span-4 grid-rows-4 md:row-span-5 md:grid-rows-5`}
              id="Sedma"
              show={show.Sedma}
              info={getData}
            ></ButtonSegment>
            <CenaText1 divStyles="h-full md:hidden grid grid-rows-5 row-span-5 items-center"></CenaText1>
            <ButtonSegment
              styles={`lg:col-start-4 ${styles} row-span-5 grid-rows-5`}
              id="Kilo"
              show={show.Kilo}
              info={getData}
            ></ButtonSegment>
            <CenaText2 divStyles="h-full grid sm:hidden md:grid lg:hidden grid-rows-3 row-span-3 items-center md:gap-10"></CenaText2>
            <ButtonSegment
              styles={`lg:col-start-5 ${styles} row-span-3 grid-rows-3 sm:row-span-5 sm:grid-rows-5 md:row-span-3 md:grid-rows-3 md:gap-y-10 lg:gap-0`}
              id="Betl"
              show={show.Betl}
              info={getData}
            ></ButtonSegment>
            <CenaText2 divStyles="h-full md:hidden grid grid-rows-3 row-span-3 items-center sm:gap-6"></CenaText2>
            <ButtonSegment
              styles={`lg:col-start-6 ${styles} row-span-3 grid-rows-3 sm:gap-y-6 md:gap-0 md:gap-y-10 lg:gap-0`}
              id="Durch"
              show={show.Durch}
              info={getData}
            ></ButtonSegment>
            <CenaText4 divStyles="h-full sm:hidden grid grid-rows-1 items-center justify-self-start"></CenaText4>
            <ButtonSegment
              styles={`lg:col-start-7 ${styles} grid sm:grid-rows-3 sm:col-start-3 sm:row-span-3 lg:row-start-1 sm:gap-y-6 md:gap-0 md:row-start-6 md:col-start-4 md:gap-y-10 lg:gap-0`}
              id="V-srdcich"
              show={show["V-srdcich"]}
              info={getData}
            ></ButtonSegment>
          </div>
        </section>
        <Calculate user={user} cookieHistory={history} />
      </main>
      <SpeedInsights />
    </>
  );
};

export default PricePage;
