<script setup>
import {  ref } from 'vue'

const splashDone = ref(false)
function handleSplashFinished() {
    splashDone.value = true
}

</script>

<template>
    <div>
        <SplashScreen v-if="!splashDone" @finished="handleSplashFinished" />
        <!-- <SplashScreen /> -->
        <NuxtLayout v-else>
        <!-- <NuxtLayout> -->
        <NuxtPage />
        </NuxtLayout>
        <!-- <NuxtRouteAnnouncer />
        <NuxtWelcome /> -->
    </div>
</template>
