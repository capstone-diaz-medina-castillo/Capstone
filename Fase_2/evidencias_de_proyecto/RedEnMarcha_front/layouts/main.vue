<!-- layouts/SidebarLayout.vue -->
<template>
    <div class="flex h-screen">
      <div class="flex flex-col w-64 bg-gray-800 text-white transition-all duration-300 ease-in-out">
        <div class="flex flex-col items-center mt-8 mb-6">
          <div class="h-20 w-20 rounded-full bg-gray-600 flex items-center justify-center text-2xl font-bold transition-transform duration-300 hover:scale-110">
            <img :src="actualUser.avatar" :alt="actualUser.name" class="h-20 w-20 rounded-full bg-gray-600 flex items-center justify-center text-2xl font-bold transition-transform duration-300 hover:scale-110 object-cover overflow-hidden">
          </div>
          <span class="mt-2 text-xl font-semibold">{{ actualUser.name }}</span>
        </div>
  
        <nav class="flex-grow">
          <ul class="space-y-2">
            <li v-for="item in navigationItems" :key="item.href">
              <NuxtLink 
                :to="item.href" 
                class="flex items-center px-4 py-2 transition-all duration-200 ease-in-out"
                :class="[isHovered === item.href ? 'bg-gray-700 translate-x-2' : 'hover:bg-gray-700']"
                @mouseenter="isHovered = item.href"
                @mouseleave="isHovered = ''"
              >
                <span class="mr-3 transition-transform duration-200 ease-in-out transform group-hover:scale-110">{{ item.emoji }}</span>
                {{ item.text }}
              </NuxtLink>
            </li>
          </ul>
        </nav>
  
        <div class="mt-auto mb-4 px-4">
          <button 
            class="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded flex items-center justify-center transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
            @click="logout"
          >
            <span class="mr-2">🚪</span>
            Cerrar sesión
          </button>
        </div>
      </div>
  
      <!-- Slot para el contenido principal -->
      <main class="flex-1 p-8 overflow-auto">
        <slot />
      </main>
    </div>
  </template>
  
  <script setup>
  
  const isHovered = ref('')
  
  const navigationItems = [
    { href: '/', emoji: '🏠', text: 'Inicio' },
    {href:'/panel/ninos', emoji: '' , text:'Niños'},
    {href:'/panel/encuestas', emoji: '' , text:'Encuestas'},
    {href:'/panel/configuraciones', emoji: '' , text:'Configuraciones'},


  ]
  
  const logout = () => {
    console.log('Cerrar sesión')
    // Aquí iría la lógica de cierre de sesión
  }
  </script>