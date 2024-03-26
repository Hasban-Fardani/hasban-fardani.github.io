<script setup>
const { locale } = useI18n()
const localePath = useLocalePath()

const getUrl = (path) => {
  return localePath(path.replace(`/${locale.value}`, ''))
}
</script>
<template>
    <ContentList :path="`/projects/${locale}`" v-slot="{ list }">
      <div v-for="project in list" :key="project._path">
        <ProjectCard :project="project" />
      </div>
    </ContentList>
</template>