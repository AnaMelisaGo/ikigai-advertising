<script setup>
import {  ref } from 'vue'

const splashDone = ref(false)
function handleSplashFinished() {
    splashDone.value = true
}

useHead({
    titleTemplate: (title) => title ? `${title} | Ikigai Advertising` : 'Ikigai Advertising',
})
</script>

<template>
    <div>
        <!-- Splash Screen -->
        <SplashScreen v-if="!splashDone" @finished="handleSplashFinished" />
        <!-- Main Content -->
        <NuxtLayout v-else>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>
