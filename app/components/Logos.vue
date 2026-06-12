<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'

const track = ref(null)
const clients = ref(null)

const logos = [
    '/images/logos/100_montaditos.png',
    '/images/logos/adidas-logo.png',
    '/images/logos/ahorro-total.webp',
    '/images/logos/cortefiel.svg',
    '/images/logos/eave-solar.jpg',
    '/images/logos/fmad-judo.png',
    '/images/logos/fund-astrazeneca.jpg',
    '/images/logos/garcia-de-pou.jpg',
    '/images/logos/hotel-avenida-españa.svg',
    '/images/logos/iscarcup.png',
    '/images/logos/m3-padel-center.png',
    '/images/logos/pedro-d-hierro.svg',
    '/images/logos/porsche-design.png',
    '/images/logos/uno-de-50.svg',
    '/images/logos/wakeup-festival.avif',
    '/images/logos/women_secret.jpg',
    '/images/logos/Bankinter.svg',
    '/images/logos/inovix.webp',
    '/images/logos/lidl.png',
]

const duplicatedLogos = [...logos, ...logos]

let tween

function waitForImages(container) {
    const images = container.querySelectorAll('img')
    return Promise.all(
        [...images].map((img) => {
            if (img.complete) return Promise.resolve()
            return new Promise((resolve) => {
                img.addEventListener('load', resolve, { once: true })
                img.addEventListener('error', resolve, { once: true })
            })
        })
    )
}

function updateCarousel3D() {
    if (!clients.value || !track.value) return

    const containerRect = clients.value.getBoundingClientRect()
    const centerX = containerRect.left + containerRect.width / 2
    const halfWidth = containerRect.width / 2

    track.value.querySelectorAll('.logo').forEach((logo) => {
        const rect = logo.getBoundingClientRect()
        const logoCenterX = rect.left + rect.width / 2
        const normalized = (logoCenterX - centerX) / halfWidth
        const distance = Math.min(1, Math.abs(normalized))

        const rotateY = normalized * 0
        const scale = 1 - distance * 0.35
        const opacity = 0.35 + (1 - distance) * 0.65

        logo.style.transform =
            `rotateX(2deg) rotateY(${rotateY}deg) scale(${scale})`
        logo.style.opacity = String(opacity)
    })
}

onMounted(async () => {
    if (!track.value || !clients.value) return

    await waitForImages(track.value)
    await new Promise((resolve) => requestAnimationFrame(resolve))

    tween = gsap.to(track.value, {
        xPercent: -50,
        duration: logos.length * 3.5,
        ease: 'none',
        repeat: -1,
        onUpdate: updateCarousel3D,
    })

    updateCarousel3D()
})

onUnmounted(() => {
    tween?.kill()
})
</script>

<template>
    <section class="clients-container">
        <span class="eyebrow">Ya nos conocen ...</span>
        <div ref="clients" class="clients">
            <div ref="track" class="track">
                <div v-for="(logo, i) in duplicatedLogos" :key="i" class="logo">
                    <img :src="logo" :alt="logo">
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.clients-container {
    padding: 0 0 8rem;
}

.clients-container span {
    text-align: center;
    width: 100%;
    margin-bottom: 2rem;
}

.clients {
    position: relative;
    overflow: hidden;
    perspective: 900px;
    perspective-origin: 50% 50%;
}

.track {
    display: flex;
    align-items: center;
    gap: 5rem;
    width: max-content;
    transform-style: preserve-3d;
    will-change: transform;
}

.logo {
    flex-shrink: 0;
    transform-style: preserve-3d;
    backface-visibility: hidden;
}

.logo img {
    height: 60px;
    object-fit: contain;
    display: block;
}

.clients::before {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    background:
        radial-gradient(
            ellipse at center,
            transparent 25%,
            rgba(255, 255, 255, 0.5) 55%,
            transparent 85%
        );
    z-index: 2;
}

.clients::after {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    background:
        linear-gradient(
            to right,
            #fff 0%,
            transparent 15%,
            transparent 85%,
            #fff 100%
        );
    z-index: 3;
}
</style>
