<template>
    <div v-if="columns.length && data.length" class="overflow-x-auto">
        <table class="w-full bg-white">
            <thead>
                <tr class=" text-gray-800 border-b border-gray-300 uppercase text-sm leading-normal">
                    <th v-for="(column, index) in columns" :key="index" class="py-3 px-6 text-left">
                        {{ column.header }}
                    </th>
                </tr>
            </thead>
            <tbody class="text-gray-600 text-sm font-light">
                <tr v-for="(row, rowIndex) in data" :key="rowIndex" class=" hover:bg-gray-100">
                    <td v-for="(column, colIndex) in columns" :key="colIndex"
                        class="py-3 px-6 text-left whitespace-nowrap">
                        {{ row[column.key] }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <div v-else>No hay datos para mostrar</div>
</template>

<script setup>
defineProps({
    columns: {
        type: Array,
        default: () => []
    },
    data: {
        type: Array,
        default: () => []
    }
});


</script>