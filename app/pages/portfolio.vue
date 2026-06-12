<script setup>
import { ref, computed, nextTick, onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { portfolioSections } from '~/data/portfolio'

gsap.registerPlugin(ScrollTrigger)

const activeIndex = ref(0)
const showScrollTop = ref(false)

const handleScroll = () => {
  showScrollTop.value = window.scrollY > 600
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

const activeSection = computed(() => {
  return portfolioSections[activeIndex.value]
})

const selectCategory = async (index) => {
  if (index === activeIndex.value) return

  await gsap.to('.gallery-item', {
    opacity: 0,
    y: 30,
    duration: 0.25,
    stagger: 0.02
  })

  activeIndex.value = index

  await nextTick()

  gsap.from('.gallery-item', {
    opacity: 0,
    y: 40,
    duration: 0.6,
    stagger: 0.05,
    ease: 'power3.out'
  })

  gsap.from('.hero-image', {
    scale: 1.08,
    duration: 1.2,
    ease: 'power3.out'
  })
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
    gsap.from('.intro', {
        opacity: 0,
        y: 60,
        duration: 1
    })
  gsap.from('.portfolio-hero', {
    opacity: 0,
    y: 60,
    stagger: 0.05,
    duration: 0.8,
    scrollTrigger: {
      trigger: '.portfolio-hero',
      start: 'top 85%'
    }
  })

  gsap.from('.gallery-item', {
    opacity: 0,
    y: 40,
    stagger: 0.05,
    duration: 0.8,
    scrollTrigger: {
      trigger: '.gallery',
      start: 'top 85%'
    }
  })

  gsap.fromTo(
    '.selector button',
    {
        opacity: 0,
        y: 20
    },
    {
        opacity: 1,
        y: 0,
        stagger: 0.08,
        duration: 0.7,
        ease: 'power2.out',

        clearProps: 'transform',
  })
})
</script>

<template>
    <div class="intro">
      <span class="tag">
        Portfolio
      </span>

      <h1>
        Proyectos que transforman
      </h1>
    </div>
  <section class="portfolio">


    <div class="selector">

      <button
        v-for="(item,index) in portfolioSections"
        :key="item.title"
        :class="{ active: activeIndex === index }"
        @click="selectCategory(index)"
      >
        {{ item.title }}
      </button>

    </div>

    <div class="portfolio-hero">

      <div class="hero-image-wrapper">
        <img
          :src="activeSection.image"
          :alt="activeSection.title"
          class="hero-image"
        >
      </div>

      <div class="hero-content">

        <h2>
          {{ activeSection.title }}
        </h2>

        <p>
          Descubre algunos de nuestros trabajos más representativos.
        </p>

      </div>

    </div>

    <section class="gallery">

      <div
        v-for="image in activeSection.projects"
        :key="image"
        class="gallery-item"
      >
        <img
          :src="image"
          alt=""
          loading="lazy"
        >
      </div>

    </section>

  </section>
  <Transition name="scroll-top">
    <button
        v-if="showScrollTop"
        class="scroll-top-btn"
        @click="scrollToTop"
    >
        <FontAwesomeIcon class="fa-icon" :icon="['fas','angles-up']" />
        Top
    </button>
</Transition>
<ReusablePreFooter 
title="¿Te gusta lo que hacemos?"
caption="Si nuestra forma de trabajar encaja con lo que buscas, estaremos encantados de colaborar contigo en tu próximo proyecto."
button-text="Empieza tu proyecto"
button-link="/contacto"
/>
</template>

<style scoped>
/* scroll to top */
.scroll-top-btn {
    position: fixed;
    right: 30px;
    bottom: 180px;

    width: 65px;
    height: 65px;

    border: none;
    border-radius: 50%;

    /* background: rgba(255,255,255,0.95); */
    background: var(--color-accent);
    backdrop-filter: blur(20px);

    box-shadow:
        0 10px 30px rgba(0,0,0,.12);

    cursor: pointer;

    font-size: 0.8rem;
    color: #fff;
        padding: 10px;
    z-index: 999;

    transition: all .8s ease;
}

.fa-icon {
    font-size: 1.5rem;
}

.scroll-top-btn:hover {
    transform: translateY(-4px);
}

.scroll-top-enter-active,
.scroll-top-leave-active {
    transition: all .3s ease;
}

.scroll-top-enter-from,
.scroll-top-leave-to {
    opacity: 0;
    transform: translateY(20px);
}

/* portfolio */
.portfolio {
    padding: 80px 24px;
}

.intro {
    max-width: 100%;
    margin: 0 auto 50px;
    text-align: center;
    background: linear-gradient(to bottom, #dfe9f3 0%, white 100%);
    padding: 8rem 2rem;
}

.tag {
    display: inline-block;
    margin-bottom: 1rem;
    color: var(--color-accent);
    font-size: 0.85rem;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    border:1px solid #e5e7eb;
    border-radius:999px;
    padding:10px 18px;
}

.intro h1 {
    margin-top: 20px;
    font-weight: 300;
    line-height: 1.05;
    font-size: 2.5rem;
}

.portfolio-hero {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    gap: 60px;
    align-items: center;
    margin-bottom: 70px;
}

.hero-image-wrapper {
    overflow: hidden;
    border-radius: 24px;
}

.hero-image {
    height: 350px;
    width: 100%;
    object-fit: cover;
    display: block;
    transition: transform .8s ease;
}

.hero-image:hover {
    transform: scale(1.04);
}

.hero-content h2 {
    font-size: clamp(2rem, 4vw, 3.5rem);
    font-weight: 400;
    margin-bottom: 20px;
}

.hero-content p {
    font-size: 1.1rem;
    color: var(--color-gray-500);
    max-width: 400px;
}

.selector {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 12px;
    margin-bottom: 70px;
}

.selector button {
    border: 1px solid #e5e5e5;
    background: white;
    padding: 14px 22px;
    border-radius: 999px;
    cursor: pointer;
    transition: all .4s ease;
    font-size: .95rem;
}

.selector button:hover {
    box-shadow: 8px 9px 17px rgba(0, 0, 0, .12);
    transform: translateY(-2px);
}

.selector button:hover:not(.active) {
    background: var(--color-accent);
    color: #fff;
}

.selector button.active {
    background: var(--color-secondary);
    color: white;
    border-color: var(--color-secondary);
}

.selector button.active:hover {
    color: var(--color-accent);
}

.gallery {
    columns: 1;
    column-gap: 20px;
}

.gallery-item {
    break-inside: avoid;
    overflow: hidden;
    border-radius: 18px;
    margin-bottom: 20px;
}

.gallery-item img {
    height: 20rem;
    width: 100%;
    display: block;
    transition: transform .8s ease;
}

.gallery-item:hover img {
    transform: scale(1.06);
}

@media (max-width: 1024px) {
    .intro h1 {
        font-size: clamp(3rem, 6vw, 5rem);
    }

    .portfolio-hero {
        grid-template-columns: 1fr;
    }

    .hero-image {
        height: 500px;
    }

    .gallery {
        columns: 2;
    }

}
/* large screen */
@media (min-width: 1025px) {

    .portfolio {
        padding: 0 6% 120px;
    }

    .gallery {
        columns: 3;
    }

    .hero-image {
        height: 650px;
    }

    .intro h1 {
        font-size: clamp(3rem, 6vw, 5rem);
    }

}
</style>