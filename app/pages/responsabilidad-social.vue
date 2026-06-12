<script setup>
import { useReveal } from '~/composables/useReveal'
useReveal()
</script>
<template>
  <div class="rsc">

    <!-- HERO -->
    <ReusableHero
    hero-tag="Responsabilidad Social Corporativa"
    hero-title="Compromiso"
    hero-span="social"
    hero-caption="Creatividad, innovación y responsabilidad, trabajando juntas para construir una publicidad más consciente."
    background="radial-gradient(circle at top, #e8f5ea, #ffffff)"
    />

    <!-- INTRO -->
    <section ref="intro" class="section">
      <h2 class="reveal">Nuestra visión</h2>
      <p class="reveal">
        Entendemos la Responsabilidad Social Corporativa como un compromiso continuo con las personas,
        el medio ambiente y la calidad de nuestros servicios. Buscamos desarrollar proyectos publicitarios
        y de producción gráfica que aporten valor mientras fomentamos prácticas responsables.
      </p>
    </section>

    <!-- PILARES -->
    <section ref="pillars" class="rsc-card-container">

      <div class="rsc-card reveal">
        <h3>🌱 Sostenibilidad</h3>
        <p>Reducimos el impacto ambiental mediante procesos eficientes y materiales responsables.</p>
      </div>

      <div class="rsc-card reveal">
        <h3>👥 Personas</h3>
        <p>Fomentamos el crecimiento profesional, igualdad y bienestar laboral.</p>
      </div>

      <div class="rsc-card reveal">
        <h3>🤝 Clientes</h3>
        <p>Transparencia, calidad y compromiso en cada proyecto.</p>
      </div>

      <div class="rsc-card reveal">
        <h3>🏘️ Comunidad</h3>
        <p>Colaboramos con iniciativas locales de impacto positivo.</p>
      </div>

    </section>

    <!-- PRODUCCIÓN -->
    <section ref="production" class="section highlight">
      <h2 class="reveal">Producción gráfica responsable</h2>
      <p class="reveal">
        Optimizamos materiales, reducimos desperdicios y trabajamos con proveedores responsables.
        Cada proyecto equilibra creatividad, eficiencia y respeto por el entorno.
      </p>
    </section>

    <!-- ACCIONES -->
    <section ref="actions" class="section">
      <h2 class="reveal">Acciones reales</h2>

      <ul class="list">
        <li>Digitalización de procesos para reducir papel.</li>
        <li>Optimización de impresión para minimizar residuos.</li>
        <li>Formación continua del equipo.</li>
        <li>Colaboración con proveedores locales.</li>
      </ul>
    </section>

    <!-- FUTURO -->
    <section ref="future" class="section">
      <h2 class="reveal">Objetivos de futuro</h2>
      <p class="reveal">
        Reducir impacto ambiental, mejorar eficiencia energética y ampliar iniciativas sociales.
      </p>
    </section>

    <!-- CTA -->

    <ReusablePreFooter 
    span="¿Quieres conocernos?"
    title="Descubre quienes somos"
    caption="Conoce nuestra historia, nuestros valores y el equipo que hace posible cada proyecto."
    button-text="Acerca de Ikigai Advertising"
    button-link="/about"
    />
  </div>
</template>
<style scoped>

.section {
  padding: 70px 20px;
  max-width: 1000px;
  margin: auto;
}

.section h2 {
  font-size: 2rem;
  margin-bottom: 20px;
}

/* =========================
   GRID CARDS PREMIUM
========================= */

.rsc-card-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;

  max-width: 1000px;
  margin: auto;
  /* padding-bottom: 10rem; */
  padding: 0 1rem 10rem;
}

.rsc-card {
  background: #f7f7f7;
  padding: 28px;
  border-radius: 14px;
  transition: all 0.4s ease;
  border: 1px solid transparent;
}

.rsc-card:hover {
  /* transform: translateY(-6px); */
  border-color: #d9f5e3;
  box-shadow: 0 10px 30px rgba(0,0,0,0.06);
}

/* =========================
   HIGHLIGHT SECTION
========================= */

.highlight {
  background: #f4f9f5;
  padding: 40px;
  border-radius: 16px;
}

/* =========================
   LIST
========================= */

.list {
  list-style: none;
  padding: 0;
}

.list li {
  padding: 14px 0;
  border-bottom: 1px solid #eee;
}

/* =========================
   CTA PREMIUM
========================= */

.cta {
  background: #0f0f0f;
  color: white;
  padding: 120px 20px;
  text-align: center;
}

.cta-inner {
  max-width: 700px;
  margin: auto;
}

.cta button {
  margin-top: 20px;
  padding: 14px 28px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  transition: 0.3s;
}

.cta button:hover {
  transform: scale(1.05);
  background: #ddd;
}

/* =========================
   RESPONSIVE
========================= */

@media (min-width: 768px) {

  .rsc-card-container {
    grid-template-columns: repeat(2, 1fr);
  }

  .highlight {
    padding: 80px;
  }
}

</style>