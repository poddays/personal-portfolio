<script setup>
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
});
</script>

<template>
    <div class="problem-card">
      <div class="icon text-white">
        <Icon name="entypo:help" /> 
      </div>
      <p class="text">{{ text }}</p>
    </div>
  </template>
  

<style scoped>
.problem-card {
  @apply bg-[#141414] border border-gray-700 rounded-xl p-4 flex flex-row gap-3 relative overflow-hidden;
  min-height: 100px; /* Altezza minima per il riquadro */
  width: 100%; /* Larghezza del riquadro, regola in base alle tue esigenze */
}



.text {
  @apply text-white text-sm font-light;
}
</style>