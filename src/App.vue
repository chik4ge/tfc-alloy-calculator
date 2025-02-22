<script setup lang="ts">
import Inventory from "./components/Inventory.vue"
import NavBar from "./components/NavBar.vue"
import TargetSelector from "./components/TargetSelector.vue"
</script>

<template>
  <div class="mx-auto grid w-full max-w-2xl grid-cols-1 gap-10 xl:max-w-5xl">
    <NavBar />

    <Inventory />

    <TargetSelector />

    <div class="divider" />
  </div>
</template>

<style scoped></style>
