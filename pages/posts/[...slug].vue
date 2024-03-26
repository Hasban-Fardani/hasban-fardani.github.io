<script setup>
const route = useRoute()
const { locale } = useI18n()

</script>
<template>
    <main>
      <ContentDoc v-slot="{ doc }" :path="`/posts/${locale}/${route.params.slug}`">
        <article>
          <h2 class="text-3xl">{{ doc.title }}</h2>
          <ul>
            <li>{{ doc.publishedAt }}</li>
          </ul>
          <ContentRenderer :value="doc" class="mt-4"/>
        </article>
      </ContentDoc>
    </main>
</template>