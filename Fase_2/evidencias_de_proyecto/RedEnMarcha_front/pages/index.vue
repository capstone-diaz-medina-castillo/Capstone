<template>
    <div class="max-w-screen-2xl">
        <header>
        </header>
        <div>
            <ul>
            <li v-for="card in cards" class=" m-3">
                <Cards></Cards>
            </li>
        </ul>
        </div>
    </div>
</template>

<script setup>
const cards = ref(5)
definePageMeta({layout:'main'})
</script>