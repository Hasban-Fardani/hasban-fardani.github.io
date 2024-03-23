<script setup lang="ts">
const localePath = useLocalePath()
const colorMode = useColorMode()
const route = useRoute()

const isActiveClass = 'text-blue-500';
</script>
<template>
    <header class="text-center flex justify-between w-full p-4">
        <h1 class="text-2xl font-semibold lg:w-1/3 justify-start">Hasban Fardani</h1>
        <ul class="hidden md:flex justify-center items-center lg:w-1/3">
            <li class="mx-4">
                <NuxtLink :to="localePath('/')" class="flex items-center gap-1" :class="{'text-blue-600': route.path === localePath('/')}">
                    <Icon name="mdi:about"/> About
                </NuxtLink>
            </li>
            <li class="mx-4">
                <NuxtLink :to="localePath('/projects')" class="flex items-center gap-1" :class="{'text-blue-600': route.path === localePath('/projects')}">
                    <Icon name="grommet-icons:projects"/> Projects
                </NuxtLink>
            </li>
            <li class="mx-4">
                <NuxtLink :to="localePath('/posts')" class="flex items-center gap-1" :class="{'text-blue-600': route.path === localePath('/posts')}">
                    <Icon name="mdi:blog"/> Blog
                </NuxtLink>
            </li>
        </ul>
        <div class="lg:w-1/3">
            
        </div>
    </header>
    <main class="mt-8 max-w-[75ch] md:w-[75ch]">
        <slot/>
    </main>
    
</template>