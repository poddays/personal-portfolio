<template>
  <div ref="canvasContainer" class="canvas-container"></div>
</template>

<script>
import * as THREE from 'three';

export default {
  mounted() {
    this.init();
    window.addEventListener('scroll', this.onScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.onScroll);
    this.renderer.dispose();
  },
  methods: {
    init() {
      // Scena
      this.scene = new THREE.Scene();

      // Camera
      this.camera = new THREE.PerspectiveCamera(
        75,
        this.$refs.canvasContainer.offsetWidth / this.$refs.canvasContainer.offsetHeight,
        0.1,
        1000
      );
      this.camera.position.z = 4;

      // Renderer
      this.renderer = new THREE.WebGLRenderer({ alpha: true }); // Abilita la trasparenza
      this.renderer.setSize(
        this.$refs.canvasContainer.offsetWidth,
        this.$refs.canvasContainer.offsetHeight
      );
      this.renderer.setClearColor(0x000000, 0); // Imposta il colore di sfondo trasparente
      this.$refs.canvasContainer.appendChild(this.renderer.domElement);

      // Geometria
      const geometry = new THREE.TetrahedronGeometry();

      // Materiale
      const material = new THREE.MeshBasicMaterial({
        color: 0x98a6a4,
        wireframe: true,
      });

      // Mesh
      this.mesh = new THREE.Mesh(geometry, material);
      this.scene.add(this.mesh);

      // Animazione
      this.animate();
    },
    animate() {
      requestAnimationFrame(this.animate);
      this.renderer.render(this.scene, this.camera);
    },
    onScroll() {
      this.mesh.rotation.y = window.scrollY / 300;
      this.mesh.rotation.x = window.scrollY / 340;
      this.mesh.rotation.z = window.scrollY / 500;
    },
  },
};
</script>

<style scoped>
.canvas-container {
  width: 300px;
  height: 200px;
}
</style>