import { RuleCard } from "@/components/ruleCard";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Pravidla Mariáše",
  description: "Přehled pravidel voleného Mariáše.",
};

const Page = () => {
  return (
    <>
      <main className="flex flex-col flex-grow items-center py-[4vh] lg:py-10 gap-y-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl">
          Pravidla voleného mariáše
        </h1>
        <RuleCard
          ruleTitle="Definice"
          ruleDescription={`Hláška - Kombinace vrška a krále, která přidá 20 bodů\n
            Trumf - Trumfy jsou karty dané barvy, které jsou silnější než ostatní karty. Nejslabší trumfová karta je silnější než kterékoliv jiná netrumfová karta, a proto přebije i esa. Trumfová hláška je hodnotnější, a je tak za 40 bodů`}
        ></RuleCard>
        <RuleCard
          ruleTitle="Rozdělení hráčů"
          ruleDescription="Na začátku sezení jeden z hráčů vezme karty a zamíchá je. Tento hráč míchá a zároveň rozdává karty, jeho role je rozdávající. Až rozdávající domíchá, tak položí karty před hráče po jeho pravici. Tento hráč je zadák. Ten může karty kopnout nebo poklepat. Po levici rozdávajícího je povinnost. Ten určije trumfy a hraje proti rozdávajícímu a zadákovi"
        ></RuleCard>
        <RuleCard
          ruleTitle="Rozdávání karet"
          ruleDescription="Hráč co míchá karty po zamíchání karet dá před hráčeč po pravici karty. Ten s nimi má 2 možnosti. Kopnout balíček kde chce nebo poklepat balíček.
        Při kopnutí balíčku si vezme hráč karty zpět a rozdává je po směru hodinových ručiček. První dá 7 karet povinnosti a potom rozdá zbytek balíčku po 5 kartách po směru hodinových ručiček.
        Při poklepání balíčku hráč rozdá 7 a 5 karet povinnosti, 10 karet po pravici a 10 karet sobě."
        ></RuleCard>
        <RuleCard
          ruleTitle="Vybírání trumfů a shození talonu"
          ruleDescription="Hráč na povinnosti si z prvních 7 karet co dostal vybere trumf. Vybraný trumf dá před sebe lícem dolů. Dobere si zbylích 5 karet a 2 karty shodí lícem dolů do talonu. 
        V talonu nesmí být žádné desítky, esa a trumfy. Jedinou výjimkou kdy se můžou shodit trumfy je kdyby se musela shodit děsítka nebo eso."
        ></RuleCard>
      </main>
      <SpeedInsights />
    </>
  );
};

export default Page;
