<script setup lang="ts">
defineProps<{
    error: {
        statusCode?: number
        statusMessage?: string
    }
}>()

const goHome = () => clearError({ redirect: '/' })
</script>

<template>
    <main class="error-page">
        <div class="error-logo">
            <img src="/images/logo.png" alt="Logo">
        </div>
        <!-- 404 -->
        <div v-if="error.statusCode === 404">
            <h1>404</h1>
            <h2>Página no encontrada</h2>
            <p>La página que busca no existe. Disculpen las molestias.</p>
        </div>

        <!-- 500 -->
        <div v-else-if="error.statusCode === 500">
            <h1>500</h1>
            <h2>Something went wrong</h2>
            <p>
                We're experiencing a temporary issue. Please try again later.
            </p>
        </div>

        <!-- Fallback -->
        <div v-else>
            <h1>{{ error.statusCode }}</h1>
            <h2>{{ error.statusMessage }}</h2>
        </div>

        <button @click="goHome" class="btn-96">
            Ir al inicio
        </button>
    </main>
</template>
<style scoped>
.error-page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100vh;

    background: linear-gradient(109.6deg, rgb(245, 239, 249) 30.1%, rgb(207, 211, 236) 100.2%);
}

.error-logo img {
    width: 6rem;

    animation: spin 4s linear infinite;
}

.error-page h1 {
    font-size: 10rem;
    text-shadow: 10px 7px 12px var(--color-gray-500);
}

.error-page h2 {
    font-weight: 600;
    font-size: 2rem;
}

.error-page p {
    color: var(--color-gray-500)
}

/* .error-btn {
    border: 1px solid var(--color-gray-300);
    border-radius: 999px;
    padding: 1rem 3rem;
    margin-top: 3rem;
    transition: all .8s ease;
}

.error-btn:hover {
    background: var(--color-accent);
    border-color: var(--color-accent);
    transform: translateY(-8px);
    box-shadow: 10px 7px 12px var(--color-gray-500);
} */

.btn-96 {
    position: relative;
    padding: 10px 20px;
    border-radius: 7px;
    border: 1px solid var(--color-gray-300);
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 2px;
    background: transparent;
    /* color: #000; */
    overflow: hidden;
    box-shadow: 0 0 0 0 transparent;
    transition: all 0.2s ease-in;
    font-family: Arial, Helvetica, sans-serif;
    cursor: pointer;
    text-decoration: none;
    user-select: none;
    display: inline-flex;
    justify-content: center;
    align-items: center;

    border-radius: 999px;
    padding: 1rem 3rem;
    margin-top: 3rem;
}

.btn-96:hover {
    color: #fff;
    background: var(--color-accent);
    box-shadow: 0 0 30px 5px var(--color-orange-300);
    transition: all 0.2s ease-out;
}

.btn-96:hover::before {
    animation: animation_96 0.5s 0s linear;
}

.btn-96::before {
    content: '';
    display: block;
    width: 10px;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0%;
    opacity: 0;
    background: #fff;
    box-shadow: 0 0 50px 30px #fff;
    transform: skewX(-20deg);
}

.btn-96:active {
    box-shadow: 0 0 0 0 transparent;
    transition: box-shadow 0.2s ease-in;
}

@keyframes animation_96 {
    0% {
        opacity: 0;
        left: 0%;
    }

    50% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        left: 100%;
    }
}

@keyframes spin {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
</style>