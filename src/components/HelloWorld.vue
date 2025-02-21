<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <button class="btn btn-primary" @click="count++">
    count is: {{ count }}
  </button>

  <!--- サイズのバリエーション --->
  <button class="btn btn-lg">Large</button>
  <button class="btn">Normal</button>
  <button class="btn btn-sm">Small</button>
  <button class="btn btn-xs">Tiny</button>

  <!--- カラーバリエーション --->
  <button class="btn">Button</button>
  <button class="btn btn-neutral">Neutral</button>
  <button class="btn btn-primary">Primary</button>
  <button class="btn btn-secondary">Secondary</button>
  <button class="btn btn-accent">Accent</button>
  <button class="btn btn-ghost">Ghost</button>
  <button class="btn btn-link">Link</button>

  <!--- その他 --->
  <button class="btn btn-outline">Outline</button>
  <button class="btn glass">Glass button</button>
</template>

<style scoped></style>
