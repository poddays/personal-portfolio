<script setup>
const { data: works } = await useAsyncData('works', () =>
    queryContent('/works').find()
)
</script>

<template>
    <h1 class="text-white">Tutti i miei lavori:</h1>

    <div class="flex justify-center items-center">
        <WorksSection />
    </div>
    
</template>