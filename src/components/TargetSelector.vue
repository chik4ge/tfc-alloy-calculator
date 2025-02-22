<script setup lang="ts">
import { Recipe } from "../types/recipe"
import { ref } from "vue"
import { snakeToCamelWithSpaces } from "../common/stringUtils"

const metalsWithRecipes = ref(Object.keys(Recipe))
</script>

<template>
  <div class="overflow-x-auto grid gap-2">
    <h2 class="text-2xl">Target</h2>
    <div class="flex gap-2">
      <label class="form-control w-full max-w-xs">
        <select class="select select-bordered">
          <option selected disabled>Target Alloy</option>
          <option v-for="metal in metalsWithRecipes" :key="metal">{{ snakeToCamelWithSpaces(metal) }}</option>
        </select>
      </label>

      <input
        type="number"
        placeholder="Target Amount (for Ingot: 100mB)"
        class="input input-bordered w-full max-w-xs"
      />
    </div>
  </div>
</template>
