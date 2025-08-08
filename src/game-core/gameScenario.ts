export const factories = [
  {
    name: "Textile_Mill",
    eras: ["steam", "industrial", "modern"],
  },
  {
    name: "Software_House",
    eras: ["modern"],
  },
  {
    name: "Steel_Foundry",
    eras: ["industrial", "modern"],
  },
] 

export const eras = ["steam", "industrial", "modern"] as const;

export const region = [
  "United Kingdom",
  "village in Poland",
  "Japan",
] as const;

export type FactoryName = typeof factories[number]["name"];
