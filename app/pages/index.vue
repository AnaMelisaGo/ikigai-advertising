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


        <h1 class="text-3xl font-bold font-heading">Hello World!</h1>
        <p>This is Ikigai Advertising</p>
        <p class="text-lg p-6 font-body">This is a simple page</p>
        <p class="text-lg p-6 font-body">Welcome to our advertising agency. We specialize in creating innovative marketing solutions that help businesses grow and succeed in the competitive market.</p>
        <p class="text-lg p-6 font-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p class="text-lg p-6 font-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p class="text-lg p-6 font-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p class="text-lg p-6 font-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p class="text-lg p-6 font-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p class="text-lg p-6 font-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p class="text-lg p-6 font-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p class="text-lg p-6 font-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
</template>
<style scoped>
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

@media (min-width: 768px) {
    .photo-section {
        flex-direction: row;
    }

    .photos-wrapper {
        flex-direction: row;
        gap: clamp(2rem, 2vw, 4rem);
    }
}
</style>