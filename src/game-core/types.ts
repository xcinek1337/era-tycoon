import type { gameActions } from "./gameActions";
import type { eras, factories, region } from "./gameScenario";

export type GameState = {
  playerDecisions: string[];
  selectedFactory: Factory;
  selectedEra: Era;
  selectedRegion: Region;
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
export type SelectScenarioProps = {
  handleSelect: (select: any) => void;
  state?:GameState|null
};
export type Era = (typeof eras)[number];
export type Region = (typeof region)[number];
export type Factory = (typeof factories)[number]["name"];
