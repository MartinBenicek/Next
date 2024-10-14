import { useState } from "react";

const Winner = () => {
  const [isPovinnostChecked, setIsPovinnostChecked] = useState(false);
  const [isObranaChecked, setIsObranaChecked] = useState(false);
  const handlePovinnostClick = () => {
    setIsPovinnostChecked(true);
    setIsObranaChecked(false);
  };
  const handleObranaClick = () => {
    setIsPovinnostChecked(false);
    setIsObranaChecked(true);
  };
  return (
    <div className="row-start-3 flex justify-between w-full">
      <label
        className={`${isPovinnostChecked && "bg-checkboxGreen"} lg:hover:bg-checkboxGreenhover cursor-pointer block h-7 w-7 border-2 border-black border-solid content-[''] rounded-md`}
      >
        <input
          type="checkbox"
          className="hidden"
          checked={isPovinnostChecked}
          onChange={handlePovinnostClick}
        />
      </label>
      <label
        className={`${isObranaChecked && "bg-checkboxGreen"} lg:hover:bg-checkboxGreenhover cursor-pointer block h-7 w-7 border-2 border-black border-solid content-[''] rounded-md`}
      >
        <input
          type="checkbox"
          className="hidden"
          checked={isObranaChecked}
          onChange={handleObranaClick}
        />
      </label>
    </div>
  );
};

export default Winner;
