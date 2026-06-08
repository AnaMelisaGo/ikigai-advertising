<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const section = ref(null)
const leftPhoto = ref(null)
const rightPhoto = ref(null)

let ctx
let mm

onMounted(() => {
    ctx = gsap.context(() => {
        mm = gsap.matchMedia()

        mm.add('(min-width: 768px)', () => {
            gsap.fromTo(
                leftPhoto.value,
                {
                    x: -150,
                    y: -30,
                    scale: 0.92,
                    filter: 'blur(8px)',
                    opacity: 0.6
                },
                {
                    x: 0,
                    y: 0,
                    scale: 1,
                    filter: 'blur(0px)',
                    opacity: 1,
                    scrollTrigger: {
                        trigger: section.value,
                        start: 'top 75%',
                        end: 'center center',
                        scrub: 1
                    }
                }
            )

            gsap.fromTo(
                rightPhoto.value,
                {
                    x: 150,
                    y: 30,
                    scale: 0.92,
                    filter: 'blur(8px)',
                    opacity: 0.6
                },
                {
                    x: 0,
                    y: 0,
                    scale: 1,
                    filter: 'blur(0px)',
                    opacity: 1,
                    scrollTrigger: {
                        trigger: section.value,
                        start: 'top 75%',
                        end: 'center center',
                        scrub: 1
                    }
                }
            )
        })

        mm.add('(max-width: 767px)', () => {
            gsap.fromTo(
                leftPhoto.value,
                { x: -40, opacity: 0.8, scale: 0.98 },
                {
                    x: 0,
                    opacity: 1,
                    scale: 1,
                    scrollTrigger: {
                        trigger: section.value,
                        start: 'top 85%',
                        end: 'bottom 60%',
                        scrub: 0.5
                    }
                }
            )

            gsap.fromTo(
                rightPhoto.value,
                { x: 40, opacity: 0.8, scale: 0.98 },
                {
                    x: 0,
                    opacity: 1,
                    scale: 1,
                    scrollTrigger: {
                        trigger: section.value,
                        start: 'top 85%',
                        end: 'bottom 60%',
                        scrub: 0.5
                    }
                }
            )
        })
    }, section)
})

onUnmounted(() => {
  mm?.revert()
  ctx?.revert()
})
</script>
<template>
    <section ref="section" class="photo-section">
        <span class="eyebrow">Acerca de</span>
        <!-- <h2 class="my-5 font-bold text-[2rem] text-center">Significado de Ikigai</h2> -->
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
</template>
<style scoped>
/* About Ikigai Section */
.photo-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5rem 1rem;
    /* margin: auto; */
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

@media (min-width: 768px){
    .photos-wrapper {
        flex-direction: row;
        gap: clamp(2rem, 2vw, 4rem);
    }
}
</style>