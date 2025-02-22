export const METALS = [
  "COPPER",
  "ZINC",
  "BISMUTH",
  "TIN",
  "SILVER",
  "GOLD",
  "NICKEL",
  "IRON",
  "STEEL",
  "BRONZE",
  "BISMUTH_BRONZE",
  "BLACK_BRONZE",
  "BRASS",
  "ROSE_GOLD",
  "STERLING_SILVER",
  "BLACK_STEEL",
  "BLUE_STEEL",
  "RED_STEEL",
] as const

export type Metal = (typeof METALS)[number]
