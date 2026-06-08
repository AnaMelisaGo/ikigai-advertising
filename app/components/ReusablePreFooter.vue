<script setup>
defineProps({
    title: {
        type: String,
        required: true,
    },
    caption: {
        type: String,
        default: '',
    },
    buttonText: {
        type: String,
        default: null,
    },
    buttonLink: {
        type: String,
        default: null
    }
})
</script>
<template>
    <section class="prefoot-container">
        <div class="prefoot-content">
            <h2 class="prefoot-title">
                {{ title }}
            </h2>
            <p class="prefoot-caption">
                {{ caption }}
            </p>
            <NuxtLink v-if="buttonText && buttonLink" :to="buttonLink" class="prefoot-ctaBtn">
                {{ buttonText }}
            </NuxtLink>
        </div>
    </section>
</template>
<style scoped>
.prefoot-container {
    display: flex;
    justify-content: center;
    align-items: center;
    background: radial-gradient(592px at 48.2% 50%, rgba(255, 255, 249, 0.6) 0%, rgb(160, 199, 254) 74.6%);
}
.prefoot-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5rem 1rem;
    text-align: center;
}
.prefoot-title {
    font-size: 2rem;
    font-weight: 700;
    margin: 1rem;
}
.prefoot-caption {
    font-style: italic;
}
.prefoot-ctaBtn {
    background: var(--color-primary);
    border-radius: 10px;
    margin: 2rem;
    padding: 1rem 5rem;
    color: white;
    transition: all .5s ease-in-out;
}
.prefoot-ctaBtn:hover {
    box-shadow: 5px 5px 12px rgba(0, 0, 0, 0.5);
    background: var(--color-accent);
    transform: scale(1.1)
}
</style>