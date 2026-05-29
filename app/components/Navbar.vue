<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const mobileOpen = ref(false)
const servicesOpen = ref(false)
const ownBrandsOpen = ref(false)
const servicesMenuRef = ref(null)

const services = [
    { name: 'Graphics', link: '#' },
    { name: 'Events', link: '#' },
    { name: 'Digital', link: '#' },
]

const toggleMenu = () => {
    mobileOpen.value = !mobileOpen.value
}

const toggleServices = () => {
    servicesOpen.value = !servicesOpen.value
}

const closeServicesOnClickOutside = (event) => {
    if (servicesMenuRef.value && !servicesMenuRef.value.contains(event.target)) {
        servicesOpen.value = false
    }
}


// Close mobile menu on window resize
const handleResize = () => {
    if (window.innerWidth >= 768) {
        closeMenu()
    }
}

const closeMenu = () => {
    mobileOpen.value = false
}

onMounted(() => {
    window.addEventListener('resize', handleResize)
    document.addEventListener('click', closeServicesOnClickOutside)
})

onBeforeUnmount(() => {
    window.removeEventListener('resize', handleResize)
    document.removeEventListener('click', closeServicesOnClickOutside)
})

</script>
<template>
    <header>
        <nav class="navbar backdrop-blur-sm shadow-md">
            <div class="logo">
                <NuxtLink class="text-xl font-bold" to="/">
                    Ikigai Advertising
                </NuxtLink>
            </div>
            <!-- Desktop Menu -->
            <div class="hidden items-center gap-8 md:flex sm:gap-6">
                <NuxtLink class="nav-link hover:bg-primary/40 text-gray-700" active-class="bg-accent text-white" to="/"  @mouseenter="servicesOpen = false">Inicio</NuxtLink>
                <NuxtLink class="nav-link hover:bg-primary/40 text-gray-700" active-class="bg-accent text-white" to="#" @mouseenter="servicesOpen = false">Quienes Somos</NuxtLink>
                <div class="nav-link relative hover:bg-primary/40 text-gray-700" @mouseenter="servicesOpen = true" @click="toggleServices" ref="servicesMenuRef">
                    <div active-class="bg-accent text-white">
                        Servicios
                    </div>
                    <Transition name="dropdown">
                        <div class="dropdown-menu shadow-lg" v-show="servicesOpen" @mouseenter="servicesOpen = true" @mouseleave="servicesOpen = false">
                            <NuxtLink v-for="service in services" :key="service.name" class="px-4 py-2 text-gray-300 hover:bg-primary/40 hover:text-white" active-class="bg-accent text-white" :to="service.link" @click="servicesOpen = false">
                                {{ service.name }}
                            </NuxtLink>

                            <div class="relative px-4 py-2 text-gray-300 hover:bg-primary/40 hover:text-white" active-class="bg-accent text-white" @mouseenter="ownBrandsOpen = true" @mouseleave="ownBrandsOpen = false">
                                Own Brands
                                <Transition name="subdropdown">
                                    <div class="sub-dropdown-menu shadow-lg" v-show="ownBrandsOpen" @mouseenter="ownBrandsOpen = true" @mouseleave="ownBrandsOpen = false">
                                        <NuxtLink class="block px-4 py-2 text-gray-300 hover:bg-primary/40 hover:text-white" active-class="bg-accent text-white" to="#">
                                            Vibe Music Wear
                                        </NuxtLink>
                                        <NuxtLink class="block px-4 py-2 text-gray-300 hover:bg-primary/40 hover:text-white" active-class="bg-accent text-white" to="#">
                                            Tiento Fest
                                        </NuxtLink>
                                    </div>
                                </Transition>
                            </div>
                        </div>
                    </Transition> 
                </div>
                <NuxtLink class="nav-link hover:bg-primary/40 text-gray-700" active-class="bg-accent text-white" to="#"  @mouseenter="servicesOpen = false">RSC</NuxtLink>
                <NuxtLink class="nav-link hover:bg-primary/40 text-gray-700" active-class="bg-accent text-white" to="#" @mouseenter="servicesOpen = false">Portfolio</NuxtLink>
                <NuxtLink class="nav-link hover:bg-primary/40 text-gray-700" active-class="bg-accent text-white" to="#" @mouseenter="servicesOpen = false">Contacto</NuxtLink>
            </div>

            <!-- Mobile Menu -->
            <button 
                type="button" 
                class="relative h-8 w-8 cursor-pointer md:hidden" 
                aria-label="Toggle menu" 
                :aria-expanded="mobileOpen"
                @click="toggleMenu"
            >
                <span class="burger-line top-1"></span>
                <span class="burger-line top-1/2"></span>
                <span class="burger-line bottom-1"></span>
            </button>

            <!-- Overlay -->
            <Transition name="fade">
                <div 
                    v-if="mobileOpen" 
                    class="overlay" 
                    @click="closeMenu"
                />
            </Transition>
            <Transition name="slide">
                <aside v-if="mobileOpen" class="mobile-menu bg-gris-carbon/90 md:hidden">
                    <NuxtLink class="mobile-link text-gray-300" active-class="bg-accent text-white" to="/">Inicio</NuxtLink>
                    <NuxtLink class="mobile-link text-gray-300" active-class="bg-accent text-white" to="#">Quienes Somos</NuxtLink>
                    <NuxtLink class="mobile-link text-gray-300" active-class="bg-accent text-white" to="#">Servicios</NuxtLink>
                    <NuxtLink class="mobile-link text-gray-300" active-class="bg-accent text-white" to="#">RSC</NuxtLink>
                    <NuxtLink class="mobile-link text-gray-300" active-class="bg-accent text-white" to="#">Portfolio</NuxtLink>
                    <NuxtLink class="mobile-link text-gray-300" active-class="bg-accent text-white" to="#">Contacto</NuxtLink>
                </aside>
            </Transition>
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
        background: #f8f9fa;

        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem 2rem 1rem 1rem;
    }

    .logo {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem 0;
    }
    .nav-link {
        position: relative;
        padding: 6px 10px;
        font-size: calc(1rem + 0.25vw);

        /* border: 1px solid black; */
        border-radius: 10px;
    }

    .dropdown-menu {
        position: absolute;
        top: 4.1rem;
        left: -50%;
        width: 200px;
        background: #1f2937;
        border-radius: 10px;
        padding: 0.5rem 0;
        display: flex;
        flex-direction: column;
    }

    .sub-dropdown-menu {
        position: absolute;
        top: 0;
        left: 12.5rem;
        border-radius: 10px;
        padding: 0.5rem 0;
        width: 200px;

        background: #1f2937;
        display: flex;
        flex-direction: column;
    }

    .overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background: rgba(0, 0, 0, 0.1);
        z-index: 1;
    }

    .burger-line {
        position: absolute;
        left: 0;
        width: 100%;
        height: 2px;
        background: black;
        transition: transform 0.2s ease, opacity 0.2s ease
    }

    .mobile-menu {
        position: absolute;
        top: 100%;
        right: 0;
        width: 60%;
        height: 100vh;
        padding: 1rem 0;
        z-index: 10;

        display: flex;
        flex-direction: column;
    }

    .mobile-link {
        padding: 0.75rem 3.25rem;
        font-size: 1.25rem;
        /* color: #d1d5dc; */
        transform: translate(0);
        transition: all 0.8s ease;
    }

    .mobile-link:hover {
        background: var(--color-primary);
        color: white;
        transform: translate(2rem);
    }

    .slide-enter-active, 
    .slide-leave-active, 
    .fade-enter-active, 
    .fade-leave-active,
    .dropdown-enter-active,
    .dropdown-leave-active,
    .subdropdown-enter-active,
    .subdropdown-leave-active {
        transition: all 0.8s ease;
    }

    .slide-enter-from, .slide-leave-to {
        transform: translateX(100%);
    }

    .fade-enter-from, .fade-leave-to {
        opacity: 0;
    }

    .dropdown-enter-from, .dropdown-leave-to {
        opacity: 0;
        transform: translateY(-10px);
    }

    .subdropdown-enter-from, .subdropdown-leave-to {
        opacity: 0;
        transform: translateX(-10px);
    }

</style>