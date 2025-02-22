<script setup lang="ts">
import { snakeToCamelWithSpaces } from '../common/stringUtils';
import { GRADEINFO, GRADES } from '../types/grade';
import type { Item } from '../types/item';

const props = defineProps<{
    item: Item,
}>();

const iconSrc = `/img/${props.item.metal.toLowerCase()}.png`;
</script>

<template>
    <th>
        <label>
            <input type="checkbox" class="checkbox" />
        </label>
    </th>
    <td>
        <div class="flex items-center gap-3">
            <div class="avatar">
                <div class="h-12 w-12">
                    <img :src="iconSrc" alt="Copper" style="image-rendering: pixelated" />
                </div>
            </div>
            <div class="font-bold">{{ snakeToCamelWithSpaces(props.item.metal) }}</div>
        </div>
    </td>
    <td>
        <label class="form-control w-full max-w-xs">
            <select class="select select-bordered">
                <option v-for="grade in GRADES" v-bind:value="item.grade">{{ snakeToCamelWithSpaces(grade) }} ({{
                    GRADEINFO[grade].amount }}mB)
                </option>
            </select>
        </label>
    </td>
    <td>
        <label class="form-control w-full max-w-xs">
            <input type="number" v-bind:value="item.amount" placeholder="Target Amount (for Ingot: 100mB)"
                class="input input-bordered" />
        </label>
    </td>
</template>
