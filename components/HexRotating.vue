<template>
  <div class="canvas-container">
    <TresCanvas>
  <TresPerspectiveCamera :position="[0, 0, 6]" />
  <TresMesh ref="hex" :rotation="[0, 0, 0]" >
    <TresTetrahedronGeometry />
    <TresMeshBasicMaterial :color="0x98a6a4" wireframe />
  </TresMesh>
</TresCanvas>

  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const hex = ref(null);

onMounted(() => {
  window.addEventListener('scroll', onScroll);
});

function onScroll() {
  if (hex.value) {
    hex.value.rotation.y = window.scrollY / 300;
    hex.value.rotation.x = window.scrollY / 340;
    hex.value.rotation.z = window.scrollY / 500;
  }
}
</script>

<style scoped>
.canvas-container {
  width: 300px;
  /* Larghezza desiderata */
  height: 200px;
  /* Altezza desiderata */
  /* Aggiungi altri stili CSS per il posizionamento, margini, ecc. */
}
</style>