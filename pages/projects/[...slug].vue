<script setup>
const localePath = useLocalePath()
const route = useRoute()
const { locale } = useI18n()

console.log(locale.value)
</script>
<template>
    <main>
      <ContentDoc v-slot="{ doc }" :path="`/projects/${locale}/${route.params.slug}`">
        <article>
          <h1>{{ doc.title }}</h1>
          <ContentRenderer :value="doc" />
        </article>
      </ContentDoc>
    </main>
</template>