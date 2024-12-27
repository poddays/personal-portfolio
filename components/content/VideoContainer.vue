<template>
    <div class="mx-12">
      <video :src="src" autoplay loop muted playsinline class="rounded-xl h-full w-full"></video>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    src: {
      type: String,
      required: true,
    },
  });
  </script>