<script setup lang="ts">
import Inventory from "./components/Inventory.vue"
import NavBar from "./components/NavBar.vue"
import TargetSelector from "./components/TargetSelector.vue"
import CalculateButton from "./components/CalculateButton.vue"
import CalculateResult from "./components/CalculateResult.vue"
import Footer from "./components/Footer.vue"
import { ref, type Ref } from "vue"
import type { Item } from "./types/item"
import type { Metal } from "./types/metal"
import type { Result } from "./types/result"

const inventory: Ref<Item[]> = ref([
  {
    metal: "ZINC",
    grade: "NORMAL",
    amount: 10,
  },
  {
    metal: "COPPER",
    grade: "NORMAL",
    amount: 10,
  },
  {
    metal: "TIN",
    grade: "NORMAL",
    amount: 10,
  },
])

const target: Ref<Metal> = ref("BISMUTH_BRONZE")
const targetAmount: Ref<number> = ref(100)

const result: Ref<Result> = ref({
  calculated: true,
  recipes: [
    [
      {
        metal: "BISMUTH_BRONZE",
        grade: "NORMAL",
        count: 5,
        recipe: "BISMUTH_BRONZE",
      },
      {
        metal: "ZINC",
        grade: "NORMAL",
        count: 2,
        recipe: "BISMUTH_BRONZE",
      },
      {
        metal: "IRON",
        grade: "NORMAL",
        count: 3,
        recipe: "BISMUTH_BRONZE",
      },
      {
        metal: "ROSE_GOLD",
        grade: "NORMAL",
        count: 1,
        recipe: "BISMUTH_BRONZE",
      },
    ],
    [
      {
        metal: "BISMUTH_BRONZE",
        grade: "NORMAL",
        count: 100,
        recipe: "BISMUTH_BRONZE",
      },
      {
        metal: "ZINC",
        grade: "NORMAL",
        count: 100,
        recipe: "BISMUTH_BRONZE",
      },
      {
        metal: "IRON",
        grade: "NORMAL",
        count: 100,
        recipe: "BISMUTH_BRONZE",
      },
      {
        metal: "ROSE_GOLD",
        grade: "NORMAL",
        count: 100,
        recipe: "BISMUTH_BRONZE",
      },
    ],
  ],
})

const deleteSelectedItems = (indecies: Set<number>) => {
  inventory.value = inventory.value.filter((_, index) => !indecies.has(index))
}

const calculate = () => {
  console.log("Calculate")
}
</script>

<template>
  <div class="mx-auto grid w-full max-w-2xl grid-cols-1 gap-10 xl:max-w-5xl">
    <NavBar />

    <Inventory :inventory="inventory" @deleteSelectedItems="deleteSelectedItems" />

    <TargetSelector :targetAlloy="target" :targetAmount="targetAmount" />

    <CalculateButton @clicked="calculate" />

    <div class="divider" />

    <CalculateResult v-if="result.calculated" :result="result" :target="target" :targetAmount="targetAmount" />
  </div>
  <Footer />
</template>

<style scoped></style>
