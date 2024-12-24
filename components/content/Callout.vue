<script setup>
const props = defineProps ({
    title:  {
        type: String,
        default: 'Callout'

    }
})
</script>


<template>
<div class="bg-teal-800 border-t-2 boreder-teal-500 rounderd-b ">
    <p class="text-sm ">
        <slot />
    </p>
</div>
</template>