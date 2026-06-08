<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

</script>

<template>
  <div class="bg-white text-gray-900 overflow-hidden">

    <!-- Hero -->
    <section>
        <ReusableHero
        hero-tag="Agencia de Publicidad & Marketing"
        hero-title="Damos vida a ideas"
        hero-span="que conectan."
        hero-caption="Creemos que toda marca tiene un propósito. Nuestra misión es ayudarte
              a descubrirlo, potenciarlo y comunicarlo de forma auténtica,
              estratégica y visualmente impactante."
    
        />
    </section>

    <!-- About -->
    <section class="section">
        <div class="section-container grid">
            <div>
                <span class="section-label">Quiénes Somos</span>

                <h2 class="section-title">
                    Más que publicidad,
                    construimos significado.
                </h2>
            </div>

            <div class="content-text">
                <p>
                    En nuestra empresa creemos que toda marca tiene un propósito,
                    una razón de ser. Nuestro nombre refleja nuestra filosofía:
                    ayudar a nuestros clientes a conectar con su propósito y
                    comunicarlo de manera auténtica, estratégica y visualmente
                    impactante.
                </p>

                <p>
                    Somos una agencia integral de publicidad y marketing con
                    producción gráfica propia, lo que nos permite ofrecer soluciones
                    creativas, coherentes y eficientes de principio a fin.
                </p>

                <p>
                    Desde la conceptualización de campañas hasta la ejecución final
                    en medios digitales, impresos o audiovisuales, acompañamos cada
                    proyecto con una visión global y una atención al detalle que
                    marca la diferencia.
                </p>
            </div>
        </div>
    </section>

    <!-- Values -->
    <section class="values-section">
        <div class="section-container">
            <div class="section-center">
                <span class="section-label">Nuestra Esencia</span>

                <h2 class="section-title center">
                    Lo que nos impulsa cada día
                </h2>
            </div>

            <div class="cards">
                <div class="card">
                    <div class="icon">
                        <FontAwesomeIcon :icon="['fas','bullseye']" />
                    </div>
                    <h3>Estrategia</h3>
                    <p>
                    Diseñamos acciones con propósito para generar resultados
                    medibles y conexiones reales.
                    </p>
                </div>

            <div class="card">
                <div class="icon">
                    <FontAwesomeIcon :icon="['fas','paintbrush']" />
                </div>
                <h3>Creatividad</h3>
                <p>
                Transformamos ideas en experiencias visuales memorables que
                diferencian tu marca.
                </p>
            </div>

            <div class="card">
                <div class="icon">
                    <FontAwesomeIcon :icon="['fas','check']" />
                </div>
                <h3>Producción</h3>
                <p>
                Ejecutamos cada proyecto con calidad y control total gracias
                a nuestra producción gráfica propia.
                </p>
            </div>
            </div>
        </div>
    </section>

    <!-- Team -->
    <section class="section">
        <div class="section-container team-grid">
            <div>
                <span class="section-label">Nuestro Equipo</span>

                <h2 class="section-title">
                    Personas apasionadas detrás de cada proyecto.
                </h2>

                <p class="content-text">
                    Nuestro equipo está conformado por profesionales apasionados,
                    estrategas, creativos y productores que entienden que cada
                    proyecto es único.
                </p>

                <p class="content-text mt">
                    Nos involucramos desde el primer momento, construyendo relaciones
                    sólidas basadas en la confianza, la innovación y el compromiso
                    con la excelencia.
                </p>
            </div>

            <div class="highlight-box">
                <div class="stat">
                    <span>100%</span>
                    <p>Compromiso con cada cliente</p>
                </div>

                <div class="stat">
                    <span>360°</span>
                    <p>Soluciones integrales de marketing</p>
                </div>

                <div class="stat">
                    <span>∞</span>
                    <p>Ideas con potencial ilimitado</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Final CTA -->
    <section class="final-section">
        <div class="section-container center-content">
            <span class="section-label">Nuestra Filosofía</span>

            <h2 class="final-title">
            No solo diseñamos campañas.
            </h2>

            <p class="final-text">
            Damos vida a ideas que inspiran, emocionan y conectan con las
            personas. Porque detrás de cada marca existe una historia que
            merece ser contada de la manera correcta.
            </p>
        </div>
    </section>

  </div>
  <ReusablePreFooter
    title="Únete a nuestro equipo"
    caption="Buscamos personas con talento que compartan nuestra pasión por la creatividad y la innovoción"
    button-text="Contáctanos"
    button-link="#"
    />
</template>

<style scoped>

.section-container{
  width: min(1200px, 90%);
  margin: 0 auto;
}

/* .hero-section{
  padding: 140px 0 120px;
  text-align: center;
  background:
    radial-gradient(circle at top,
    rgba(230,230,230,.8),
    transparent 50%);
}

.hero-tag{
  display:inline-block;
  padding:10px 18px;
  border:1px solid #e5e7eb;
  border-radius:999px;
  font-size:.9rem;
  margin-bottom:24px;
  color:#6b7280;
}

.hero-title{
  font-size:clamp(3rem,8vw,6rem);
  line-height:1;
  font-weight:800;
  letter-spacing:-3px;
  max-width:900px;
  margin:auto;
}

.hero-title span{
  display:block;
  color:#9f9f9f;
}

.hero-description{
  max-width:750px;
  margin:40px auto 0;
  font-size:1.2rem;
  line-height:1.8;
  color:#6b7280;
} */

.section{
  padding:120px 0;
}

.grid{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:80px;
}

.section-label{
  color: var(--color-accent);
  text-transform:uppercase;
  letter-spacing:3px;
  font-size:.8rem;
}

.section-title{
  font-size:clamp(2rem,5vw,4rem);
  line-height:1.1;
  margin-top:20px;
  font-weight:800;
  letter-spacing:-2px;
}

.content-text{
  color:#4b5563;
  line-height:2;
  font-size:1.05rem;
}

.content-text p{
  margin-bottom:25px;
}

.values-section{
  padding:120px 0;
  background:#fafafa;
}

.section-center{
  text-align:center;
  margin-bottom:70px;
}

.center{
  text-align:center;
}

.cards{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:30px;
}

.card{
  background:white;
  padding:40px;
  border-radius:24px;
  border:1px solid #ededed;
  transition:.4s;
}

.card:hover{
  transform:translateY(-8px);
  box-shadow:0 20px 50px rgba(0,0,0,.08);
}

.icon{
  font-size:2rem;
  margin-bottom:20px;
  color: var(--color-primary)
}

.card h3{
  margin-bottom:15px;
  font-size:1.4rem;
}

.card p{
  color:#6b7280;
  line-height:1.8;
}

.team-grid{
  display:grid;
  grid-template-columns:1.2fr .8fr;
  gap:60px;
  align-items:center;
}

.highlight-box{
  background:linear-gradient(
    135deg,
    #f8f8f8,
    #ffffff
  );

  border:1px solid #ececec;
  border-radius:30px;
  padding:50px;
}

.stat{
  margin-bottom:40px;
}

.stat:last-child{
  margin-bottom:0;
}

.stat span{
  display:block;
  font-size:3rem;
  font-weight:800;
  color: var(--color-accent);
}

.stat p{
  color:#6b7280;
}

.mt{
  margin-top:20px;
}

.final-section{
  padding:140px 0;
  background:#fafafa;
}

.center-content{
  text-align:center;
}

.final-title{
  font-size:clamp(2.5rem,6vw,5rem);
  font-weight:800;
  margin-top:20px;
  letter-spacing:-2px;
}

.final-text{
  max-width:750px;
  margin:30px auto 0;
  font-size:1.2rem;
  line-height:1.8;
  color:#6b7280;
}

@media (max-width: 900px){

  .grid,
  .team-grid,
  .cards{
    grid-template-columns:1fr;
  }

  .section{
    padding:80px 0;
  }

  .hero-section{
    padding:100px 0 80px;
  }

  .hero-title{
    letter-spacing:-1px;
  }
}

</style>