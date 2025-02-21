<script setup lang="ts">
import { PlusIcon, XMarkIcon } from "@heroicons/vue/24/outline"
</script>

<template>
    <div class="overflow-x-auto grid gap-2">
        <div class="flex justify-between">
            <h2 class="text-2xl">Inventory</h2>
            <div class="join justify-end">
                <div class="join-item dropdown dropdown-hover dropdown-end z-50">
                    <button tabindex="0" class="join-item btn">
                        <PlusIcon class="size-6" />
                        Add
                    </button>
                    <ul tabindex="0" class="dropdown-content menu bg-base-200 rounded-box z-[1] w-52 p-2 shadow">
                        <li><a>Option 1</a></li>
                        <li><a>Option 2</a></li>
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
                <!-- row 1 -->
                <tr>
                    <th>
                        <label>
                            <input type="checkbox" class="checkbox" />
                        </label>
                    </th>
                    <td>
                        <div class="flex items-center gap-3">
                            <div class="avatar">
                                <div class="h-12 w-12">
                                    <img src="/img/normal_native_copper.png" alt="Copper"
                                        style="image-rendering: pixelated" />
                                </div>
                            </div>
                            <div class="font-bold">Copper</div>
                        </div>
                    </td>
                    <td>
                        <label class="form-control w-full max-w-xs">
                            <select class="select select-bordered">
                                <option selected disabled>Select Size</option>
                                <option>Normal (25mB)</option>
                                <option>Harry Potter</option>
                                <option>Lord of the Rings</option>
                                <option>Planet of the Apes</option>
                                <option>Star Trek</option>
                            </select>
                        </label>
                    </td>
                    <td>
                        <input type="number" placeholder="Target Amount (for Ingot: 100mB)"
                            class="input input-bordered w-full max-w-xs" />
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
