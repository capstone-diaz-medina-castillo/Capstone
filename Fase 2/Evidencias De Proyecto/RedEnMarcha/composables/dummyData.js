export const actualUser = ref({
});

export const users = ref([
    {
        id: 'user1',
        name: 'Raul',
        second_name: 'Medina',
        avatar: 'https://musicland.cl/wp-content/uploads/2020/09/TYLERFLOWER-800x800.jpg',
        role: 'profesional',
        profesion: 'psicologo',
        email: 'raul.medina@duocuc.cl',
        password: 'raul123456',
    },
    {
        id: 'user2',
        name: 'Jhonny',
        second_name: 'Castillo',
        avatar: 'https://musicland.cl/wp-content/uploads/2020/09/TYLERFLOWER-800x800.jpg',
        role: 'profesional',
        profesion: 'psiquiatra',
        email: 'j.castillo@duocuc.cl',
        password: 'jCastillo',
    },
    {
        id: 'user3',
        name: 'Jesus',
        second_name: 'Díaz',
        avatar: 'https://musicland.cl/wp-content/uploads/2020/09/TYLERFLOWER-800x800.jpg',
        role: 'admin',
        profesion: 'admin',
        email: 'jesu.diazp@duocuc.cl',
        password: 'jesus261201',
    }
]);

export const casos = ref([
    {
        id: '1',
        createdAt: '2024-10-18',
        updateAt: '2024-10-18',
        forms: [
            { id: 'form1', name: 'Formulario Inicial' }
        ],
        userObject: [
            { id: 'nna1', name: 'Juan', second_name: 'Pérez', birthDate: '2015-05-12', gender: 'Masculino', userType: 'NNA', escolaridad: 'Primaria' },
            { id: 'cuidador1', name: 'María', second_name: 'González', birthDate: '1985-07-20', gender: 'Femenino', userType: 'cuidador' },
            { id: 'adulto1', name: 'Carlos', second_name: 'Pérez', birthDate: '1980-03-15', gender: 'Masculino', userType: 'adulto_privado_libertad', nnaRelationship: 'Padre', deprivationDate: '2023-08-12' }
        ],
        assignedProfessionals: [
            { id: 'user1', name: 'Raul Medina', profesion: 'psicologo' },
            { id: 'user2', name: 'Jhonny Castillo', profesion: 'psiquiatra' }
        ]
    },
    {
        id: '2',
        createdAt: '2024-09-25',
        updateAt: '2024-10-10',
        forms: [
            { id: 'form2', name: 'Evaluación Psicológica' }
        ],
        userObject: [
            { id: 'nna2', name: 'Sofía', second_name: 'Ramírez', birthDate: '2010-02-18', gender: 'Femenino', userType: 'NNA', escolaridad: 'Secundaria' },
            { id: 'cuidador2', name: 'Lucía', second_name: 'Vargas', birthDate: '1978-09-22', gender: 'Femenino', userType: 'cuidador' },
            { id: 'adulto2', name: 'Jorge', second_name: 'Ramírez', birthDate: '1975-12-02', gender: 'Masculino', userType: 'adulto_privado_libertad', nnaRelationship: 'Tío', deprivationDate: '2021-11-05' }
        ],
        assignedProfessionals: [
            { id: 'user1', name: 'Raul Medina', profesion: 'psicologo' }
        ]
    },
    {
        id: '3',
        createdAt: '2024-07-15',
        updateAt: '2024-09-02',
        forms: [
            { id: 'form3', name: 'Intervención Social' }
        ],
        userObject: [
            { id: 'nna3', name: 'Mateo', second_name: 'Hernández', birthDate: '2012-11-30', gender: 'Masculino', userType: 'NNA', escolaridad: 'Primaria' },
            { id: 'cuidador3', name: 'Rosa', second_name: 'López', birthDate: '1982-01-10', gender: 'Femenino', userType: 'cuidador' },
            { id: 'adulto3', name: 'Roberto', second_name: 'Hernández', birthDate: '1978-04-22', gender: 'Masculino', userType: 'adulto_privado_libertad', nnaRelationship: 'Padre', deprivationDate: '2020-03-16' }
        ],
        assignedProfessionals: [
            { id: 'user2', name: 'Jhonny Castillo', profesion: 'psiquiatra' }
        ]
    },
    {
        id: '4',
        createdAt: '2024-08-01',
        updateAt: '2024-10-01',
        forms: [
            { id: 'form4', name: 'Seguimiento' }
        ],
        userObject: [
            { id: 'nna4', name: 'Valentina', second_name: 'Martínez', birthDate: '2014-09-08', gender: 'Femenino', userType: 'NNA', escolaridad: 'Primaria' },
            { id: 'cuidador4', name: 'Pedro', second_name: 'Martínez', birthDate: '1980-06-05', gender: 'Masculino', userType: 'cuidador' },
            { id: 'adulto4', name: 'José', second_name: 'Martínez', birthDate: '1972-11-20', gender: 'Masculino', userType: 'adulto_privado_libertad', nnaRelationship: 'Abuelo', deprivationDate: '2022-05-09' }
        ],
        assignedProfessionals: [
            { id: 'user1', name: 'Raul Medina', profesion: 'psicologo' },
            { id: 'user3', name: 'Jesus Díaz', profesion: 'admin' }
        ]
    }
]);


export const grantedAccess = ref([
    {
        userId: 'user1',  // Raul Medina
        redId: '1',      // Caso de Juan Pérez
        permission: 'read' // solo lectura
    },
    {
        userId: 'user2',  // Jhonny Castillo
        redId: '1',      // Caso de Juan Pérez
        permission: 'edit' // edición
    },
    {
        userId: 'user1',  // Raul Medina
        redId: '2',      // Caso de Sofía Ramírez
        permission: 'edit' // edición
    },
    {
        userId: 'user2',  // Jhonny Castillo
        redId: '2',      // Caso de Sofía Ramírez
        permission: 'read' // solo lectura
    },
    {
        userId: 'user3',  // Jesus Díaz
        redId: '3',      // Caso de Mateo Hernández
        permission: 'read' // solo lectura
    },
    {
        userId: 'user3',  // Jesus Díaz
        redId: '4',      // Caso de Valentina Martínez
        permission: 'edit' // edición
    },
    {
        userId: 'user1',  // Raul Medina
        redId: '4',      // Caso de Valentina Martínez
        permission: 'no_access' // sin permisos
    }
]);
export const roles = ref([
    {
        id:'222',
        name:'Admin'
    },
    {
        id:'111',
        name: 'profesional'
    }
])

export const profesions = ref([
    {
        id:'ew4333',
        name:'Psicologo infantil'
    },
    {
        id:'ew4333',
        name:'Psiquiatra'
    }
])

export const encuestas = ref([
    {
        id: '1',
        name: 'Formulario Inicial',
        questions: [
            { id: 'q1', question: '¿Cómo te sientes hoy?', type: 'text' },
            { id: 'q2', question: '¿Qué te gustaría mejorar?', type: 'text' },
            { id: 'q3', question: '¿Cuál es tu mayor miedo?', type: 'text' },
            { id: 'q4', question: '¿Qué te hace feliz?', type: 'text' }
        ]
    },
    {
        id: '2',
        name: 'Evaluación Psicológica',
        questions: [
            { id: 'q1', question: '¿Cómo te sientes hoy?', type: 'text' },
            { id: 'q2', question: '¿Qué te gustaría mejorar?', type: 'text' },
            { id: 'q3', question: '¿Cuál es tu mayor miedo?', type: 'text' },
            { id: 'q4', question: '¿Qué te hace feliz?', type: 'text' }
        ]
    },
    {
        id: '3',
        name: 'Registro de hogar',
        questions: [
            { id: 'q1', question: '¿Cómo te sientes hoy?', type: 'text' },
            { id: 'q2', question: '¿Qué te gustaría mejorar?', type: 'text' },
            { id: 'q3', question: '¿Cuál es tu mayor miedo?', type: 'text' },
            { id: 'q4', question: '¿Qué te hace feliz?', type: 'text' }
        ]
    }
])