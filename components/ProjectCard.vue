<script setup lang="ts">
defineProps({
    project: Object
})

const localePath = useLocalePath()
const { locale } = useI18n()
const getUrl = (path) => {
  return localePath(path.replace(`/${locale.value}`, ''))
}
</script>
<template>
    <NuxtLink :to="getUrl(project._path)">
        <div class="flex flex-col gap-2">
            <h2 class="text-xl font-bold">{{ project.title }}</h2>
            <p>{{ project.description }}</p>
        </div>
    </NuxtLink>
</template>