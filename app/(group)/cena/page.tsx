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

export type VisibilityKeys =
  | "Hra"
  | "Sedma"
  | "Kilo"
  | "Betl"
  | "Durch"
  | "V-srdcich";

const Page = () => {
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
    setShow((s) => ({
      ...s,
      ...visibility,
      [id]: !s[id],
    }));
  };
  const [toggle, setToggle] = useState(false);
  const handleButtonClick = () => {
    setToggle(!toggle);
  };
  const styles =
    "lg:row-start-1 lg:row-end-7 grid lg:grid-rows-5 h-full justify-items-center items-center";
  return (
    <>
      <main className="flex flex-grow flex-col items-center justify-center gap-12 md:gap-14 lg:gap-12 py-[5vh]">
        <h1 className="text-3xl">Výpočet ceny</h1>
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
        <Calculate />
      </main>
      <SpeedInsights />
    </>
  );
};

export default Page;
