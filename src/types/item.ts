import type { Grade } from "./grade"
import type { Metal } from "./metal"

export type Item = {
  metal: Metal
  grade: Grade
  amount: number
}
