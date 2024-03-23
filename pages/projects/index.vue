<script setup>
const { locale } = useI18n()
</script>
<template>
    <ContentList :path="`/projects/${locale}`" v-slot="{ list }">
      <div v-for="post in list" :key="post._path">
        <NuxtLink :to="localePath(post._path)">
            <h2>{{ post.title }}</h2>
            <p>{{ post.description }}</p>
        </NuxtLink>
      </div>
    </ContentList>
</template>