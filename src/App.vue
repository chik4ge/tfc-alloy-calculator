<script setup lang="ts">
import Inventory from "./components/Inventory.vue"
import NabBar from "./components/NavBar.vue"
</script>

<template>
  <div class="mx-auto grid w-full max-w-2xl grid-cols-1 gap-10 xl:max-w-5xl">
    <NabBar />

    <Inventory />
  </div>
</template>

<style scoped></style>
