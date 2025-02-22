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
  calculated: false,
  recipes: [],
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

    <CalculateButton :clicked="calculate" />

    <div class="divider" />

    <CalculateResult :result="result" />
  </div>
  <Footer />
</template>

<style scoped></style>
