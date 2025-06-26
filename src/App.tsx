import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import type { GameState } from "./game-core/types";
import runTurn from "./game-core/engine";

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
    <>
      <div className="card">
        <div className="card">
          {!start ? (
            <button onClick={handleStart}>Textile mill</button>
          ) : (
            <div>
            <button onClick={handleClick}>Skip Turn</button>
            {state?.availableActions.map(action => {
              return (
                <button>{action}</button>
              )
            })}
            </div>
          )}
        </div>
      </div>    
    </>
  );
}

export default App;
