<script setup lang="ts">
import { MoonIcon, SunIcon } from "@heroicons/vue/24/outline"
</script>

<template>
  <div class="flex grow-0">
    <div class="navbar bg-base-100">
      <div class="flex-1 flex items-baseline">
        <a class="btn btn-ghost normal-case text-xl">TFC Alloy Calculator</a>
        <span class="text-sm ml-2">
          made by <a href="https://github.com/chik4ge" target="_blank" class="link">@chik4ge</a>
        </span>
      </div>
    </div>

    <label class="flex cursor-pointer gap-2 items-center">
      <MoonIcon class="size-6" />
      <input type="checkbox" value="garden" class="toggle theme-controller" />
      <SunIcon class="size-6" />
    </label>
  </div>
</template>
