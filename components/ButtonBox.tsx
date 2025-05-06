import React, { useEffect, useState } from "react";

const ButtonBox = ({
  id,
  minimum,
  numberValue,
  styles,
  show,
  initialValue,
}: {
  id: string;
  minimum: number;
  numberValue: number;
  styles: string;
  show: boolean;
  initialValue: number;
}) => {
  const [value, setValue] = useState<number | string>(initialValue);

  const handleIncrease = () => {
    setValue((prev) =>
      typeof prev === "number" ? prev + numberValue : minimum + numberValue
    );
  };

  const handleDecrease = () => {
    setValue((prev) =>
      typeof prev === "number" ? Math.max(prev - numberValue, minimum) : minimum
    );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setValue(inputValue);
  };

  const handleBlur = () => {
    if (value === "") {
      setValue(initialValue);
    }
    if (typeof value === "string" && value !== "") {
      const parsedValue = parseInt(value, 10);

      if (!isNaN(parsedValue)) {
        const roundingFactor = initialValue === 0 ? 1 : 10;
        const adjustedValue = Math.max(parsedValue, minimum);
        setValue(Math.round(adjustedValue / roundingFactor) * roundingFactor);
      } else {
        setValue(minimum);
      }
    }
  };

  useEffect(() => {
    if (!show) {
      setValue(initialValue);
    }
  }, [show]);

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
          onBlur={handleBlur}
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
