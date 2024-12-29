import React, { useEffect, useState } from "react";

const ButtonBox = ({
  id,
  minimum,
  numberValue,
  styles,
  show,
}: {
  id: string;
  minimum: number;
  numberValue: number;
  styles: string;
  show: boolean;
}) => {
  const [value, setValue] = useState(minimum);
  const handleIncrease = () => {
    setValue(value + numberValue);
  };

  useEffect(() => {
    if (!show) {
      setValue(minimum);
    }
  }, [show]);

  const handleDecrease = () => {
    setValue(Math.max(value - numberValue, minimum));
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = parseInt(e.target.value, 10) || 0;
    if (minimum === 100) {
      if (value < minimum) {
        value = minimum;
      } else {
        value = Math.round(value / 10) * 10;
      }
    }
    setValue(value);
  };
  return (
    <div
      className={`grid grid-cols-3 grid-rows-2 items-center gap-1 ${styles}`}
    >
      <label className="relative h-full w-12 block content-[''] border-2 border-black border-solid rounded-md row-span-2 col-span-2">
        <input
          type="number"
          min={`${minimum}`}
          className="absolute inset-0 rounded-md p-1 outline-none"
          value={value}
          onChange={handleChange}
          id={id}
        />
      </label>
      <button
        onClick={handleIncrease}
        className="border-2 border-black border-solid rounded-md col-start-3 row-start-1 text-xs"
      >
        +
      </button>
      <button
        onClick={handleDecrease}
        className="border-2 border-black border-solid rounded-md col-start-3 row-start-2 text-xs"
      >
        -
      </button>
    </div>
  );
};

export default ButtonBox;
