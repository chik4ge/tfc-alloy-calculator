<script setup lang="ts">
import type { Result } from "../types/result"

const props = defineProps<{
  result: Result
}>()
</script>

<template>
  <div v-if="result.calculated">
    <div class="grid gap-2">
      <h2 class="text-2xl">Result</h2>
      <p>Bismuth Bronze (100mB) is <span class="font-bold text-success">can be created</span> from your inventory!</p>
    </div>

    <div class="grid gap-2">
      <h2 class="text-2xl">Recipes</h2>
    </div>
  </div>
</template>
