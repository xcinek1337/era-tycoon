import { ChevronLeft, ChevronRight, UnfoldHorizontal } from "lucide-react";
import { useState } from "react";
import type { SelectScenarioProps } from "../../game-core/types";
import { factories } from "../../game-core/gameScenario";

const SelectFactory = ({ handleSelect, state }: SelectScenarioProps) => {
  const [index, setIndex] = useState<number>(0);
  const capitalize = (str: string) =>
    str.charAt(0).toUpperCase() + str.slice(1);
  if (state?.selectedEra == undefined) {
    console.error("error");
    return;
  }
  const avaliableFactories = factories.filter((factory) =>
    factory.eras.includes(state?.selectedEra)
  );
  console.log(avaliableFactories);

  const handleClick = (direction: string) => {
    if (direction === "R" && index < avaliableFactories.length - 1) {
      console.log("s");

      setIndex((prev) => prev + 1);
    } else if (direction === "R" && index === avaliableFactories.length - 1) {
      setIndex(0);
    }
    if (direction === "L" && index !== 0) {
      setIndex((prev) => prev - 1);
    }
  };
  return (
    <>
      <h3 className="text-4xl md:text-5xl text-center font-bold text-[#382b22]">
        Select factory
      </h3>
      <div className="flex justify-center items-center">
        <ChevronLeft
          onClick={() => handleClick("L")}
          className="cursor-pointer"
        />
        <div className="flex flex-col justify-between items-center">
          <img
            className="w-40"
            src={`/factories/${avaliableFactories[index]}.jpg`}
            alt={avaliableFactories[index].name}
            onClick={() => handleSelect(avaliableFactories[index].name)}
          />
          <p>{capitalize(avaliableFactories[index].name)}</p>
        </div>

        <ChevronRight
          onClick={() => handleClick("R")}
          className="cursor-pointer"
        />
      </div>
    </>
  );
};

export default SelectFactory;
