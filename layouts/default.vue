<script setup lang="ts">
const { locale } = useI18n()
const colorMode = useColorMode()
const route = useRoute()
</script>
<template>
    <header class="text-center flex justify-between w-full p-4">
        <NuxtLink :to="`/${locale}`" class=lg:w-1/3>
            <h1 class="text-xl font-semibold justify-start">Hasban Fardani</h1>
        </NuxtLink>
        <ul class="hidden md:flex justify-center items-center lg:w-1/3">
            <li class="mx-4">
                <NuxtLink :to="`/${locale}`" class="flex items-center gap-1" :class="{'text-blue-600': route.path === `/${locale}`}">
                    <Icon name="mdi:about"/> 
                    {{ $t('about') }}
                </NuxtLink>
            </li>
            <li class="mx-4">
                <NuxtLink :to="`/${locale}/projects`" class="flex items-center gap-1" :class="{'text-blue-600': route.path.includes(`/${locale}/projects`)}">
                    <Icon name="grommet-icons:projects"/> {{ $t('projects') }}
                </NuxtLink>
            </li>
            <li class="mx-4">
                <NuxtLink :to="`/${locale}/posts`" class="flex items-center gap-1" :class="{'text-blue-600': route.path.includes(`/${locale}/posts`)}">
                    <Icon name="mdi:blog"/> Blog
                </NuxtLink>
            </li>
        </ul>
        <div class="lg:w-1/3">
            <select v-model="locale" class="w-fit px-3 py-1 rounded-md appearance-none">
                <option value="en">en</option>
                <option value="id">id</option>
            </select>
        </div>
    </header>
    <main class="mt-8 max-w-[75ch] md:w-[75ch]">
        <slot/>
    </main>
    
</template>