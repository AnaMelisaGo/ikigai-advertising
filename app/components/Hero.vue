<template>
    <section class="hero-container">
        <video
        autoplay
        muted
        loop
        playsinline
        class="hero-video"
        >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
         Your browser does not support the video tag.
        </video>
        <div class="overlay"></div>
        <div class="title">
            <h1>El poder de crear</h1>
            <p>Innovación, estrategia y creatividad</p>
            <NuxtLink to="/portfolio" class="cta-btn">Ver Portfolio</NuxtLink>
        </div>
    </section>
</template>
<style scoped>
.hero-container {
    position: relative;
    height: 90vh;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: --color-secondary;
}

.hero-video {
    position: absolute;
    min-width: 100%;
    min-height: 100%;
    object-fit: cover;
}

.overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(rgb(0 0 0 / 5%) 46%, rgba(0, 0, 0, 0.6) 100%);
}

.title {
    position: relative;

    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    top: 90px;
}

.title h1 {
    font-size: clamp(2rem, 10vw, 5rem);
    font-weight: 600;
    animation: scale-up 1s ease-out forwards;
    text-align: center;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    opacity: 0;
}

.title p {
    animation: typewriter 2s steps(40) forwards, blink 0.7s step-end infinite;
    animation-delay: 1s;
    overflow: hidden;
    white-space: nowrap;
    width: 0;
    border-right: 2px solid white;
    font-size: clamp(1rem, 3vw, 1.5rem);
}

.cta-btn {
    background: rgb(39 39 39 / 22%);
    margin: 2.5rem 1rem 1.5rem;
    padding: 0.75rem 3.5rem;
    border: solid 1px white;
    border-radius: 999px;
    transition: transform 0.5s ease-in-out, background 0.5s ease, box-shadow 0.5s ease;
    opacity: 0;
    animation: slide-down 1s ease-out 3s 1 normal forwards;
}

.cta-btn:hover {
    box-shadow: 5px 5px 12px rgba(0, 0, 0, 0.5);
    background: var(--color-accent);
    transform: scale(1.3);
    transform-origin: center;
}

/* animations */
@keyframes slide-down {
    from {
        margin-bottom: 100px;
        opacity: 0;
    }
    to {
        margin-bottom: 20px;
        opacity: 1;
    }
}

@keyframes scale-up {
    0% {
        transform: scale(0);
        opacity: 0;
    }
    50% {
        transform: scale(1.2);
        opacity: 1;
    }

    100% {
        transform: scale(1);
        transform-origin: center;
        opacity: 1;
    }
}

@keyframes typewriter {
    from {
        width: 0;
    }
    to {
        width: 27ch;
    }
}

@keyframes blink {
    50% {
        border-color: transparent;
    }
}
</style>