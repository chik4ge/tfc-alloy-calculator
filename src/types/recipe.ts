import type { Metal } from "./metal"

export const Recipe: {
  [key in Metal]?: {
    [key in Metal]?: {
      min_rate: number
      max_rate: number
    }
  }
} = {
  BISMUTH_BRONZE: {
    COPPER: { min_rate: 0.5, max_rate: 0.65 },
    ZINC: { min_rate: 0.2, max_rate: 0.3 },
    BISMUTH: { min_rate: 0.1, max_rate: 0.2 },
  },
  BLACK_BRONZE: {
    COPPER: { min_rate: 0.5, max_rate: 0.7 },
    GOLD: { min_rate: 0.1, max_rate: 0.25 },
    SILVER: { min_rate: 0.1, max_rate: 0.25 },
  },
  BRONZE: {
    COPPER: { min_rate: 0.88, max_rate: 0.92 },
    TIN: { min_rate: 0.08, max_rate: 0.12 },
  },
  BRASS: {
    COPPER: { min_rate: 0.88, max_rate: 0.92 },
    ZINC: { min_rate: 0.08, max_rate: 0.12 },
  },
  ROSE_GOLD: {
    COPPER: { min_rate: 0.15, max_rate: 0.3 },
    GOLD: { min_rate: 0.7, max_rate: 0.85 },
  },
  STERLING_SILVER: {
    COPPER: { min_rate: 0.2, max_rate: 0.4 },
    SILVER: { min_rate: 0.6, max_rate: 0.8 },
  },
  BLACK_STEEL: {
    STEEL: { min_rate: 0.5, max_rate: 0.7 },
    NICKEL: { min_rate: 0.15, max_rate: 0.25 },
    BLACK_BRONZE: { min_rate: 0.15, max_rate: 0.25 },
  },
  BLUE_STEEL: {
    BLACK_STEEL: { min_rate: 0.5, max_rate: 0.55 },
    BISMUTH_BRONZE: { min_rate: 0.1, max_rate: 0.15 },
    STERLING_SILVER: { min_rate: 0.1, max_rate: 0.15 },
    STEEL: { min_rate: 0.2, max_rate: 0.25 },
  },
  RED_STEEL: {
    BLACK_STEEL: { min_rate: 0.5, max_rate: 0.55 },
    ROSE_GOLD: { min_rate: 0.1, max_rate: 0.15 },
    BRASS: { min_rate: 0.1, max_rate: 0.15 },
    STEEL: { min_rate: 0.2, max_rate: 0.25 },
  },
}
