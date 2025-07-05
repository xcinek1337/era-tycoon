import React, { useState } from "react";
import SelectEra from "./molecules/SelectEra";
import SelectRegion from "./molecules/SelectRegion";
import SelectFactory from "./molecules/SelectFactory";
import type { Factory, GameState, Region, Era } from "../game-core/types";

const ChoosingState = ({
  setState,state
}: {
  setState: React.Dispatch<React.SetStateAction<GameState | null>>,state:GameState | null;
}) => {
  const [step, setStep] = useState<number>(0);

  const handleSelectEra = (era: Era) => {
  setStep(1);
  setState(prev => prev ? { ...prev, selectedEra: era } : prev);
};

const handleSelectRegion = (region: Region) => {
  setStep(2);
  setState(prev => prev ? { ...prev, selectedRegion: region } : prev);
};

const handleSelectFactory = (factory: Factory) => {
  setStep(3);
  setState(prev => prev ? { ...prev, selectedFactory: factory } : prev);
};

  //
  return (
    <div className="border-[3px] w-full sm:w- shadow-[5px_6px_0px] bg-amber-50 rounded-3xl p-4">
      {step == 0 && <SelectEra handleSelect={handleSelectEra} />}
      {step == 1 && <SelectRegion  state={state} handleSelect={handleSelectRegion} />}
      {step == 2 && <SelectFactory state={state} handleSelect={handleSelectFactory} />}
    </div>
  );
};

export default ChoosingState;
