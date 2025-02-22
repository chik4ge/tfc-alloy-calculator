import type { Item } from "./item"

export type Result = {
  calculated: boolean
  recipes: [Item, Item?, Item?, Item?][]
}
