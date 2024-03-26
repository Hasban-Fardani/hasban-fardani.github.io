<script setup>
const { locale } = useI18n()
</script>
<template>
    <ContentList :path="`/posts/${locale}`" v-slot="{ list }" class="w-full">
      <div v-for="post in list" :key="post._path" class="border-b border-gray-300 pb-4">
        <PostCard :post="post" />
      </div>
    </ContentList>
</template>