<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const works = ref([
  { id: 1, title: 'Iscarcup 2025', image: '/images/iscarcup-2025.png' },
  { id: 2, title: 'Porsche Design Expo', image: '/images/porsche-design-expo.png' },
  { id: 3, title: 'Fundación Astra Zeneca', image: '/images/fundacion-astra-zeneca.png' },
  { id: 4, title: 'Adidas Expo', image: '/images/adidas-expo.png' },
])

const current = ref(0)
let interval = null

const currentWork = computed(() => works.value[current.value])

const next = () => {
  current.value = (current.value + 1) % works.value.length
}

const prev = () => {
    current.value =
        (current.value - 1 + works.value.length) % works.value.length
}

const goTo = (index) => {
    current.value = index
}

/* autoplay */
const startAutoplay = () => {
    interval = setInterval(() => {
        next()
    }, 4000)
}

const stopAutoplay = () => {
    clearInterval(interval)
}

/* touch swipe */
let startX = 0

const onTouchStart = (e) => {
    startX = e.touches[0].clientX
}

const onTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX
    const diff = startX - endX

    if (Math.abs(diff) > 40) {
        diff > 0 ? next() : prev()
    }
}

onMounted(() => {
    startAutoplay()
})

onUnmounted(() => {
    stopAutoplay()
})
</script>

<template>
    <div class="carousel-section">
        <span class="eyebrow">Galería</span>
        <h2>Trabajos destacados</h2>
        <div class="carousel" @mouseenter="stopAutoplay" @mouseleave="startAutoplay">
    
            <!-- MAIN VIEW -->
            <div class="carousel-container" @touchstart="onTouchStart" @touchend="onTouchEnd">
                <img :src="currentWork.image" :alt="currentWork.title" />
    
                <!-- hover overlay -->
                <div class="overlay">
                    <h2>{{ currentWork.title }}</h2>
                </div>
                <!-- Buttons -->
                <button class="prev" @click="prev">&#10094;</button>
                <button class="next" @click="next">&#10095;</button>
            </div>
    
            <!-- THUMBNAILS -->
            <div class="thumbnails">
                <div
                    v-for="(work, index) in works"
                    :key="work.id"
                    class="thumb"
                    :class="{ active: index === current }"
                    @click="goTo(index)"
                >
                    <img :src="work.image" :alt="work.title" />
                    <div class="thumb-overlay"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.carousel-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5rem 1rem 2rem;
}

.carousel-section {
    font-size: 2rem;
    font-weight: 700;
}
.carousel {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    padding: 3rem 0;
}

/* MAIN */
.carousel-container {
    position: relative;
    width: 100%;
    height: 60vh;
    overflow: hidden;
    border-radius: 16px;
}

.carousel-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}

/* hover zoom */
.carousel-container:hover img {
    transform: scale(1.05);
}

/* overlay */
.overlay {
    position: absolute;
    inset: 0;
    background: rgba(0,0,0,0.5);
    opacity: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    transition: opacity 0.3s ease;
    font-weight: 700;
    font-size: 1.5rem;
}

.carousel-container:hover .overlay {
    opacity: 1;
}

/* buttons */
.prev, .next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    /* background: rgba(0,0,0,0.4); */
    color: var(--color-neutral-400);
    font-size: 6rem;
    border: none;
    padding: 0.6rem 1rem;
    cursor: pointer;
}

.prev { left: 10px; }
.next { right: 10px; }

/* THUMBNAILS */
.thumbnails {
    display: flex;
    gap: 0.5rem;
    /* overflow-x: auto; */
}

.thumb {
    position: relative;
    flex: 0 1 120px;
    height: 80px;
    cursor: pointer;
    border-radius: 8px;
    overflow: hidden;
    opacity: 0.6;
    transition: 0.3s;
    padding: 5px;
}

.thumb.active {
    opacity: 1;
    outline: 2px solid var(--color-accent);
}

.thumb img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
}

/* thumbnail hover overlay */
.thumb-overlay {
    position: absolute;
    inset: 0;
    background: rgba(0,0,0,0.2);
    opacity: 0;
    transition: 0.3s;
}

.thumb:hover .thumb-overlay {
    opacity: 1;
}

/* Responsive */
@media (min-width: 768px) {
    .carousel-container {
        width: 80%;
        height: 70vh;
    }
    .thumb {
        flex: 0 0 120px;
    }
}
</style>