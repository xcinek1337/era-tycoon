import { useState } from "react";
import type { GameState } from "./game-core/types";
import runTurn from "./game-core/engine";
import Slider from "./components/Slider";

function App() {
  const [start, setStart] = useState<boolean>(false);
  const [state, setState] = useState<GameState | null>(null);

  function handleClick() {
    if (typeof state === "object" && state !== null) {
      // state istnieje i jest obiektem
      const nextRound = runTurn(state, "hire worker");

      setState(nextRound);
    }
  }
  function handleStart() {
    setStart(!start);
    setState({
      selectedEra: "steam",
      selectedFactory: "Textile_Mill",
      actionPoints: 1,
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
  }
  return (
    <div className="w-full h-full bg-[url('/old_map.png')] bg-cover bg-no-repeat bg-center overflow-hidden">
      <div className="flex flex-col mx-auto px-6 max-w-[1024px] h-full justify-center items-center gap-20">
        <div className="border-[3px] shadow-[5px_6px_0px] bg-amber-50 rounded-3xl p-4">
          {!start ? (
            <>
              <h1 className="text-4xl md:text-5xl text-center font-bold text-[#382b22]">
                ERA TYCOON
              </h1>

              <div className="flex justify-center py-5">
                <Slider />
              </div>

              <p className="text-base text-justify md:text-lg text-[#382b22]/80">
                Build your business empire across different historical eras and
                locations. Make strategic decisions, adapt to global events, and
                grow your enterprise from a small factory to an industrial
                giant.
              </p>
            </>
          ) : null}
        </div>

        {!start ? (
          <button onClick={handleStart} className="btn-start">
            Start <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>
        ) : (
          <div className="flex flex-col gap-4">
            <button onClick={handleClick}>Skip Turn</button>
            {state?.availableActions.map((action) => (
              <button key={action}>{action}</button>
            ))}
          </div>
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
