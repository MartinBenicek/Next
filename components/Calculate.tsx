import React, { useEffect, useState } from "react";
import { createGame } from "@/app/server actions/games";
import Toggle from "./toggle";
import { User } from "next-auth";

const initialState = {
  povinnost: false,
  obrana: false,
};

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

const Calculate = ({ user }: { user: User | undefined }) => {
  const [result, setResult] = useState("");
  const [toggle, setToggle] = useState(false);
  const [povinnost, setPovinnost] = useState<boolean | null>(null);
  const [isChecked, setIsChecked] = useState(initialState);

  const handlePovinnostClick = () => {
    setIsChecked({ povinnost: true, obrana: false });
    setPovinnost(true);
  };

  const handleObranaClick = () => {
    setIsChecked({ povinnost: false, obrana: true });
    setPovinnost(false);
  };

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

    for (let i = 0; i < gameArray.length; i++) {
      const buttonData = gameArray[i].buttonData as HTMLElement | null;
      const statusTmp = buttonData?.getAttribute("data-selected");
      if (statusTmp === "true") {
        break;
      }
      if (i === gameArray.length - 1) {
        return [false, "Nezadali jste žádnou hru"];
      }
    }

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
  const calculateResult = async () => {
    if (povinnost === null) {
      setResult("Nezvolili jste roli");
      return;
    }
    let data = getData();
    if (data[1] === "Nezadali jste žádnou hru") {
      setResult("Nezadali jste žádnou hru");
      return;
    }

    if (data[0] === false) {
      setResult(`Nezadali jste ${data[1]} vítěze`);
      return;
    }

    data = data as GameData[];

    let povinnostPrice = 0;
    let obranaPrice = 0;
    let TypHry = "";
    let body = 0;
    let hlaseno = "ne";

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
        hlaseno = "ano";
      }

      const pocetBodu = parseInt(data[i].pocetBodu || "0", 10);
      body = pocetBodu >= 100 ? pocetBodu : 0;

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
    let dataPrice;
    if (data[5].statusInfo === "true") {
      finalPrice = finalPrice * 2;
    }
    let calculateOutput;

    if (!user) {
      if (finalPrice > 0) {
        calculateOutput = "Povinnost dostává " + finalPrice + " od každého";
      } else if (finalPrice === 0) {
        calculateOutput = "Je to remíza";
      } else {
        finalPrice = finalPrice * -1;
        calculateOutput = "Povinnost dává " + finalPrice + " každému";
      }
      setResult(calculateOutput);
    } else {
      if (finalPrice > 0 && povinnost) {
        calculateOutput = "Dostáváte " + finalPrice + " od každého";
        dataPrice = finalPrice * 2;
      } else if (finalPrice > 0 && !povinnost) {
        calculateOutput = "Dáváte " + finalPrice + " povinnosti";
        dataPrice = finalPrice * -1;
      } else if (finalPrice < 0 && povinnost) {
        finalPrice = finalPrice * -1;
        calculateOutput = "Dáváte " + finalPrice + " každému";
        dataPrice = finalPrice * -2;
      } else if (finalPrice < 0 && !povinnost) {
        finalPrice = finalPrice * -1;
        calculateOutput = "Dostáváte " + finalPrice + " od povinnosti";
        dataPrice = finalPrice;
      } else {
        calculateOutput = "Je to remíza";
        dataPrice = 0;
      }
      setResult(calculateOutput);
    }

    if (data[1].statusInfo === "true" && data[2].statusInfo === "true") {
      TypHry = "Stosedm";
    } else if (data[1].statusInfo === "true") {
      TypHry = "Sedma";
    } else if (data[2].statusInfo === "true") {
      TypHry = "Kilo";
    } else if (data[0].statusInfo === "true") {
      TypHry = "Hra";
    } else if (data[3].statusInfo === "true") {
      TypHry = "Betl";
    } else if (data[4].statusInfo === "true") {
      TypHry = "Durch";
    }

    if (toggle && user) {
      createGame(dataPrice || 0, TypHry, body, hlaseno);
    }
  };

  return (
    <div className="flex flex-col items-center gap-7 pt-8 md:pt-0">
      {user && (
        <>
          <div className="flex flex-col sm:flex-row justify-center gap-5 sm:gap-10 md:gap-28 lg:gap-40 text-xl">
            <div className="flex flex-col justify-between items-center space-y-5">
              <h2>Zapisovat do historie</h2>
              <Toggle toggled={toggle} onToggle={setToggle} />
            </div>
            <div className="text-center">
              <h2>Vaše role</h2>
              <p className="text-xs">Povinnost/obrana</p>
              <div className="flex justify-center gap-5 pt-5">
                <label
                  className={`lg:hover:bg-checkboxGreenhover cursor-pointer block h-7 w-7 border-2 border-black border-solid content-[''] rounded-md
                  ${isChecked.povinnost && "bg-checkboxGreen"}`}
                >
                  <input
                    type="checkbox"
                    className="hidden"
                    checked={isChecked.povinnost}
                    onChange={handlePovinnostClick}
                  />
                </label>
                <label
                  className={`${isChecked.obrana && "bg-checkboxGreen"} lg:hover:bg-checkboxGreenhover cursor-pointer block h-7 w-7 border-2 border-black border-solid content-[''] rounded-md`}
                >
                  <input
                    type="checkbox"
                    className="hidden"
                    checked={isChecked.obrana}
                    onChange={handleObranaClick}
                  />
                </label>
              </div>
            </div>
          </div>
        </>
      )}
      <button
        className="border-2 border-orange-500 bg-orange-300 lg:hover:bg-orange-500 cursor-default border-solid rounded-md w-32 h-10"
        onClick={calculateResult}
      >
        Vypočítat
      </button>
      <p>Výsledek: {result}</p>
    </div>
  );
};

export default Calculate;
