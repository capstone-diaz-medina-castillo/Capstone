<template>
    <div class="p-6 bg-gray-100 min-h-screen">
        <header class="flex justify-between items-center w-full bg-white p-4 rounded-lg shadow-md">
            <div class="flex flex-col">
                <h1 class="text-2xl font-semibold text-gray-800">Caso</h1>
                <h2 class="text-sm text-gray-600">Detalles del caso</h2>
            </div>
            <button
                class="bg-blue-600 rounded-lg px-4 py-2 text-white font-medium transition-transform transform hover:bg-blue-800 hover:scale-105"
                @click="watchHistory">
                Ver historial
            </button>
        </header>

        <div class="mt-6 space-y-6">
            <!-- Assigned Professionals Section -->
            <section class="bg-white p-6 rounded-lg shadow-md">
                <h3 class="text-lg font-semibold text-gray-800 mb-4">Profesionales asignados</h3>
                <ul class="space-y-2">
                    <li v-for="profesional in caso.assignedProfessionals" :key="profesional.id"
                        class="flex items-center gap-2">
                        <span class="font-medium text-gray-700">{{ profesional.name }}</span>
                        <span class="text-sm text-gray-500">- {{ profesional.profesion }}</span>
                    </li>
                </ul>
            </section>

            <!-- User Details Section -->
            <section class="bg-white p-6 rounded-lg shadow-md">
                <h3 class="text-lg font-semibold text-gray-800 mb-4">Información del caso</h3>
                <div class="space-y-4">
                    <div>
                        <h4 class="text-sm text-gray-600 font-medium">Nombre niño/a</h4>

                        <div class="flex space-x-10">
                            <p class="text-gray-800">
                                {{ caso.userObject?.nna.name }} {{ caso.userObject?.nna.second_name }}
                            </p>
                            <button @click=""
                                class="text-blue-600 font-medium transform transition-all duration-200">Ver más</button>
                        </div>
                    </div>
                    <div>
                        <h4 class="text-sm text-gray-600 font-medium">Nombre de cuidador</h4>
                        <div class="flex space-x-10">
                            <p class="text-gray-800">
                                {{ caso.userObject?.cuidador.name }} {{ caso.userObject?.cuidador.second_name }}
                            </p>
                            <button @click=""
                                class="text-blue-600 font-medium transform transition-all duration-200">Ver más</button>
                        </div>

                    </div>
                    <div>
                        <h4 class="text-sm text-gray-600 font-medium">Nombre de adulto privado de libertad</h4>
                        <div class="flex space-x-10">
                            <p class="text-gray-800">
                                {{ caso.userObject?.adulto_privado_libertad.name }}
                                {{ caso.userObject?.adulto_privado_libertad.second_name }}
                            </p>
                            <button @click=""
                                class="text-blue-600 font-medium transform transition-all duration-200">Ver más</button>
                        </div>

                    </div>
                </div>
            </section>

            <!-- Forms Section -->
            <section class="bg-white p-6 rounded-lg shadow-md">
                <div class="flex justify-between w-full items-center" >
                    <h3 class="text-lg font-semibold text-gray-800 mb-4">Formularios</h3>
                    <button class="p-3 bg-blue-600 text-white rounded-lg transform transition-all duration-200 hover:bg-blue-800 hover:scale-105">Agregar formulario</button>
                </div>
                <div>

                </div>
            </section>
        </div>
    </div>
</template>

<script setup>
const route = useRoute();
const router = useRouter();
const casoId = route.params.id;

const watchHistory = () => {
    router.push(`/casos/historial/${casoId}`);
};

const caso = ref({
    id: "1",
    createdAt: "2024-10-18",
    updateAt: "2024-10-18",
    forms: [{ id: "form1", name: "Formulario Inicial" }],
    userObject: {
        nna: {
            id: "nna1",
            name: "Juan",
            second_name: "Pérez",
            birthDate: "2015-05-12",
            gender: "Masculino",
            userType: "NNA",
            escolaridad: "Primaria",
        },
        cuidador: {
            id: "cuidador1",
            name: "María",
            second_name: "González",
            birthDate: "1985-07-20",
            gender: "Femenino",
            userType: "cuidador",
        },
        adulto_privado_libertad: {
            id: "adulto1",
            name: "Carlos",
            second_name: "Pérez",
            birthDate: "1980-03-15",
            gender: "Masculino",
            userType: "adulto_privado_libertad",
            nnaRelationship: "Padre",
            deprivationDate: "2023-08-12",
        },
    },
    assignedProfessionals: [
        { id: "user1", name: "Raul Medina", profesion: "psicologo" },
        { id: "user2", name: "Jhonny Castillo", profesion: "psiquiatra" },
    ],
});

definePageMeta({ layout: "main" });
</script>

<style>
/* Estilos adicionales opcionales */
</style>