import { gameActions } from "./gameActions";
import { eraEvents, factoryEvents } from "./gameEvents";
import type { GameEvent, GameState } from "./types";

export default function runTurn(state: GameState, action: string): GameState {
  const efficiency: number = calculateEfficiency(state);
  const newAP: number = state.actionPoints + efficiency;
  const newActions: string[] = fnGenerateActions(state);
  const newEvent: GameEvent | undefined = fnTriggerEvent(state) || undefined;

  const updatedState: GameState = {
    ...state,
    turn: state.turn + 1,
    actionPoints: newAP,
    availableActions: newActions,
    playerDecisions: [...state.playerDecisions, action],
    factoryStats: { ...state.factoryStats },
  };

  if (newEvent) {
    return newEvent.apply(updatedState); // działa!
  }
  console.log("zwracam nowy stan", updatedState);
  return updatedState;
}

export function calculateEfficiency(state: GameState): number {
  //   const { machines, employees, efficiency, maintance } = state.factoryStats;
  // Tymczasowy losowy współczynnik efektywności w zakresie 1.0–1.5
  const baseEfficiency = 1.0 + Math.random() * 0.5;

  // TODO: Zastąp tymczasowy algorytm czymś opartym na danych:
  // - np. więcej maszyn niż pracowników → bonus
  // - słabe utrzymanie → kara do efektywności
  // - wysoka efektywność → bonus
  console.log(
    "obliczam efektywnosc i zwracam nowa efektywnosc",
    baseEfficiency
  );

  return parseFloat(baseEfficiency.toFixed(2));
}

export function fnGenerateActions(state: GameState): string[] {
  // TODO: nasluchuj na state, jesli jest cos naddzwtczajnego, to sprobuj zwrocic odpoowiednia akcje
  const roundActions = [...gameActions[state.selectedFactory]].sort(
    () => 0.5 - Math.random()
  );
  console.log("generuje dostepne akcje", roundActions.slice(0, 3));

  return roundActions.slice(0, 2);
}

export function fnTriggerEvent(state: GameState): GameEvent | undefined {
  const attempts = [
    { chance: 0.2, label: factoryEvents[state.selectedFactory] },
    { chance: 0.1, label: eraEvents[state.selectedEra] },
  ];

  for (const attempt of attempts) {
    if (Math.random() < attempt.chance) {
      const randomIndex = Math.floor(Math.random() * attempt.label.length);
      const eventName = attempt.label[randomIndex];
      console.log("wylosowal sie event", eventName);

      return {
        name: eventName,
        apply: (s: GameState) => ({
          ...s,
          eventLog: [...s.eventLog, `[${attempt.label}] ${eventName}`],
        }),
      };
    }
  }
}
