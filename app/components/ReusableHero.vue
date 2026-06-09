<script setup>
defineProps({
    heroTag: {
        type: String,
        required:true,
    },
    heroTitle: {
        type: String,
        required: true,
    },
    heroSpan: {
        type: String,
        default: null,
    },
    heroCaption: {
        type: String,
        required: true,
    },
    background: {
        type: String,
        defafult: 'radial-gradient(circle at top, rgba(230,230,230,.8), transparent 50%)',
    }
    // backgroundImage: {
    //     type: String,
    // }
})
</script>
<template>
    <div class="reusable-hero" :style="{ background:background }">
      <div class="hero-container">
        <span class="hero-tag">
          {{ heroTag }}
        </span>

        <h1 class="hero-title">
          {{ heroTitle }}
          <span>{{ heroSpan }}</span>
        </h1>

        <p class="hero-description">
          {{ heroCaption }}
        </p>
      </div>
    </div>
    <!-- <div class="reusable-hero" :style="{backgroundImage: backgroundImage ? `linear-gradient(rgb(0 0 0 / 5%) 46%, rgba(0, 0, 0, 0.6) 100%), url(${backgroundImage})`: 'none'}"> -->
</template>
<style scoped>
.reusable-hero {
    padding: 140px 0 120px;
    text-align: center;
    /* background:
    radial-gradient(circle at top,
    rgba(230,230,230,.8),
    transparent 50%); */
    /* background: linear-gradient(to top, #fff1eb 0%, #ace0f9 100%); */
}

.reusable-hero .hero-container {
    width: min(1200px, 90%);
    margin: 0 auto;
}

.hero-tag{
  display:inline-block;
  padding:10px 18px;
  border:1px solid #e5e7eb;
  border-radius:999px;
  font-size:.9rem;
  margin-bottom:24px;
  color: var(--color-accent);
  opacity: 0;

  animation: fadeIn 2s ease-out 1.5s 1 normal forwards;
}

.hero-container .hero-title {
    font-size:clamp(3rem,8vw,6rem);
    line-height:1;
    font-weight:800;
    letter-spacing:-3px;
    max-width:900px;
    margin:auto;

    opacity: 0;
    animation: slideDown 1s ease-out forwards;
    transition: transform 1s ease-in-out;
}

.hero-title span {
  display:block;
  color:#9f9f9f;
}

.hero-container .hero-description {
    max-width:750px;
    margin:40px auto 0;
    font-size:1.2rem;
    line-height:1.8;
    color:#6b7280;

    opacity: 0;
    animation: slideDown 1s ease-in-out forwards;
    transition: transform 1s ease-in-out;
    animation-delay: .5s;
}

@keyframes slideDown {
    from {
        opacity: 0;
        transform: translateY(-40px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

</style>