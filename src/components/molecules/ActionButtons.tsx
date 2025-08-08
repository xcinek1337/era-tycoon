import { gameActions } from "../../game-core/gameData";
import type { FactoryName } from "../../game-core/gameScenario";

function ActionButtons({ selectedFactory }: { selectedFactory: FactoryName }) {
  const actionList =
    gameActions[selectedFactory as keyof typeof gameActions] ?? [];
  const random2Actions = [...actionList] // kopia, aby nie modyfikować oryginału
    .sort(() => Math.random() - 0.5) // przetasuj
    .slice(0, 2);
  return (
    <div>
      {random2Actions.map((action) => (
        <button className="btn-start" key={action}>{action}</button>
      ))}
      <button className="btn-start">Skip turn</button>
    </div>
  );
}

export default ActionButtons;
