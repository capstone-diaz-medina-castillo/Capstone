<template>
    <div class="mt-10 max-w-screen-2xl space-y-3">
        <header class="flex justify-between w-full items-center">
            <div class="flex flex-col space-y-3">
                <h1 class="flex justify-start text-xl font-medium">Casos</h1>
                <h2>Aqui podrás ver cada uno de los casos que se están llevando a cabo y gestionarlos</h2>
            </div> <button class="bg-blue-800 p-3 rounded-2xl text-white  font-medium">Agregar caso</button>
        </header>
        <div>
            <Table :data="formattedCasos" :columns="columns"></Table>
        </div>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue';

// Datos de las columnas, donde las celdas se llenan con funciones personalizadas
const columns = ref([
    {
        key: 'nna',
        header: 'NNA',
    },
    {
        key: 'cuidador',
        header: 'Cuidador',
    },
    {
        key: 'assignedProfessionals',
        header: 'Profesionales Asignados',
    }
]);

// Computed para formatear los datos de los casos
const formattedCasos = computed(() => {
    return casos.value.map(caso => {
        // Encontrar el NNA (usuario con userType 'NNA')
        const nna = caso.userObject.find(user => user.userType === 'NNA');
        // Encontrar el Cuidador (usuario con userType 'cuidador')
        const cuidador = caso.userObject.find(user => user.userType === 'cuidador');

        // Extraer nombres de los profesionales asignados
        const professionalNames = caso.assignedProfessionals
            .map(professional => professional.name)
            .join(', ');

        return {
            ...caso,
            nna: nna ? `${nna.name} ${nna.second_name}` : 'N/A',
            cuidador: cuidador ? `${cuidador.name} ${cuidador.second_name}` : 'N/A',
            assignedProfessionals: professionalNames
        };
    });
});
definePageMeta({ layout: 'main' })
</script>