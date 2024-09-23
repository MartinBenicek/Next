import Image from "next/image";
import { useEffect, useState } from "react";

const Card = ({
  name,
  suit,
  click,
}: {
  name: string;
  suit: string;
  click: boolean;
}) => {
  const [clicked, setClicked] = useState(false);
  useEffect(() => {
    setClicked(false);
  }, [click]);
  return (
    <li
      className={`relative h-32 w-24 shadow-2x ${clicked ? `grayscale` : ``}`}
      onClick={() => setClicked(!clicked)}
    >
      <div
        className={`absolute w-full h-full rounded-2xl ${clicked ? `opacity-50 bg-stone-400` : ``} grayScaler opacity-50 z-10`}
      ></div>
      <Image
        src={`/img/cards/nicubunu_White_deck_${name}_of_${suit}.svg`}
        alt={name}
        fill={true}
      ></Image>
    </li>
  );
};

export default Card;
