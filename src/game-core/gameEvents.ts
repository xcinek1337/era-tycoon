import type { Factory } from "./types";

export const factoryEvents: Record<Factory, string[]> = {
  Textile_Mill: ["fire", "hunger"],
};

export const eraEvents = {
  steam: ["plague"],
  industrial: [],
  modern: ["recession"],
};
