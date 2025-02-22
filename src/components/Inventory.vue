<script setup lang="ts">
import { PlusIcon, XMarkIcon } from "@heroicons/vue/24/outline"
import { type Ref, ref } from "vue";
import { snakeToCamelWithSpaces } from "../common/stringUtils";
import type { Item } from "../types/item"
import { METALS } from "../types/metal"
import InventoryItem from "./InventoryItem.vue"

const formattedMetals = ref(METALS.map(snakeToCamelWithSpaces));

const items: Ref<Item[]> = ref(
    [
        {
            metal: "ZINC",
            grade: "NORMAL",
            amount: 10
        },
        {
            metal: "COPPER",
            grade: "NORMAL",
            amount: 10
        },
        {
            metal: "TIN",
            grade: "NORMAL",
            amount: 10
        }
    ]
)

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
                        <li v-for="metal in formattedMetals" :key="metal">
                            <a>{{ metal }}</a>
                        </li>
                    </ul>
                </div>
                <button class="join-item btn">
                    <XMarkIcon class="size-6" />
                    Delete
                </button>
            </div>
        </div>

        <table class="table">
            <!-- head -->
            <thead>
                <tr>
                    <th>
                        <label>
                            <input type="checkbox" class="checkbox" />
                        </label>
                    </th>
                    <th>Metal</th>
                    <th>Size (Amount)</th>
                    <th>Count</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in items" :key="index">
                    <InventoryItem :item="item" />
                </tr>
            </tbody>
        </table>
    </div>
</template>
