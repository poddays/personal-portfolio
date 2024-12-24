<script setup>
const { path } = useRoute()
const { data } = await useAsyncData(`content-${path}`, () => {
    return queryContent().where({ _path: path }).findOne()
})
</script>

<template>

    <ContentRenderer :value="data"
        class="prose my-10 mx-auto max-w-7xl prose-h1:text-white prose-p:text-white prose-ul:text-white prose-table:text-white prose-a:text-blue-500" />
    <div class="my-8 flex flex-row gap-4 ">
        <a v-for="tech in data.technologies" :key="tech" class="bg-blue-500 rounded-full px-2 py-1">
            {{ tech }}
        </a>
    </div>

</template>