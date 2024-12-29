import React, { useState } from "react";

interface GameData {
  buttonData: HTMLElement | null;
  flekData?: HTMLElement | null;
  statusInfo?: string | null;
  flekInfo?: string | null;
  hlasenaData?: HTMLElement | null;
  hlasenaInfo?: boolean | null;
  winner?: boolean[];
  price?: number;
  pocetBodu?: string;
}

type GetDataResult = GameData[] | [false, string];

function Calculate() {
  const [result, setResult] = useState("");
  const getData = (): GetDataResult => {
    const Srdce = document.getElementById("V-srdcich");
    const gameArray: GameData[] = [
      {
        buttonData: document.getElementById("Hra"),
        flekData: document.getElementById("Hra-flek"),
        statusInfo: null,
        flekInfo: null,
        winner: [
          (document.getElementById("povinnost-Hra") as HTMLInputElement)
            .checked,
          (document.getElementById("obrana-Hra") as HTMLInputElement).checked,
        ],
        price: 1,
      },
      {
        buttonData: document.getElementById("Sedma"),
        flekData: document.getElementById("Sedma-flek"),
        hlasenaData: document.getElementById("hlaseno-Sedma"),
        statusInfo: null,
        flekInfo: null,
        hlasenaInfo: null,
        winner: [
          (document.getElementById("povinnost-Sedma") as HTMLInputElement)
            .checked,
          (document.getElementById("obrana-Sedma") as HTMLInputElement).checked,
        ],
        price: 2,
      },
      {
        buttonData: document.getElementById("Kilo"),
        flekData: document.getElementById("Kilo-flek"),
        hlasenaData: document.getElementById("hlaseno-Kilo"),
        pocetBodu: (document.getElementById("game-points") as HTMLInputElement)
          .value,
        statusInfo: null,
        flekInfo: null,
        hlasenaInfo: null,
        winner: [
          (document.getElementById("povinnost-Kilo") as HTMLInputElement)
            .checked,
          (document.getElementById("obrana-Kilo") as HTMLInputElement).checked,
        ],
        price: 2,
      },
      {
        buttonData: document.getElementById("Betl"),
        flekData: document.getElementById("Betl-flek"),
        statusInfo: null,
        flekInfo: null,
        winner: [
          (document.getElementById("povinnost-Betl") as HTMLInputElement)
            .checked,
          (document.getElementById("obrana-Betl") as HTMLInputElement).checked,
        ],
        price: 5,
      },
      {
        buttonData: document.getElementById("Durch"),
        flekData: document.getElementById("Durch-flek"),
        statusInfo: null,
        flekInfo: null,
        winner: [
          (document.getElementById("povinnost-Durch") as HTMLInputElement)
            .checked,
          (document.getElementById("obrana-Durch") as HTMLInputElement).checked,
        ],
        price: 10,
      },
      { buttonData: Srdce, statusInfo: null },
    ];
    console.log(gameArray);

    for (let i = 0; i < gameArray.length; i++) {
      const buttonData = gameArray[i].buttonData as HTMLElement | null;
      const flekData = gameArray[i].flekData as HTMLInputElement | null;

      if (!buttonData) continue;
      const statusTmp = buttonData.getAttribute("data-selected");

      if (statusTmp === "false") continue;

      if (gameArray[i].winner?.every((value) => value === false)) {
        return [false, gameArray[i].buttonData?.id || ""];
      }

      gameArray[i].statusInfo = statusTmp;

      if (buttonData !== Srdce && flekData) {
        let flekTmp = flekData.value;
        gameArray[i].flekInfo = flekTmp;
      }
      if (gameArray[i].hasOwnProperty("hlasenaData")) {
        const hlasenaData = gameArray[i].hlasenaData as HTMLInputElement | null;
        if (hlasenaData) {
          gameArray[i].hlasenaInfo = hlasenaData.checked;
        }
      }
    }
    return gameArray;
  };
  const calculateResult = () => {
    let data = getData();
    if (data[0] === false) {
      setResult(`Nezadali jste ${data[1]} vítěze`);
      return;
    }

    data = data as GameData[];

    let povinnostPrice = 0;
    let obranaPrice = 0;

    for (let i = 0; i < data.length - 1; i++) {
      let tmp = data[i].statusInfo;
      let tmpPrice;
      if (tmp === null) {
        continue;
      }

      const flekValue = parseInt(data[i].flekInfo || "0", 10);
      tmpPrice = data[i].price! * Math.pow(2, flekValue);

      if (
        data[i].hasOwnProperty("hlasenaData") &&
        data[i].hlasenaInfo === true
      ) {
        tmpPrice = tmpPrice * 2;
      }

      const pocetBodu = parseInt(data[i].pocetBodu || "0", 10);
      if (data[i].hasOwnProperty("pocetBodu") && pocetBodu > 100) {
        let nadKilo = pocetBodu - 100;
        nadKilo /= 10;
        tmpPrice += nadKilo;
      }
      if (data[i].winner?.[0] === true && data[i].winner?.[1] === false) {
        povinnostPrice += tmpPrice;
      } else if (
        data[i].winner?.[0] === false &&
        data[i].winner?.[1] === true
      ) {
        obranaPrice += tmpPrice;
      }
    }

    let finalPrice = povinnostPrice - obranaPrice;
    if (data[5].statusInfo === "true") {
      finalPrice = finalPrice * 2;
    }
    let calculateOutput;
    if (finalPrice > 0) {
      calculateOutput = "Povinnost dostává " + finalPrice + " od každého";
    } else if (finalPrice === 0) {
      calculateOutput = "Je to remíza";
    } else {
      finalPrice = finalPrice * -1;
      calculateOutput = "Povinnost dává " + finalPrice + " každému";
    }
    setResult(calculateOutput);
  };
  return (
    <div className="flex flex-col items-center gap-6 pt-8 md:pt-0">
      <button
        className="border-2 border-orange-500 bg-orange-300 lg:hover:bg-orange-500 cursor-default border-solid rounded-md w-32 h-10"
        onClick={calculateResult}
      >
        Vypočítat
      </button>
      <p>Výsledek: {result}</p>
    </div>
  );
}

export default Calculate;
