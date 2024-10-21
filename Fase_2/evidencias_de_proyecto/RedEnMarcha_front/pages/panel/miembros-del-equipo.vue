<template>
    <div>
        <header class="flex justify-between w-full items-center">
            <h1 class="flex justify-start text-xl font-medium">Miembros del equipo</h1>
            <button @click="goToNewUser" class="bg-blue-800 p-5 rounded-2xl text-white  font-medium">Agregar miembro al
                equipo</button>
        </header>
    </div>
</template>

<script setup>
const router = useRouter()
const goToNewUser = () => {
    router.push('/profesionales/agregar-profesional')
}
definePageMeta({ layout: 'main' })
</script>