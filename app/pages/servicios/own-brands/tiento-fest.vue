<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const highlights = [
  'Gastronomía',
  'Música',
  'Cultura',
  'Deporte',
  'Talleres educativos',
  'Diversión'
]

const results = [
  'Cubas de la Sagra · 4–7 Sep 2025',
  '+6000 attendees',
  '6h live music + 12h DJ sessions',
  '2500 burgers sold'
]

const gallery = [
  '/images/tiento/tickets-tiento.png',
  '/images/tiento/poster-promocional.png',
  '/images/tiento/mapa-tiento.png',
  '/images/tiento/comida-tiento.png',
  '/images/tiento/poster-tiento.png',
  '/images/tiento/poster-tiento3.png',
]

onMounted(() => {
  // HERO
  gsap.from('.hero .container > *', {
    opacity: 0,
    y: 30,
    duration: 1,
    stagger: 0.15,
    ease: 'power3.out'
  })

  // OVERVIEW
  gsap.from('.overview .content > *', {
    scrollTrigger: {
      trigger: '.overview',
      start: 'top 75%'
    },
    opacity: 0,
    y: 30,
    duration: 1,
    stagger: 0.12
  })

  gsap.from('.cover-image img', {
    scrollTrigger: {
      trigger: '.overview',
      start: 'top 70%'
    },
    scale: 1.05,
    opacity: 0,
    duration: 1.2,
    ease: 'power2.out',
  })

  // RESULTS
  gsap.from('.result-card', {
    scrollTrigger: {
      trigger: '.results',
      start: 'top 75%'
    },
    opacity: 0,
    y: 20,
    duration: 0.8,
    stagger: 0.1,

    clearProps: 'transform',
  })

  // GALLERY
  gsap.from('.gallery-item', {
    scrollTrigger: {
      trigger: '.gallery',
      start: 'top 80%'
    },
    opacity: 0,
    scale: 0.95,
    duration: 0.8,
    stagger: 0.08
  })
})
</script>

<template>


    <!-- HERO -->
    <ReusableHero 
    hero-tag="FESTIVAL CONCEPT"
    hero-title="Tiento Fest"
    hero-span="música y cultura"
    hero-caption="Un festival sensorial centrado en pueblos pequeños y medianos, diseñado para que las familias disfruten juntas."
    background="radial-gradient(circle at 10% 20%, rgba(216, 241, 230, 0.46) 0.1%, rgba(233, 226, 226, 0.28) 90.1%)"
    />
    <!-- <section class="hero">
      <div class="container">
        <span class="eyebrow">FESTIVAL CONCEPT</span>
        <h1>Tiento Fest</h1>

        <p>
          A sensory festival focused on small and medium-sized towns,
          designed for families to enjoy culture, gastronomy,
          music and entertainment together.
        </p>
      </div>
    </section> -->

    <!-- OVERVIEW -->
    <section class="overview">
      <div class="container">

        <div class="overview-grid">

          <div class="content">

            <h2>¿Qué es?</h2>
            <p class="lead">
              Un festival de los sentidos centrado en la revitalización de las comunidades locales a través de la cultura, la gastronomía, la música, el deporte y el entretenimiento familiar.
            </p>

            <h2>Objectivo</h2>
            <p>
              Revitalizar las plazas de los pueblos y volver a convertirlas en un espacio vibrante de celebración y convivencia.
            </p>

            <h2>¿Cómo?</h2>

            <ul>
              <li v-for="item in highlights" :key="item">
                {{ item }}
              </li>
            </ul>

          </div>

          <div class="cover-image">
            <img src="/images/tiento/poster-tiento2.png" alt="Tiento Fest">
          </div>

        </div>

      </div>
    </section>

    <!-- RESULTS -->
    <section class="results">
      <div class="container">

        <div class="section-header">
          <span>I EDICIÓN</span>
          <h2>Results</h2>
        </div>

        <div class="results-grid">
          <div
            v-for="result in results"
            :key="result"
            class="result-card"
          >
            {{ result }}
          </div>
        </div>

      </div>
    </section>

    <!-- GALLERY -->
    <section class="gallery">
      <div class="container">

        <div class="section-header">
          <span>EXPERIENCIA</span>
          <h2>Festival Highlights</h2>
        </div>

        <div class="gallery-grid">
          <div
            v-for="(image, index) in gallery"
            :key="index"
            class="gallery-item"
          >
            <img :src="image" alt="Tiento Festival">
          </div>
        </div>

      </div>
    </section>

</template>

<style scoped>
.container {
  width: min(1100px, 90%);
  margin: 0 auto;
}

/* =========================
   TYPOGRAPHY
========================= */

h1 {
  font-size: clamp(3rem, 5vw, 5rem);
  letter-spacing: -0.04em;
  margin: 0.5rem 0 1rem;
}

h2 {
  font-size: 1.6rem;
  margin: 2rem 0 1rem;
  letter-spacing: -0.02em;
}

p {
  line-height: 1.6;
  /* color: #444; */
}

.content h2 {
    color: var(--color-accent);
}

.lead {
  font-size: 1.15rem;
  color: #222;
}

.eyebrow {
  font-size: 0.8rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #777;
}

/* =========================
   HERO
========================= */

.hero {
  padding: 10rem 0 6rem;
}

/* =========================
   OVERVIEW
========================= */

.overview {
  padding: 6rem 0;
}

.overview-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 4rem;
  align-items: start;
}

.cover-image {
    padding: 3rem 0;
}

.cover-image img {
  width: 100%;
  border-radius: 14px;
  object-fit: cover;
}

/* =========================
   LIST
========================= */

ul {
  margin-top: 1rem;
  padding: 0;
  list-style: none;
}

li {
  padding: 0.6rem 0;
  border-bottom: 1px solid #e8e8e8;
  color: #333;
}

/* =========================
   RESULTS
========================= */

.results {
    padding: 6rem 0;
    border: 1px solid var(--color-gray-200);
    border-radius: 20px;
    margin: 2rem;
    background: linear-gradient(to bottom, #dfe9f3 0%, white 100%);
}

.results h2,
.gallery h2 {
    font-weight: 600;
}

.section-header span {
  font-size: 0.75rem;
  letter-spacing: 0.2em;
  color: var(--color-accent);
}

.results-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin-top: 2rem;
}

.result-card {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid #eee;
  transition: transform .5s ease, background-color .5s ease, box-shadow .5s ease;
}

.result-card:hover {
    transform: translateY(-10px);
    background-color: var(--color-orange-300);
    box-shadow: 8px 13px 10px 2px rgb(0 0 0 / 14%);
}

/* =========================
   GALLERY
========================= */

.gallery {
  padding: 6rem 0 10rem;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: 2rem;
}

.gallery-item {
  overflow: hidden;
  border-radius: 14px;
}

.gallery-item img {
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  transition: .6s ease;
}

.gallery-item:hover img {
  transform: scale(1.1);
}

/* =========================
   RESPONSIVE
========================= */

@media (max-width: 900px) {
  .overview-grid {
    grid-template-columns: 1fr;
  }

  .results-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 500px) {
  .results-grid,
  .gallery-grid {
    grid-template-columns: 1fr;
  }
}
</style>