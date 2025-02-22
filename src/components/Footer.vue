<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons"
</script>

<template>
  <footer class="footer footer-center flex flex-col sticky bottom-0 bg-base-200 text-base-content rounded p-10">
    <nav class="grid grid-flow-col gap-6">
      @ 2025 chik4ge
      <a class="link link-hover flex gap-2 items-center" href="https://github.com/chik4ge/tfc-alloy-calculator">
        <FontAwesomeIcon :icon="faGithub" size="xl" />
        Source
      </a>
      <a class="link link-hover flex gap-2 items-center" href="https://x.com/chik4ge">
        <FontAwesomeIcon :icon="faTwitter" size="xl" />
        Twitter
      </a>
    </nav>
  </footer>
</template>
