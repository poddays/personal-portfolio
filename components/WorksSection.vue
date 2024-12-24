<script setup>
const { data: works } = await useAsyncData('works', () =>
  queryContent('/works')
    .find()
    .then(works => works.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateB.getTime() - dateA.getTime(); 
    }))
);
</script>

<template>
  <div class="flex flex-col gap-8 my-12">
    <WorkCard v-for="work in works" :key="work._id" :work="work" />
  </div>
</template>