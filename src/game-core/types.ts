import type { gameActions } from "./gameActions";

export type GameState = {
  playerDecisions: string[];
  selectedFactory: keyof typeof gameActions;
  selectedEra: "steam" | "industrial" | "modern"; 
  turn: number;
  actionPoints: number;
  availableActions: string[];
  eventLog: string[];
  factoryStats: FactoryStats;
};

export type FactoryStats = {
  employees: number;
  machines: number;
  efficiency: number;
  maintance: number;
};

export type GameEvent = {
  name: string;
  apply: (state: GameState) => GameState;
};
