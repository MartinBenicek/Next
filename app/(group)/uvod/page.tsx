import { RuleCard } from "@/components/ruleCard";
import React from "react";
const Page = () => {
  return (
    <main className="flex flex-col flex-grow items-center lg:py-10 gap-y-8">
      <RuleCard ruleTitle="Definice" ruleDescription="Trumf - "></RuleCard>
      <RuleCard
        ruleTitle="Rozdělení hráčů"
        ruleDescription="Na začátku první hry začne náhodný hráč máchat karty. Hráč na pravé straně je nyní jeho spoluhráč. Hráč po levé straně je proti nim."
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
  );
};

export default Page;
