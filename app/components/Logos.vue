<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'

const track = ref()

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
]

// dupliate for seamless loop
const duplicatedLogos = [...logos, ...logos]

let tween

onMounted(() => {
    const width = track.value.scrollWidth / 2 // width of one set of logos
    tween = gsap.to(track.value, {
        x: -width,
        duration: 30.5,
        ease: 'none',
        repeat: -1,
        modifiers: {
            x: gsap.utils.unitize(x => parseFloat(x) % width)
        }
    })
})

onUnmounted(() => {
    tween?.kill() // Clean up the GSAP instance
})

</script>
<template>
    <section class="clients-container">
        <span class="eyebrow">Nos conocen también ...</span>
        <!-- <h2 class="m-10">Nos conocen también ...</h2> -->
        <div class="clients">
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
    margin-left: 2rem;
}

.clients {
    position: relative;
    overflow: hidden;
    /* margin: 3rem 0 8rem; */

    /* important for 3D effects */
    perspective: 900px;
}

.track {
    display: flex;
    align-items: center;
    gap: 5rem;
    width: max-content;
}

.logo {
    flex-shrink: 0;

    /* ring illusion */
    transform: rotateX(52deg);
    transition: .3s;
    opacity: .5;
}

.logo img {
    height: 60px;
    object-fit: contain;

    /* center larger illusion */
    transform: scale(1.2);
}

/* center highlight illusion */
.clients::before {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    background:
    radial-gradient(
      ellipse at center,
      transparent 25%,
      rgba(255,255,255,.5) 55%,
      transparent 85%
    );
    z-index: 2;
}

/* fade edges */
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