<script setup lang="ts">
import { PlusIcon, XMarkIcon } from "@heroicons/vue/24/outline"
import { computed, type Ref, ref } from "vue"
import { snakeToCamelWithSpaces } from "../common/stringUtils"
import type { Item } from "../types/item"
import { METALS, type Metal } from "../types/metal"
import InventoryItem from "./InventoryItem.vue"

const props = defineProps<{
  inventory: Item[]
}>()

const selectedItems: Ref<Set<number>> = ref(new Set())

const selectedAll = computed(() => selectedItems.value.size === props.inventory.length)

const updateSelected = (index: number, value: boolean) => {
  if (value) {
    selectedItems.value.add(index)
  } else {
    selectedItems.value.delete(index)
  }
}

const selectAll = (value: boolean) => {
  if (value) {
    selectedItems.value = new Set(props.inventory.map((_, index) => index))
  } else {
    selectedItems.value.clear()
  }
}

const addNewItem = (metal: Metal) => {
  props.inventory.push({
    metal,
    grade: "NORMAL",
    count: 10,
  })
}

const emit = defineEmits<{
  deleteSelectedItems: [indecies: Set<number>]
}>()

const emitDeleteSelectedItems = () => {
  emit("deleteSelectedItems", selectedItems.value)
  selectedItems.value.clear()
}
</script>

<template>
  <div class="grid gap-2">
    <div class="flex justify-between">
      <h2 class="text-2xl">Inventory</h2>
      <div class="join justify-end">
        <div class="join-item dropdown dropdown-hover dropdown-end z-50">
          <button tabindex="0" class="join-item btn">
            <PlusIcon class="size-6" />
            Add
          </button>
          <ul tabindex="0" class="dropdown-content menu bg-base-200 rounded-box z-[1] w-52 p-2 shadow">
            <li v-for="metal in METALS" :key="metal">
              <a v-on:click="addNewItem(metal)">{{ snakeToCamelWithSpaces(metal) }}</a>
            </li>
          </ul>
        </div>
        <button class="join-item btn" @click="emitDeleteSelectedItems">
          <XMarkIcon class="size-6" />
          Delete
        </button>
      </div>
    </div>

    <table class="table">
      <thead>
        <tr>
          <th>
            <label>
              <input type="checkbox" class="checkbox" :checked="selectedAll" @change="selectAll(!selectedAll)" />
            </label>
          </th>
          <th>Metal</th>
          <th>Size (Amount)</th>
          <th>Count</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in inventory" :key="index">
          <InventoryItem
            :item="item"
            :selected="selectedItems.has(index)"
            @update:selected="updateSelected(index, $event)"
          />
        </tr>
      </tbody>
    </table>
  </div>
</template>
