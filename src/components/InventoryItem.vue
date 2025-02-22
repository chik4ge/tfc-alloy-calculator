<script setup lang="ts">
import { computed } from "vue"
import { snakeToCamelWithSpaces } from "../common/stringUtils"
import { GRADEINFO, GRADES } from "../types/grade"
import type { Item } from "../types/item"

const props = defineProps<{
  item: Item
  selected: boolean
}>()

const iconSrc = computed(() => `/img/${props.item.metal.toLowerCase().replace(" ", "_")}.png`)
</script>

<template>
  <th>
    <label>
      <input type="checkbox" class="checkbox" :checked="selected" @change="$emit('update:selected', !selected)" />
    </label>
  </th>
  <td>
    <div class="flex items-center gap-3">
      <div class="avatar">
        <div class="h-12 w-12">
          <img :src="iconSrc" style="image-rendering: pixelated" />
        </div>
      </div>
      <div class="font-bold">{{ snakeToCamelWithSpaces(props.item.metal) }}</div>
    </div>
  </td>
  <td>
    <label class="form-control w-full max-w-xs">
      <select class="select select-bordered">
        <option v-for="grade in GRADES" v-bind:value="item.grade">
          {{ snakeToCamelWithSpaces(grade) }} ({{ GRADEINFO[grade].amount }}mB)
        </option>
      </select>
    </label>
  </td>
  <td>
    <label class="form-control w-full max-w-xs">
      <input
        type="number"
        v-bind:value="item.amount"
        placeholder="Target Amount (for Ingot: 100mB)"
        class="input input-bordered"
      />
    </label>
  </td>
</template>
