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
      <main className="flex flex-col flex-grow items-center py-5 lg:py-10 gap-y-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl">
          Pravidla voleného mariáše
        </h1>
        <RuleCard
          ruleTitle="Co je to Mariáš?"
          ruleDescription={`Mariáš je tradiční karetní hra, která se těší velké oblibě zejména v Česku, na Slovensku, v Rakousku a Německu.\n
            Jde o strategickou karetní hru pro tři hráče, kde se jeden hráč (tzv. povinnost) postaví proti dvojici soupeřů (obrana).\n
		        Cílem hry je získat co nejvíce bodů prostřednictvím štychů.`}
        ></RuleCard>
        <RuleCard
          ruleTitle="Základní Pravidla"
          ruleDescription={`Barvit – pokud hráč může hrát vynesenou barvu, tak se jí musí držet. Pokud ji nemá, je nucen hrát Trumf. Pokud nemá ani trumf, může hrát 	jakoukoli kartu, avšak již nemá možnost sebrání štychu.\n
          Přebíjet – pokud hráč může přebít nejvyšší kartu ve Štychu, musí ji zahrát.\n
          Trumfy - Trumfy jsou karty dané barvy, které jsou silnější než ostatní karty. Nejslabší trumfová karta je silnější než kterékoliv jiná netrumfová karta, a proto 	přebije i Esa. \n
          Hra se dělí na podružná „kola“, během kterých po směru hodinových ručiček jednotliví hráči odhodí vždy jednu kartu. Hráč, který sebere Štych, začíná další a pokládá 	první kartu, která určuje vynesenou barvu.`}
        ></RuleCard>
        <RuleCard
          ruleTitle="Rozdávání karet"
          ruleDescription={`Hráč co míchá karty po zamíchání karet dá před hráčeč po pravici karty. Ten s nimi má 2 možnosti. Kopnout balíček kde chce nebo poklepat balíček.\n
          Při kopnutí balíčku si vezme hráč karty zpět a rozdává je po směru hodinových ručiček. První dá 7 karet hráči po levici (povinnosti) a potom rozdá zbytek balíčku po 5 kartách po směru hodinových ručiček. \n
          Při poklepání balíčku hráč rozdá 7 a 5 karet povinnosti, 10 karet po pravici a 10 karet sobě.`}
        ></RuleCard>
        <RuleCard
          ruleTitle="Vybírání trumfů a shození talonu"
          ruleDescription="Hráč na povinnosti si z prvních 7 karet, co dostal vybere trumf. Vybraný trumf dá před sebe lícem dolů. Dobere si zbylích 5 karet a 2 karty shodí lícem dolů do talonu. 
        V talonu nesmí být žádné desítky, Esa a trumfy. Jedinou výjimkou, kdy se můžou shodit trumfy, je kdyby se musela shodit desítka nebo Eso."
        ></RuleCard>
        <RuleCard
          ruleTitle="Typy her"
          ruleDescription={`Jakmile všichni mají v ruce své karty (2 v talonu a 1 reprezentující Trumfy před Povinností), začíná první fáze ptaní se. Povinnost se ptá hráčů po směru hodinových ručiček „Barva?“ na typ hry, kterou chtějí 	hrát. V této fázi může kdokoliv, i Povinnost (v tu chvíli se neptá, ale hráč koná před ostatními), dobrat si talon a tím změnit typ hry.\n
          Malý - také zvaný Žebrák nebo Betl. Hodnota karet jde podle posloupnosti od 7 po Eso. Nehraje se zde na body. Trumfy zde nejsou. Hráč, co sebral talon, vynáší jako první a říká, že nevezme ani jeden Štych. Při sebrání, byť jen 	jednoho, prohrává tuto hru. \n
          Velký – také zvaný Durch. Stejně jako u Malého, hodnota karet jde podle posloupnosti od 7 po Eso. Nehraje se zde na body. Trumfy zde nejsou Avšak zde říká, že vezme každý Štych. Při prohrání, byť jen jednoho, prohrává tuto hru.\n
          Pokud kterýkoli hráč sebere talon, staví se tím proti ostatním dvěma. Ti zase tvoří spolu tým, který se ho snaží chytit. \n
          Při opovězení otázky „Barva? Dobrá“ se ponechává základní rozložení rolí a hraje se tak normální hra. Povinnost ukazuje svoji Trumfovou kartu a ptá se Obrany, zda chtějí jít na hru. V této variantě se tak hraje na body. Karty jsou řazeny postupně s tím že desítka se přesouvá mezi Krále a Eso.`}
        ></RuleCard>
        <RuleCard
          ruleTitle="Počítání bodů"
          ruleDescription={`Hláška - pokud má hráč na ruce Vršek a Krále od stejné barvy. Kdykoli dojde k zahrání jedné z těchto karet, hráč položí jen jednou jednoho z nich na svou hromádku (lícem nahoru) - obvykle je to Vršek\n
            Body se počátají jen u normální hry. Body se sečtou body a vyhodnotí se vítězství.\n
            - Každá desítka a eso ve štychu jsou za 10 bodů.\n
            - Ten kdo sebral poslední štych získává 10 bodů, hra nemůže tak skončit s vyrovnanými body.\n
            - Normální hláška je za 20 bodů.\n
            - Trumfová hláška je za 40 bodů.\n`}
        ></RuleCard>
        <RuleCard
          ruleTitle="Cenění her"
          ruleDescription={`Hlášení - Při normální hře má jak povinnost tak obrana možnost zahlásit Sedmu nebo Kilo, aby si tak zvýšila sazbu ze hry.\n
          Flekování - Po zahlášení, může obrana „fleknout“ jakoukoliv kategorii, co Povinnost zahlásí a zdvojnásobí tak cenu za danou kategorii. Může tím tedy napadnout jak Typ hry tak hlášení. Jestliže Obrana „flekne“ jakoukoliv kategorii, má Povinnost právo si danou kategorii „fleknout“ znovu a tím tak opět zdvojnásobit její hodnotu.\n`}
        ></RuleCard>
        <RuleCard
          ruleTitle="Sazba"
          ruleDescription={`
          - 1 korunu jako základní sazbu.\n
          - 2 koruny za tichou Sedmu.\n
          - 2 koruny za tiché Kilo.\n
          - 4 koruny za hlášenou Sedmu.\n
          - 4 koruny za hlášené Kilo.\n
          - 1 koruna za každých 10 bodů nad 100.\n
          - 5 korun za Malého neboli Betl.\n
          - 10 korun za Velkého neboli Durch.\n
          - Pokud byly trumfy v srdcích, tak se vše dvojnásobí.`}
        ></RuleCard>
      </main>
      <SpeedInsights />
    </>
  );
};

export default Page;
