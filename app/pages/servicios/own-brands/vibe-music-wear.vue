<script setup>
const collaborators = [
  {
    name: 'CARL COX',
    followers: '2.4M followers'
  },
  {
    name: 'ANDRÉS CAMPO',
    followers: '323K followers'
  },
  {
    name: 'MËSTIZA',
    followers: '696K followers'
  },
  {
    name: 'AMNESIA IBIZA',
    followers: '843K followers'
  },
  {
    name: 'DURO FESTIVAL',
    followers: '114K followers'
  },
  {
    name: 'WAKE UP',
    followers: '35K followers'
  }
]

const products = [
  '/images/vibe/poster-promo.png',
  '/images/vibe/hoodies.png',
  '/images/vibe/tshirt-models.png',
  '/images/vibe/black-sweater.png',
  '/images/vibe/black-tshirt.png',
  '/images/vibe/white-tshirt.png'
]
</script>

<template>
<!-- HERO -->
<ReusableHero 
hero-tag="OWN BRANDS"
hero-title="Vibe Music"
hero-span="Wear"
hero-caption="Streetwear creado para los amantes de fashion, música electrónica, festivales y club culture."
background="linear-gradient(178.6deg, rgb(232, 245, 253) 3.3%, rgb(252, 253, 255) 109.6%)"
/>
<!-- ABOUT -->
<section class="about section">
    <div class="container">
        <div class="about-grid">
            <div>
                <h2>¿Qué es?</h2>
                <p class="lead">
                    La marca de streetwear para amantes de la moda y de la música electrónica.
                </p>
                <img
                    src="/images/vibe/hero.png"
                    alt="Vibe Wear"
                >
                <h2>¿Cómo?</h2>

                <ul>
                    <li>Colecciones propias</li>
                    <li>Colaboraciones estratégicas con artistas y eventos.</li>
                </ul>
            </div>
            <div>
                <h2>Objectivo</h2>
                <ul>
                    <li>Construcción de marca personal artistas/festivales/clubes</li>
                    <li>Unir a todos los amantes de la música electrónica</li>
                    <li>Desarrollar el concepto "VIBE CREW" en toda la industria.</li>
                </ul>           
            </div>
        </div>
    </div>
</section>

<!-- COLLABORATORS -->
<section class="collaborators section">
    <div class="collab-container">
        <div class="section-header">
            <span>COLLABORACIONES</span>
            <h2>Artistas, Festivales & Clubes</h2>
            <p>
                Colaboraciones que potencian la comunidad VIBE en toda la industria de la música electrónica.
            </p>
        </div>
        <div class="partners-grid">
            <div
                v-for="partner in collaborators"
                :key="partner.name"
                class="partner"
            >
                <h3>{{ partner.name }}</h3>
                <span>{{ partner.followers }}</span>
            </div>
        </div>
    </div>
</section>

<!-- PRODUCT GALLERY -->
<section class="gallery section">
    <div class="container">

    <div class="section-header">
        <span>COLLECTIONES</span>
        <h2>Galería de Productos</h2>
    </div>

    <div class="gallery-grid">
        <div
        v-for="(product, index) in products"
        :key="index"
        class="gallery-item"
        >
        <img
            :src="product"
            alt="Product"
        >
        </div>
    </div>

    </div>
</section>
<ReusablePreFooter 
title="¿Te gustaría crear tu propio brand?"
caption="Haremos elevar tus propias marcas en el mercado."
button-text="Creamos tu marca"
button-link="/contacto"
/>
</template>

<style scoped>

/* ---------- Layout ---------- */
.container {
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section {
  padding: 7rem 0;
}

/* ---------- About ---------- */

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: center;
}

.about-grid img {
    margin: 5rem 0;
    width: 100%;
    border-radius: 24px;
    display: block;
}

.about h2 {
  margin-top: 2rem;
  margin-bottom: 1.2rem;
  font-size: 2rem;
    color: var(--color-accent)
}

.lead {
  font-size: 1.3rem;
  line-height: 1.8;
  /* color: #333; */
}

.about ul {
  padding-left: 1rem;
}

.about li {
  margin-bottom: 1rem;
  line-height: 1.7;
  color: #555;
}


/* ---------- Section Header ---------- */

.section-header {
  margin-bottom: 4rem;
}

.section-header span {
  letter-spacing: .2em;
  font-size: .8rem;
  color: var(--color-accent);
}

.section-header h2 {
  margin-top: .75rem;
  font-size: 3rem;
}

/* Collaborators */

.collab-container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 2rem;
}

.collaborators {
  background: white;
}

.section-header p {
  max-width: 600px;
  color: #777;
  margin-top: 1rem;
  line-height: 1.8;
}

.partners-grid {
  border-top: 1px solid #e8e8e8;
}

.partner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.5rem 0;
  border-bottom: 1px solid #e8e8e8;
  transition: all .35s ease;
}

.partner:hover {
  padding-left: 1.5rem;
}

.partner h3 {
  font-size: clamp(1.4rem, 2vw, 2.4rem);
  font-weight: 700;
  letter-spacing: .05em;
  margin: 0;
}

.partner span {
  color: var(--color-primary);
  font-size: .95rem;
  letter-spacing: .08em;
  text-transform: uppercase;
}
/* ---------- Gallery ---------- */

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.gallery-item {
  overflow: hidden;
  border-radius: 24px;
}

.gallery-item img {
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  transition: .6s ease;
}

.gallery-item:hover img {
  transform: scale(1.05);
}

/* ---------- Responsive ---------- */
@media (max-width: 768px) {
  .partner {
    flex-direction: column;
    align-items: flex-start;
    gap: .5rem;
  }

  .partner h3 {
    font-size: 1.3rem;
  }
}

@media (max-width: 900px) {

  .about-grid,
  .collab-grid,
  .gallery-grid {
    grid-template-columns: 1fr;
  }

  section {
    padding: 5rem 0;
  }

  .hero {
    padding-top: 8rem;
  }

  .section-header h2 {
    font-size: 2.2rem;
  }
}
</style>