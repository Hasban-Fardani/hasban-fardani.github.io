<script setup>
const { locale } = useI18n()
const localePath = useLocalePath()

const getUrl = (path) => {
  return localePath(path.replace(`/${locale.value}`, ''))
}
</script>
<template>
    <ContentList :path="`/posts/${locale}`" v-slot="{ list }">
      <div v-for="post in list" :key="post._path">
        <NuxtLink :to="getUrl(post._path)">
            <h2>{{ post.title }}</h2>
            <p>{{ post.description }}</p>
        </NuxtLink>
      </div>
    </ContentList>
</template>