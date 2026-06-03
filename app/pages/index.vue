<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const section = ref(null)
const leftPhoto = ref(null)
const rightPhoto = ref(null)

let trigger

onMounted(() => {
    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: section.value,
            start: 'top 80%',
            end: 'bottom center',
            scrub: 1,
        }
    })
    timeline.fromTo(
        leftPhoto.value,
        { x: -100, y: -80, rotate: -8, opacity: 0 },
        { x: 0, y: 0, rotate: 0, opacity: 1, ease: 'power3.out'}
    )
    timeline.fromTo(
        rightPhoto.value,
        { x: 100, y: 80, rotate: 8, opacity: 0 },
        { x: 0, y: 0, rotate: 0, opacity: 1, ease: 'power3.out'},
        '<' // start at the same time as the previous animation
    )

    trigger = ScrollTrigger.getAll()// Store the trigger instance for cleanup
})

onUnmounted(() => {
    trigger?.forEach(t => t.kill()) // Clean up the ScrollTrigger instance
})


</script>

<template>
    <div>
        <Hero />
        <!-- Brief about Ikigai -->
        <section ref="section" class="photo-section">
            <div class="photos-wrapper">
                <div ref="leftPhoto" class="left-column">
                    <img src="/images/ikigai-name.png" alt="Ikigai" class="photo" />
                    <p class="vida-merito"><span>VIDA</span><span>+</span><span>MÉRITO</span></p>
                    <p>Es un concepto japonés que se refiere a la razón de ser o propósito de la vida.</p>
                    <p>Lo que nos motiva a levantarnos cada día. Lo que hace que la vida valga la pena.</p>
                </div>
                <div ref="rightPhoto" class="right-column">
                    <img src="/images/ikigai-circle.png" alt="Círculo Ikigai" class="photo" />
                </div>
            </div>
        </section>
        <!-- Services section -->
        <section class="services-section">
            <h2>Nuestros servicios</h2>
            <div class="circle-container">
                <div class="green circle">
                    <h3>Graphics</h3>
                </div>
                <div class="yellow circle">
                    <h3>Events</h3>
                </div>
                <div class="orange circle">
                    <h3>Digital</h3>
                </div>
                <div class="pink circle">
                    <h3>Own Brands</h3>
                </div>
            </div>
        </section>
        <!-- Trabajos destacados -->

        <!-- Logos -->
    </div>
</template>
<style scoped>
/* About Ikigai Section */
.photo-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem 1rem;
    margin: auto;
}

.photos-wrapper {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
    align-items: center;
    max-width: 1200px;
}

.left-column, .right-column {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    width: 26rem;
}

.photo {
    width: 100%;
    height: auto;
    border-radius: 10px;
}

.left-column p {
    padding: 0.5rem 2rem;
}

.vida-merito {
    display: flex;
    flex-direction: row;
    gap: 4rem;
    font-weight: 700;
}

.vida-merito span {
    font-size: 1.2rem;
}

/* Services Section */

.services-section {
    padding: 1rem;
    text-align: center;
}

.services-section h2 {
    font-size: 2rem;
    font-weight: 700;
}

.circle-container {
    padding: 2rem 1rem;
    position: relative;
    width: 100%;
    max-width: 420px;
    height: 420px;
    position: relative;
    margin: 2rem auto;
}
.circle {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    position: absolute;
}

.circle h3 {
    font-size: 1.5rem;
    font-weight: 600;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
}

.green {
    background: linear-gradient(114deg, #13547a 30%, #80d0c7 100%);
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
}

.yellow {
    background: linear-gradient(93deg, #f7971e 12% 0%, #ffe153 100%);
    top: 50%;
    left: 0;
    transform: translateY(-50%);
}

.pink {
    background: linear-gradient(140deg, rgb(245, 95, 152) 27.2% 12.2%, rgb(250 202 197) 100.2%);
    top: 50%;
    right: 0;
    transform: translateY(-50%);
}

.orange {
    background: linear-gradient(to right, rgb(252, 74, 26), rgb(247, 183, 51));
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
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

    /* About Ikigai Section */
    .photo-section {
        flex-direction: row;
    }

    .photos-wrapper {
        flex-direction: row;
        gap: clamp(2rem, 2vw, 4rem);
    }
}
</style>