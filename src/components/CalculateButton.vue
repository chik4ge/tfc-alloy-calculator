<script setup lang="ts"></script>

<template>
  <div class="flex gap-2">
    <button class="btn btn-info btn-wide" v-on:click="$emit('clicked')">Calculate!</button>
  </div>
</template>
