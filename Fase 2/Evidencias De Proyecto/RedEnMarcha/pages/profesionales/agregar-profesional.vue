<template>
    <div class=" w-full space-y-10 mt-10">
        <header>
            <h1 class="text-xl font-medium">Agregar profesional</h1>
        </header>
        <div>
            <form @submit.prevent="handleUpdate">
                <div v-for="field in inputFormFields" :key="field.label" class="mb-4">
                    <label :for="field.model">{{ field.label }}</label>
                    <input type="text" v-model="field.model" class="border p-2 w-full" />
                </div>
                <div v-for="field in selectFormFields" :key="field.label" class="mb-4">
                    <label :for="field.model">{{ field.label }}</label>
                    <select v-model="field.model" class="border p-2 w-full">
                        <option v-for="option in field.options" :key="option" :value="option">
                            {{ option }}
                        </option>
                    </select>
                </div>
                <button type="submit" class="bg-blue-500 text-white px-4 py-2">Guardar</button>
            </form>
        </div>
    </div>
</template>
<script setup>
// Crear el objeto profesional sin avatar por ahora
const createProfesional = ref({
    name: '',
    second_name: '',
    email: '',
    password: '',
    role: '',
    profesion: ''
})
// Campos de entrada y selección para el formulario
const inputFormFields = ref([
    { label: 'Nombre', model: createProfesional.value.name },
    { label: 'Apellido', model: createProfesional.value.second_name },
    { label: 'Correo electrónico', model: createProfesional.value.email },
    { label: 'Contraseña', model: createProfesional.value.password }
])

const selectFormFields = ref([
    { label: 'Profesión', model: createProfesional.value.profesion, options: profesions },
    { label: 'Rol de usuario', model: createProfesional.value.role, options: roles }
])

// Método para manejar el envío
const handleUpdate = () => {
    console.log(createProfesional.value)
}

definePageMeta({
    layout: 'main'
})
</script>

<style scoped>
.mb-4 {
    margin-bottom: 1rem;
}
</style>