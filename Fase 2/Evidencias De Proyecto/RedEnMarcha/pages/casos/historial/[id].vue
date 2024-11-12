<template>
    <div>
        <header>
            <div>
                <h1>Historial</h1>
                <h2>Aquí podrás ver el historial de modificaciones del caso de {{ caso.userObject?.nna.name }} {{ caso.userObject?.nna.second_name }}</h2>
            </div>
        </header>
        <div>
            <Table ></Table>
        </div>
    </div>
</template>

<script setup>
const caso = ref({
    id: '1',
    createdAt: '2024-10-18',
    updateAt: '2024-10-18',
    forms: [
        { id: 'form1', name: 'Formulario Inicial' }
    ],
    userObject: {
        nna: { id: 'nna1', name: 'Juan', second_name: 'Pérez', birthDate: '2015-05-12', gender: 'Masculino', userType: 'NNA', escolaridad: 'Primaria' },
        cuidador: { id: 'cuidador1', name: 'María', second_name: 'González', birthDate: '1985-07-20', gender: 'Femenino', userType: 'cuidador' },
        adulto_privado_libertad: { id: 'adulto1', name: 'Carlos', second_name: 'Pérez', birthDate: '1980-03-15', gender: 'Masculino', userType: 'adulto_privado_libertad', nnaRelationship: 'Padre', deprivationDate: '2023-08-12' }

    },
    assignedProfessionals: [
        { id: 'user1', name: 'Raul Medina', profesion: 'psicologo' },
        { id: 'user2', name: 'Jhonny Castillo', profesion: 'psiquiatra' }
    ]
})

definePageMeta({layout: 'main'})
</script>