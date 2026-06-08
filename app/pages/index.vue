<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const services = ref(null)
const carousel = ref(null)
const process = ref(null)

// let timeline
let serviceTimeline
let carouselTimeline
let processTimeline

onMounted(() => {
    serviceTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: services.value,
            start: 'top 80%',
            end: 'bottom center',
            scrub: 1,
        }
    })
    carouselTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: carousel.value,
            start: 'top 80%',
            end: 'bottom center',
            scrub: 1,
        }
    })
    processTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: process.value,
            start: 'top 100%',
            end: 'bottom center',
            scrub: 1,
        }
    })

    // timeline.fromTo(
    //     leftPhoto.value,
    //     { x: -100, y: -80, rotate: -8, opacity: 0 },
    //     { x: 0, y: 0, rotate: 0, opacity: 1, ease: 'power3.out'}
    // )
    // timeline.fromTo(
    //     rightPhoto.value,
    //     { x: 100, y: 80, rotate: 8, opacity: 0 },
    //     { x: 0, y: 0, rotate: 0, opacity: 1, ease: 'power3.out'},
    //     '<' // start at the same time as the previous animation
    // )

    serviceTimeline.fromTo(
        services.value,
        { y:-80, opacity: 0},
        { y: 0, opacity: 1, ease: 'power3.out'}
    )

    carouselTimeline.fromTo(
        carousel.value,
        { y: -80, opacity: 0 },
        { y: 0, opacity: 1, ease: 'power3.out'}
    )
    processTimeline.fromTo(
        process.value,
        { y: -80, opacity: 0.3 },
        { y: 0, opacity: 1, ease: 'power3.out'}
    )
})

onUnmounted(() => {
    // Clean up the ScrollTrigger
    // timeline.scrollTrigger?.kill()
    serviceTimeline.scrollTrigger?.kill()
    carouselTimeline.scrollTrigger?.kill()
    processTimeline.scrollTrigger?.kill()
    // clean up the timeline
    // timeline?.kill()
    serviceTimeline?.kill()
    carouselTimeline?.kill()
    processTimeline?.kill()
})

</script>

<template>
    <Hero />
    <!-- Brief about Ikigai -->
    <Description />
    <section ref="process">
        <Process />
    </section>
    <!-- Services section -->
    <section ref="services" class="services-section">
        <span class="eyebrow">SERVICIOS</span>

        <h2>Soluciones que impulsan marcas</h2>

        <div class="services-grid">
            <article class="service-card">
                <h3>Graphics</h3>
                <p>Diseño gráfico y producción visual.</p>
            </article>

            <article class="service-card">
                <h3>Events</h3>
                <p>Experiencias memorables para tu audiencia.</p>
            </article>

            <article class="service-card">
                <h3>Digital</h3>
                <p>Estrategias para crecer online.</p>
            </article>

            <article class="service-card">
                <h3>Own Brands</h3>
                <p>Desarrollo y posicionamiento de marcas.</p>
            </article>
        </div>
    </section>
    <!-- Trabajos destacados -->
     <section ref="carousel">
         <Carousel />
     </section>
    <!-- Logos -->
    <Logos />
    <ReusablePreFooter
        title="¿Listo para crear algo asombroso?"
        caption="Haz que tus ideas se hagan realidad."
        button-text="Empieza ahora"
        button-link="#"
    />
</template>
<style scoped>
/* Services Section */

.services-section {
    margin-top: 5rem;
    padding: 1rem;
    text-align: center;
}

.services-section h2 {
    font-size: 2rem;
    font-weight: 700;
}

.services-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-top: 3rem;
}

.service-card {
  padding: 2rem;
  border-radius: 24px;
  background: white;
  border: 1px solid #ececec;

  transition: all .35s ease;
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0,0,0,.08);
}

.service-card h3 {
    font-weight: 600;
}

.service-card:hover h3 {
    color: var(--color-primary)
}

@media (min-width: 768px) {
    .circle-container {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        position: static;
        height: auto;
        max-width: 1000px;
        flex-wrap: nowrap;
    }

    .circle {
        position: static;
        transform: none;
        width: 200px;
        height: 200px;
        flex-shrink: 0;
    }

    .services-grid {
        grid-template-columns: repeat(4, 1fr);

    }
}
</style>