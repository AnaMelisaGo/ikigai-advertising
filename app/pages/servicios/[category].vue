<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useRoute } from 'nuxt/app'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)


// const category = computed(() => route.params.category as string)
// const category = route.params.category as string
const VALID = ['graphics', 'events', 'digital']

definePageMeta({
  validate: (route) => VALID.includes(route.params.category as string)
})

const route = useRoute()
const pageData = computed(() => contentMap[route.params.category as string])
/**
 * CENTRAL CONTENT DATABASE (your CMS-like layer)
 */
const contentMap: Record<string, any> = {
  graphics: {
    tag: 'Servicios Gráficos & Publicitarios',
    title: 'Soluciones visuales que hacen destacar tu marca.',
    description:
      'Desde la impresión y rotulación hasta el diseño web y los montajes profesionales. Creamos proyectos visuales que generan impacto y refuerzan tu identidad.',

    items: [
      {
        title: 'Decoración de Espacios',
        icon: ['fas','wand-magic-sparkles'],
        items: [
          'Lonas publicitarias',
          'Vinilos decorativos',
          'Rótulos',
          'Displays',
          'Neones'
        ]
      },
      {
        title: 'Packaging & PLV',
        icon: ['fas', 'box-open'],
        items: [
          'Packaging',
          'PLV',
          'Expositores',
          // 'Displays'
        ]
      },
      {
        title: 'Merchandising & Textil',
        icon: ['fas','shirt'],
        items: [
          'Camisetas',
          'Sudaderas',
          // 'Bolsas',
          'Regalos'
        ]
      },
      {
        title: 'Print',
        icon: ['fas','print'],
        items: [
          'Catálogos & Revistas',
          'Calendarios & Agendas',
          'Rogramas de fiestas & Flyers',
          'Tarjetas de visita',
        ]
      },
      {
        title: 'Diseño',
        icon: ['fas','compass-drafting'],
        items: [
          'Páginas Web',
          'Logos',
          'Branding',
          'Manual corporativo'
        ]
      },
      {
        title: 'Montajes',
        icon: ['fas','hammer'],
        items: [
          'Rótulos',
          'Vinilos',
          'Stands',
          'Eventos'
        ]
      }
    ],
    prefooter: {
        span: '¿Tienes un proyecto en mente?',
        title: 'Hagamos algo extraordinario justos.',
        caption: 'Cuéntanos tu idea y te ayudaremos a convertirla en una realidad.',
    }
  },

  events: {
    tag: 'Producción de Eventos',
    title: 'Creamos experiencias en vivo que conectan con el público.',
    description:
      'Gestionamos, producimos y coordinamos eventos de principio a fin con un enfoque técnico y creativo.',

    items: [
      {
        title: 'Imagen & Sonido',
        icon: ['fas','headphones'],
        items: ['Producciones', 'Audiovisuales', 'Equipos técnicos']
      },
      {
        title: 'Estructuras',
        icon: ['fas','tent'],
        items: ['Carpas', 'Escenarios', 'Mobiliario', 'Hinchables']
      },
      {
        title: 'Artistas & Personal',
        icon: ['fas','drum'],
        items: ['DJ’s', 'Bandas/Orquestas', 'Camarer@s/Azafat@s', 'Seguridad']
      },
      {
        title: 'Foodtrucks & Catering',
        icon: ['fas','burger'],
        items: ['Foodtrucks', 'Catering']
      },
      {
        title: 'Consumibles',
        icon: ['fas','ticket'],
        items: ['Pulseras','Vasos', 'Tickets', 'Acreditaciones']
      }
    ],
    prefooter: {
        span: '¿Organizamos tu evento?',
        title: 'Hagamos que tu evento sea inolvidable.',
        caption: 'Cuéntanos tu idea y nos encargamos de toda la producción, coordinación y ejecución.',
    }
  },

  digital: {
    tag: 'Estrategia Digital',
    title: 'Impulsamos marcas con soluciones digitales que escalan.',
    description:
      'Diseñamos ecosistemas digitales completos para crecer, automatizar y posicionar marcas online.',

    items: [
      { title: 'Desarrollo Web', icon: ['fas','laptop-code'], items: ['Páginas web', 'UX/UI'] },
      { title: 'E-commerce', icon: ['fas','cart-shopping'], items: ['Shopify', 'WooCommerce'] },
      { title: 'Redes Sociales', icon: ['fas','mobile-screen-button'], items: ['Contenido', 'Gestión'] },
      { title: 'SEO & SEM', icon: ['fas','chart-line'], items: ['Optimización'] },
      { title: 'CRM & Automatización', icon: ['fas','gears'], items: ['CRM', 'Automatización'] },
      { title: 'Email Marketing', icon: ['fas','envelope-circle-check'], items: ['Newsletters', 'Campañas'] },
      { title: 'Consultoría', icon: ['fas','chess-board'], items: ['Estrategia', 'Auditoría'] },
      { title: 'Marca Personal', icon: ['fas','stamp'], items: ['Logo','Branding'] },
      { title: 'Notas de Prensa', icon: ['fas','newspaper'], items: ['Comunicación'] }
    ],
    prefooter: {
        span: '¿Quieres escalar tu negocio digital?',
        title: 'Construyamos tu ecosistema digital.',
        caption: 'Te ayudamos a diseñar una estrategia digital completa para crecer de forma sostenible y eficiente.',
    }
  }
}

// const pageData = computed(() => contentMap[category.value])
// const pageData = contentMap[category]

/**
 * Redirect if invalid route
 */

if (!pageData) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Página no encontrada',
  })
}

onMounted(() => {
  gsap.from('.hero-content', {
    y: 40,
    opacity: 0,
    duration: 1.2,
    ease: 'power3.out'
  })

    gsap.utils.toArray('.card').forEach((el: any, i) => {
        gsap.from(el, {
            y: 70,
            opacity: 0,
            duration: 1,
            delay: i * 0.03,
            ease: 'power3.out',

            clearProps: 'transform',

            scrollTrigger: {
                trigger: el,
                start: 'top 85%'
            }
        })
    })
})
</script>

<template>
<!-- HERO -->
<section class="hero">
    <div class="hero-content">
        <span class="tag">
            {{ pageData.tag }}
        </span>
        <h1>
            {{ pageData.title }}
        </h1>
        <p>
            {{ pageData.description }}
        </p>
    </div>
    <div class="glow"></div>
</section>

<!-- GRID -->
<section class="grid">
    <div
        v-for="block in pageData.items"
        :key="block.title"
        class="card"
    >
        <div class="header">
            <div class="icon">
                <FontAwesomeIcon :icon="block.icon" />
            </div>

            <h2>
                {{ block.title }}
            </h2>
        </div>

        <ul>
        <li v-for="item in block.items" :key="item">
            {{ item }}
        </li>
        </ul>
    </div>
</section>
<ReusablePreFooter

:span=pageData.prefooter.span
:title=pageData.prefooter.title
:caption=pageData.prefooter.caption
button-text="Solicita presupuesto"
button-link="/contacto"
/>
</template>

<style scoped>
/* HERO */

.hero {
  position: relative;
  padding: 8rem 1.5rem 6rem;
  max-width: 1400px;
  margin: auto;
}

.hero-content {
  max-width: 900px;
}

.tag {
  display: inline-block;
  background: var(--color-orange-50);
  color: var(--color-accent);
  padding: .6rem 1rem;
  border-radius: 999px;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.hero h1 {
  font-size: clamp(3rem, 6vw, 5.5rem);
  line-height: 1;
  /* color: #111827; */
  letter-spacing: -0.05em;
  font-weight: 600;
}

.hero p {
  margin-top: 1.5rem;
  color: #6b7280;
  max-width: 700px;
  line-height: 1.8;
  font-size: 1.1rem;
}

.glow {
  position: absolute;
  top: -200px;
  right: -200px;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(37,99,235,.12), transparent 70%);
}

/* GRID */

.grid {
  max-width: 1400px;
  margin: auto;
  padding: 0 1.5rem 8rem;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.2rem;
}

.card {
  background: rgba(255,255,255,.85);
  backdrop-filter: blur(20px);

  /* border: 1px solid #e5e7eb; */
  border: 1px solid var(--color-blue-100);
  border-radius: 26px;

  padding: 1.8rem;

  transition: transform .8s ease-in-out, box-shadow .35s ease;
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 25px 60px rgba(0,0,0,.08);
}

.header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.icon {
  width: 54px;
  height: 54px;
  border-radius: 16px;
  background: #f4f8ff;

  display: flex;
  align-items: center;
  justify-content: center;

  color: var(--color-accent);
  font-size: 1.2rem;
}

.card h2 {
  font-size: 1.2rem;
  font-weight: 600;
  /* color: #111827; */
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  padding: .6rem 0;
  border-bottom: 1px solid #f1f5f9;
  color: #374151;
}

li:last-child {
  border-bottom: none;
}
</style>