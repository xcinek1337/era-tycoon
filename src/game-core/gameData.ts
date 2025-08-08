import type { Factory } from "./types";

export const gameActions = {
  Textile_Mill: [
    "hire worker",
    "buy machine",
    "repair roof",
    "improve maintanance",
    "expand factory",
  ],
  Software_House: ["whatever"],
  Steel_Foundry: ["whatever2"],
};

export const factoryEvents: Record<Factory, string[]> = {
  Textile_Mill: ["fire", "hunger"],
  Software_House: [],
  Steel_Foundry: [],
};

export const eraEvents = {
  steam: ["plague"],
  industrial: [],
  modern: ["recession"],
};