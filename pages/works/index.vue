<script setup>
const { data: works } = await useAsyncData('works', () =>
    queryContent('/works').find()
)
</script>

<template>
    <h1 class="text-white">Tutti i miei lavori:</h1>


    <ul class="text-white">
        <li v-for="work in works" :key="work._id" class="my-8 py-4 border-b-2">
            <nuxt-link :to="work._path" class="text-blue-500 text-2xl">{{ work.title }} </nuxt-link>
            <p class="text-gray-200">{{ work.description }}</p>
        </li>
    </ul>
</template>