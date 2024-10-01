<template>
    <div class="rounded-xl flex overflow-hidden w-full items-center max-w-md bg-white shadow-2xl shadow-gray-400 p-4">
      <div class="relative z-30 flex-shrink-0 w-1/3">
        <div class="relative h-32 w-24 [&>*]:absolute [&>*]:rounded-xl [&>*]:border [&>*]:border-white/50">
          <img class="m-6 h-24 w-36 object-cover" :src="props.firstImage" :alt="props.title" />
          <img v-if="props.secondImage" class="m-3 h-24 w-36 rotate-3 object-cover" :src="props.secondImage" :alt="props.title" />
          <img v-if="props.thirdImage" class="w-36 h-24 rotate-6 object-cover" :src="props.thirdImage" :alt="props.title" />
        </div>
      </div>
      <div class="flex flex-col justify-center items-start ml-4 w-2/3">
        <h2 class="font-semibold text-xl mb-2">Cancha de tenis</h2>
        <p class="text-sm"> Duerme en aguas poco profundas durante el día y, por la noche, cuando baja la temperatura del agua, nada en busca de comida.</p>
      </div>
    </div>
  </template>
  
  <script setup>
const props = defineProps({
    firstImage: {
        type: String,
        required: true,
        default: 'https://i.scdn.co/image/ab67616d0000b2738431fb4cb38f8ee96d3434c0'
    },
    secondImage: {
        type: String,
        required: false,
        default: null
    },
    thirdImage: {
        type: String,
        required: false,
        default: null
    }
})
  </script>