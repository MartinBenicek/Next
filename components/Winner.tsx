import { useEffect, useState } from "react";

const initialState = {
  povinnost: false,
  obrana: false,
};

const Winner = ({ id, show }: { id: string; show: boolean }) => {
  const [isChecked, setIsChecked] = useState(initialState);

  useEffect(() => {
    if (!show) {
      setIsChecked(initialState);
    }
  }, [show]);

  const handlePovinnostClick = () => {
    setIsChecked({ povinnost: true, obrana: false });
  };
  const handleObranaClick = () => {
    setIsChecked({ povinnost: false, obrana: true });
  };
  return (
    <div
      className={`${id === "Hra" ? "row-start-2 sm:row-start-3" : ""} ${id === "Betl" ? "row-start-2 sm:row-start-3 md:row-start-2" : ""} ${id === "Durch" ? "row-start-2 sm:pt-3 md:pt-0" : ""} lg:row-start-3 flex justify-between w-full`}
    >
      <label
        className={`lg:hover:bg-checkboxGreenhover cursor-pointer block h-7 w-7 border-2 border-black border-solid content-[''] rounded-md
          ${isChecked.povinnost && "bg-checkboxGreen"}`}
      >
        <input
          type="checkbox"
          className="hidden"
          id={`povinnost-${id}`}
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
          id={`obrana-${id}`}
          checked={isChecked.obrana}
          onChange={handleObranaClick}
        />
      </label>
    </div>
  );
};

export default Winner;
