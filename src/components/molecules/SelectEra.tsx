import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import type { SelectScenarioProps } from "../../game-core/types";
import { eras } from "../../game-core/gameScenario";


const SelectEra = ({ handleSelect }: SelectScenarioProps) => {
  const [index, setIndex] = useState<number>(0);
  const capitalize = (str: string) =>
    str.charAt(0).toUpperCase() + str.slice(1);

  const handleClick = (direction: string) => {
    if (direction === "R" && index < 2) {
      console.log("s");

      setIndex((prev) => prev + 1);
    } else if (direction === "R" && index === 2) {
      setIndex(0);
    }
    if (direction === "L" && index !== 0) {
      setIndex((prev) => prev - 1);
    }
  };
  return (
    <>
      <h3 className="text-4xl md:text-5xl text-center font-bold text-[#382b22]">
        Select a era
      </h3>
      <div className="flex justify-center items-center">
        <ChevronLeft
          onClick={() => handleClick("L")}
          className="cursor-pointer"
        />
        <div className="flex flex-col justify-between items-center">
          <img
            className="w-40"
            src={`/era/${eras[index]}.jpg`}
            alt={eras[index]}
            onClick={() => handleSelect(eras[index])}
          />
          <p>{capitalize(eras[index])}</p>
        </div>
        <ChevronRight
          onClick={() => handleClick("R")}
          className="cursor-pointer"
        />
      </div>
    </>
  );
};

export default SelectEra;
