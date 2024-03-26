<script setup lang="ts">
const props = defineProps({
    post: Object
})

const { locale } = useI18n()
const localePath = useLocalePath()

const getUrl = (path) => {
  return localePath(path.replace(`/${locale.value}`, ''))
}
</script>
<template>
    <NuxtLink :to="getUrl(post._path)">
        <div class="flex flex-col gap-2">
            <h2 class="text-xl font-bold">{{ post.title }}</h2>
            <p>{{ post.description }}</p>
        </div>
    </NuxtLink>
</template>