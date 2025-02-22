<script setup lang="ts">
import { snakeToCamelWithSpaces } from "../common/stringUtils"
import { GRADEINFO } from "../types/grade"
import type { Metal } from "../types/metal"
import type { Result } from "../types/result"

const props = defineProps<{
  result: Result
  target: Metal
  targetAmount: number
}>()

const creatable = props.result.recipes.length > 0
</script>

<template>
  <div class="grid gap-2">
    <h2 class="text-2xl">Result</h2>
    <p>
      {{ snakeToCamelWithSpaces(target) }} ({{ targetAmount }}mB) is
      <span class="font-bold text-success" v-if="creatable">can be created</span>
      <span class="font-bold text-error" v-else>cannot be created</span>
      from your inventory<span v-if="creatable">!</span>
      <span v-else>...</span>
    </p>
  </div>

  <div class="grid gap-2" v-if="creatable">
    <h2 class="text-2xl">Recipes</h2>
    <div class="overflow-x-auto">
      <table class="table">
        <!-- head -->
        <thead>
          <tr>
            <th></th>
            <th>Metals</th>
            <th>Output</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(recipe, index) in props.result.recipes">
            <th>{{ index + 1 }}</th>
            <td>
              <ul>
                <li v-for="item in recipe">
                  {{ snakeToCamelWithSpaces(item.grade) }} {{ snakeToCamelWithSpaces(item.metal) }} × {{ item.count }}
                </li>
              </ul>
            </td>
            <td>{{ recipe.reduce((acc, item) => acc + item.count * GRADEINFO[item.grade].amount, 0) }}mB</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
