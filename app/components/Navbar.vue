<script setup>
</script>
<template>
    <header>
        <nav class="navbar backdrop-blur-sm bg-white/70 shadow-md">
            <div class="logo">
                <NuxtLink class="text-xl font-bold" to="/">
                    Ikigai Advertising
                </NuxtLink>
            </div>
            <!-- Desktop Menu -->
            <div class="hidden items-center gap-10 md:flex">
                <NuxtLink class="nav-link" to="/">Inicio</NuxtLink>
                <NuxtLink class="nav-link" to="#">Quienes Somos</NuxtLink>
                <NuxtLink class="nav-link" to="#">Servicios</NuxtLink>
                <NuxtLink class="nav-link" to="#">Portfolio</NuxtLink>
                <NuxtLink class="nav-link" to="#">Contacto</NuxtLink>
                <!-- <div class="navbar-start">
                </div> -->
            </div>

            <!-- Mobile Menu -->
            <button type="button" class="relative h-8 w-8 md:hidden" aria-label="Toggle menu">
                <span class="burger-line top-1"></span>
                <span class="burger-line top-1/2"></span>
                <span class="burger-line bottom-1"></span>
            </button>
        </nav>
    </header>
</template>
<style scoped>
    .navbar {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 50;
        width: 100%;

        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem;
    }

    .logo {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem 0;
    }
    .nav-link {
        position: relative;
        padding-bottom: 4px;
    }

    .burger-line {
        position: absolute;
        left: 0;
        width: 100%;
        height: 2px;
        background: black;
        transition: transform 0.2s ease, opacity 0.2s ease
    }
</style>