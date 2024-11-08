<template>
    <div>
        <header>
            <div class="flex flex-col space-y-3">
                <h1 class="flex justify-start text-xl font-medium">Crear Caso</h1>
                <h2>Rellena los datos del caso a desarrollar</h2>
            </div>
        </header>
        <div>
            <CreateCaseStepOne v-if="step == 1" @next-step="handleNextStep1" />
            <CreateCaseStepTwo v-else-if="step == 2" @next-step="handleNextStep2" @prev-step="prevStep"  />
        </div>
        <footer></footer>
    </div>
</template>

<script setup>
const step = ref(1)
const people = ref({})
const handleNextStep1 = (users) => {
    people.value = users
    step.value++
}
const handleNextStep2 = () => {
    step.value++
}
const prevStep = () => {
    step.value--
}
definePageMeta({ layout: 'main' })
</script>