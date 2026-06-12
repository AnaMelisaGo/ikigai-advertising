<script setup>
import { onMounted, onUnmounted, nextTick, useTemplateRef } from 'vue'

const processSection = useTemplateRef('processSection')
const cardRefs = useTemplateRef('cardRefs')
const processes = [
    {
        title: "Descubrimiento y Estrategia",
        description:
        "Analizamos la esencia de tu marca, sus objetivos y su audiencia para identificar oportunidades y construir una estrategia sólida que impulse su crecimiento y diferenciación."
    },
    {
        title: "Conceptualización Creativa",
        description:
        "Desarrollamos ideas, conceptos y mensajes que reflejan auténticamente el propósito de tu marca, creando propuestas innovadoras capaces de generar conexión y recordación."
    },
    {
        title: "Diseño y Producción",
        description:
        "Convertimos las ideas en piezas visuales y materiales de comunicación de alta calidad. Gracias a nuestra producción gráfica propia, garantizamos coherencia, eficiencia y control en cada etapa."
    },
    {
        title: "Implementación y Resultados",
        description:
        "Ejecutamos campañas en medios digitales, impresos y audiovisuales, monitoreando su desempeño para optimizar resultados y maximizar el impacto de cada acción."
    }
]

let ctx

onMounted(async () => {
    const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
        import('gsap'),
        import('gsap/ScrollTrigger')
    ])
    gsap.registerPlugin(ScrollTrigger)
    await nextTick()
    const cards = cardRefs.value
    if (!cards?.length) return
    ctx = gsap.context(() => {
        cards.forEach((el, index) => {
            gsap.from(el, {
                opacity: 0,
                y: 40,
                duration: 1,
                delay: index * 0.15,
                ease: 'power3.out',
                clearProps: 'transform',
                scrollTrigger: {
                    trigger: el,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse',
                }
            })
        })
    }, processSection.value)
    ScrollTrigger.refresh()
})
onUnmounted(() => {
    ctx?.revert()
})
</script>
<template>
    <div ref="process" class="process-section">
        <div class="container">
            <div class="section-header">
                <span class="eyebrow">Cómo trabajamos</span>
                <h2>Nuestros Procesos</h2>
                <p>
                Transformamos ideas en resultados a través de una metodología clara,
                estratégica y orientada a la conexión entre marcas y personas.
                </p>
            </div>

            <div class="process-grid">
                <article 
                v-for="(process, index) in processes"
                :key="index"
                ref="cardRefs"
                class="process-card"
                >
                    <div class="card-number">
                        {{ String(index + 1).padStart(2, '0') }}
                    </div>

                    <h3>{{ process.title }}</h3>

                    <p>
                        {{ process.description }}
                    </p>

                    <div class="card-line"></div>
                </article>
                
            </div>
        </div>
    </div>
</template>
<style scoped>
.process-section {
    padding: 5rem 1.25rem;
    background: var(--light-gray);
    box-shadow: 7px 5px 20px 3px #cbcbcb;
    overflow: hidden;
}

.container {
    max-width: 1280px;
    margin: 0 auto;
}

.section-header {
    text-align: center;
    max-width: 700px;
    margin: 0 auto 5rem;
}

.section-header h2 {
    font-size: clamp(2.5rem, 5vw, 4rem);
    margin-bottom: 1rem;
    line-height: 1.1;
}

.section-header p {
    color: var(--color-gray-500);
    font-size: 1.05rem;
    line-height: 1.8;
}

.process-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
}

.process-card {
    position: relative;
    padding: 2rem;
    border-radius: 24px;
    
    background: var(--color-gray-200);
    transition:
        transform 0.4s ease,
        border-color 0.4s ease,
        background-color 0.4s ease,
        box-shadow 0.4s ease;
}

.process-card:hover {
    transform: translateY(-10px);
    background-color: var(--color-slate-200);
    box-shadow: 5px 5px 12px rgba(0, 0, 0, 0.5);
}

.card-number {
    font-size: 4rem;
    font-weight: 800;
    color: rgba(255, 162, 96, 0.5);
    line-height: 1;
    margin-bottom: 1rem;
}

.process-card h3 {
    font-size: 1.3rem;
    margin-bottom: 1rem;
}

.process-card p {
    color: var(--carbon-gris);
    line-height: 1.8;
}

.card-line {
    width: 50px;
    height: 3px;
    background: var(--color-accent);
    margin-top: 1.5rem;
    transition: width 0.4s ease;
}

.process-card:hover .card-line {
    width: 100px;
}

/* Responsive */
@media (min-width: 768px) and (max-width: 990px) {
    .process-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (min-width: 990px) {
    .process-grid {
        grid-template-columns: repeat(4, 1fr);
    }

    .process-section {
        padding: 7rem 1.5rem;
    }
}
</style>