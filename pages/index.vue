<script setup>
import WorkCard from '~/components/WorkCard.vue';
import WorksSection from '~/components/WorksSection.vue';

</script>

<template>
    <div class="bg-gradient-to-t from-transparent to-[#141414] fixed top-0 h-[4vh] w-full z-50"></div>
   <div
      class="flex flex-col lg:flex-row justify-center gap-12 pt-12 w-[100%]  px-6 lg:px-[12vw] ">
      <HeroIntro />
      <WorksSection />
      <div class="bg-gradient-to-b from-transparent to-[#141414] fixed bottom-0 h-[4vh] w-full z-50"></div>
   </div>

</template>


<style>

</style>