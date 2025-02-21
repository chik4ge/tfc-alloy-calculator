<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import NabBar from './components/NavBar.vue'
</script>

<template>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
  <div class="mx-auto grid w-full max-w-2xl grid-cols-1 gap-10 xl:max-w-5xl">
    <NabBar />
  </div>
</template>

<style scoped></style>
