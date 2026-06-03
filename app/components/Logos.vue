<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'

const track = ref()

const logos = []

// dupliate for seamless loop


</script>
<template>
    <section>
        <h2>Nos conocen tambien ...</h2>
        <div class="clients">
            <div class="track">
                <div
                v-for="(logo, i) in duplicated"
                :keys="i"
                class="logo"
                >
                    <img :src="logo" alt="{{ logo }}">
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped></style>