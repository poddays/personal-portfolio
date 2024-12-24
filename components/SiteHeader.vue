<script setup>
const route = useRoute() 
const navigation = { name: 'Home', href: '/', current: route.name == 'index' }
</script>

<template>

    <div class="w-full  bg-slate-800 h-14 flex justify-center items-center text-white">
        <p>Giovani's Portfolio </p>
    
    </div>

</template>