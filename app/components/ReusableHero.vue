<script setup>
defineProps({
    heroTitle: {
        type: String,
        required: true,
    },
    heroCaption: {
        type: String,
        required: true,
    },
    buttonText: {
        type: String,
        default: null,
    },
    buttonLink: {
        type: String,
        default: null,
    },
    backgroundImage: {
        type: String,
        // default: '#fff',
    }
})
</script>
<template>
    <div class="reusable-hero" :style="{backgroundImage: backgroundImage ? `linear-gradient(rgb(0 0 0 / 5%) 46%, rgba(0, 0, 0, 0.6) 100%), url(${backgroundImage})`: 'none'}">
        <div class="hero-container">
            <h2 class="title">
                {{ heroTitle }}
    
            </h2>
    
            <p class="caption">
                {{ heroCaption }}
    
            </p>
            <NuxtLink v-if="buttonText && buttonLink" :to="buttonLink" class="hero-btn">{{ buttonText }}</NuxtLink>
        </div>
    </div>
</template>
<style scoped>
.reusable-hero {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 85vh;
    padding: 6rem 2rem;
}

.reusable-hero .hero-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    height: 100%;
    color: white;
}

.hero-container .title {
    font-size: 4rem;
    opacity: 0;

    animation: slideDown 1s ease-out forwards;
    transition: transform 1s ease-in-out;
}

.hero-container .caption {
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

</style>