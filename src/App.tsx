import { useState } from "react";
import type { GameState } from "./game-core/types";
// import runTurn from "./game-core/engine";
import ChoosingState from "./components/ChoosingStage";
import StartScreen from "./components/StartScreen";

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
      selectedFactory: "Textile_Mill",
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
        {!start && <ChoosingState state={state} setState={setState} />}

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
