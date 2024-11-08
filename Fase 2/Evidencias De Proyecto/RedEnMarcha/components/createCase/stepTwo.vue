<template>
    <div>
        <header class="mb-6">
            <h1 class="text-xl font-bold">Paso 1 de 3</h1>
        </header>
        <div>

        </div>
        <footer class="flex justify-between items-center w-full">
            <div>
                <button @click="prevStep" class="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded-md">
                    Anterior</button>
            </div>
            <div>
                <button class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md"
                    @click="nextStep">Siguiente</button>
            </div>
        </footer>
    </div>
</template>

<script setup>
const emit = defineEmits(['next-step'], ['prev-step']);

const nextStep = () => { emit('next-step'); }
const prevStep = () => { emit('prev-step'); }
</script>