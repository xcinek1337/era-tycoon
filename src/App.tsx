import { useState } from "react";
import type { GameState } from "./game-core/types";
// import runTurn from "./game-core/engine";
import ChoosingState from "./components/organism/ChoosingStage";
import StartScreen from "./components/organism/StartScreen";
import { Gauge, Lightbulb, Users, Wrench } from "lucide-react";
import ActionButtons from "./components/molecules/ActionButtons";

function App() {
  const [start, setStart] = useState<boolean>(true);
  const [state, setState] = useState<GameState | null>(null);

  // function handleClick() {
  //   if (typeof state === "object" && state !== null) {
  //     // state istnieje i jest obiektem
  //     const nextRound = runTurn(state, "hire worker");

  //     setState(nextRound);
  //   }
  // }
  function handleStart() {
    setState({
      selectedEra: "steam",
      selectedFactory: "",
      actionPoints: 1,
      selectedRegion: "village in Poland",
      availableActions: ["none"],
      eventLog: [""],
      factoryStats: {
        efficiency: 1,
        employees: 1,
        machines: 0,
        maintance: 0,
      },
      playerDecisions: [],
      turn: 0,
    });
    setStart(false);
    console.log("sss");
  }
  console.log(state);

  return (
    <div className="w-full h-full bg-[url('/old_map.png')] bg-cover bg-no-repeat bg-center overflow-hidden">
      <div className="flex flex-col mx-auto px-6 max-w-[1024px] h-full justify-center items-center gap-20">
        {start && <StartScreen />}
        {!start && !state?.selectedFactory && (
          <ChoosingState state={state} setState={setState} />
        )}

        {!start && state?.selectedFactory && (
          <div className="border-[3px] w-full sm:w- shadow-[5px_6px_0px] bg-amber-50 rounded-3xl p-4">
            <h1 className="text-4xl md:text-5xl text-center font-bold text-[#382b22]">
              ERA TYCOON
            </h1>

            <div className="my-3 flex justify-center gap-10">
              <span className="flex gap-2 font-bold text-lg"> <Lightbulb size={30}/>{state.actionPoints}</span>
              <span className="flex gap-2 font-bold text-lg"><Wrench size={30}/>{state.factoryStats.machines}</span>
              <span className="flex gap-2 font-bold text-lg"> <Users size={30}/>{state.factoryStats.employees}</span>
              <span className="flex gap-2 font-bold text-lg"><Gauge size={30}/>{state.factoryStats.efficiency}</span>
            </div>

            <img  className="m-auto rounded-4xl w-60" src="/slide0.jpg" alt="factory picture" />
            <ActionButtons selectedFactory={state.selectedFactory} />
          </div>
        )}
        {start && (
          <button onClick={handleStart} className="btn-start py-6 px-24">
            Start <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>
        )}
      </div>
    </div>
  );
}

export default App;

{
  /* {!start ? (
  <button onClick={handleStart}>Textile mill</button>
) : (
  <div>
    <button onClick={handleClick}>Skip Turn</button>
    {state?.availableActions.map((action) => {
      return <button>{action}</button>;
    })}
  </div>
)} */
}
