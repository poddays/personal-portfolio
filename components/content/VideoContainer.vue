<script setup>
const props = defineProps({
    src: {
        type: String,
        required: true,
    },
});
</script>

<template>
    <div class="mx-12">
        <video :src="src" loop autoplay class="rounded-xl" ></video>
    </div>
    
</template>