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
    serviceTimeline.scrollTrigger?.kill()
    carouselTimeline.scrollTrigger?.kill()
    processTimeline.scrollTrigger?.kill()

    // clean up the timeline
    serviceTimeline?.kill()
    carouselTimeline?.kill()
    processTimeline?.kill()
})
</script>

<template>
    <Hero />
    <!-- Acerca de Ikigai -->
    <Description />

    <!-- Sección de procesos de trabajo -->
    <section ref="process">
        <Process />
    </section>

    <!-- Presentación de servicios -->
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

    <!-- CTA -->
    <ReusablePreFooter
        title="¿Listo para crear algo asombroso?"
        caption="Haz que tus ideas se hagan realidad."
        button-text="Empieza ahora"
        button-link="/contacto"
    />
</template>
<style scoped>
/* Services Section */
.services-section {
    margin: 7rem 0;
    padding: 6rem 1rem 0;
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



@media (min-width: 768px) and (max-width: 990px) {
    .services-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (min-width: 991px) {
    .services-grid {
        grid-template-columns: repeat(4, 1fr);
    }
}
</style>