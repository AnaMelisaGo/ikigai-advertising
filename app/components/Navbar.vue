<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import gsap from 'gsap'

const mobileOpen = ref(false)
const servicesOpen = ref(false)
const ownBrandsOpen = ref(false)
const ownBrandsshow = ref(false)
const servicesMenuRef = ref(null)
const navbar = ref(null)

// panels
const mainMobileMenu = ref(null)
const servicesMobileMenu = ref(null)

const burgerTop = ref(null)
const burgerMiddle = ref(null)
const burgerBottom = ref(null)

//timeline
let servicesTimeline
let burgerTimeline
let navbarTimeline

let lastscrollY = 0

const openMobile = () => {
    mobileOpen.value = true
    burgerTimeline.play()
}

const closeMenu = () => {
    mobileOpen.value = false
    // reset submenu back to the main menu
    servicesTimeline?.pause(0)
    burgerTimeline.reverse()
}

const openServicesMenu = () => {
    servicesTimeline.play()
}

const backToMainMenu = () => {
    servicesTimeline.reverse()
}

// services data except Own Brands
const services = [
    { name: 'Graphics', link: '/servicios/graphics' },
    { name: 'Events', link: '/servicios/events' },
    { name: 'Digital', link: '/servicios/digital' },
]

const toggleMenu = () => {
    if (mobileOpen.value) {
        closeMenu()
    } else {
        openMobile()
    }
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
        servicesOpen.value = false
    }
}

const handleScroll = () => {
    const currentScrollY = window.scrollY
    if (currentScrollY > lastscrollY && currentScrollY > 100) {
        navbarTimeline.play()
    } else {
        navbarTimeline.reverse()
    }
    lastscrollY = currentScrollY
}

onMounted(() => {
    gsap.set(mainMobileMenu.value, {
        xPercent: 0
    })

    gsap.set(servicesMobileMenu.value, {
        xPercent: 100
    })
    // Initialize GSAP timeline for services submenu
    servicesTimeline = gsap.timeline({ paused: true, defaults: {duration: 0.35, ease: 'power3.inOut'} })
    servicesTimeline.to(mainMobileMenu.value, { xPercent: -100 }).to(servicesMobileMenu.value, { xPercent: 0 }, 0)

    // Initialize GSAP timeline for burger menu animation
    burgerTimeline = gsap.timeline({ paused: true })
    burgerTimeline.to(burgerTop.value, { y: 13, rotation: 45, transformOrigin: 'center', duration: 0.2 }, 0)
    burgerTimeline.to(burgerMiddle.value, { opacity: 0, duration: 0.2 }, 0)
    burgerTimeline.to(burgerBottom.value, { y: -8, rotation: -45, duration: 0.2 }, 0)

    // Initialize GSAP timeline for navbar scroll animation
    navbarTimeline = gsap.timeline({ paused: true })
    navbarTimeline.to(navbar.value, {
        y: '-100%',
        duration: 0.35,
        ease: 'power3.inOut'
    })

    // Add event listener for clicks outside the services menu
    document.addEventListener('click', closeServicesOnClickOutside)

    // Add event listener for window resize
    window.addEventListener('resize', handleResize)

    // Add event listener for scroll
    window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
    window.removeEventListener('resize', handleResize)
    document.removeEventListener('click', closeServicesOnClickOutside)
    window.removeEventListener('scroll', handleScroll)
})

</script>
<template>
    <header>
        <nav ref="navbar" class="navbar backdrop-blur-sm shadow-lg">
            <div class="logo">
                <NuxtLink class="text-xl font-bold flex items-center" to="/">
                    <img src="/images/logo.png" alt="Logo" class="me-2 w-12 circle"/>
                    <img src="/images/logo-name.png" alt="Logo Text" class="h-10 md:h-10"/>
                </NuxtLink>
            </div>
            <!-- Desktop Menu -->
            <div class="hidden sm:hidden items-center gap-8 md:flex md:gap-4">
                <NuxtLink class="nav-link text-gray-700" active-class="active" to="/"  @mouseenter="servicesOpen = false">Inicio</NuxtLink>
                <!-- <NuxtLink class="nav-link text-gray-700" active-class="active" to="/about" @mouseenter="servicesOpen = false">Quienes Somos</NuxtLink> -->
                <div class="nav-link relative text-gray-700 cursor-pointer" @mouseenter="servicesOpen = true" ref="servicesMenuRef">
                    <div active-class="active">
                        Servicios
                    </div>
                    <Transition name="dropdown">
                        <div class="dropdown-menu shadow-lg" v-show="servicesOpen" @mouseenter="servicesOpen = true" @mouseleave="servicesOpen = false">
                            <NuxtLink v-for="service in services" :key="service.name" class="dropdown-link px-15 py-3 text-gray-300" active-class="active" :to="service.link" @click="servicesOpen = false">
                                {{ service.name }}
                            </NuxtLink>

                            <div class="dropdown-link relative px-15 py-3 text-gray-300" active-class="active" @mouseenter="ownBrandsOpen = true" @mouseleave="ownBrandsOpen = false">
                                Own Brands
                                <Transition name="subdropdown">
                                    <div class="sub-dropdown-menu shadow-lg" v-show="ownBrandsOpen" @mouseenter="ownBrandsOpen = true" @mouseleave="ownBrandsOpen = false">
                                        <NuxtLink class="dropdown-link block px-4 py-2 text-gray-300" active-class="active" to="/servicios/own-brands/vibe-music-wear" @click="servicesOpen = false">
                                            Vibe Music Wear
                                        </NuxtLink>
                                        <NuxtLink class="dropdown-link block px-4 py-2 text-gray-300" active-class="active" to="/servicios/own-brands/tiento-fest" @click="servicesOpen = false">
                                            Tiento Fest
                                        </NuxtLink>
                                    </div>
                                </Transition>
                            </div>
                        </div>
                    </Transition>
                </div>
                <NuxtLink class="nav-link text-gray-700" active-class="active" to="/portfolio" @mouseenter="servicesOpen = false">Portfolio</NuxtLink>
                <NuxtLink class="nav-link text-gray-700" active-class="active" to="/responsabilidad-social"  @mouseenter="servicesOpen = false">RSC</NuxtLink>
                <NuxtLink class="nav-link text-gray-700" active-class="active" to="/contacto" @mouseenter="servicesOpen = false">Contacto</NuxtLink>
            </div>

            <!-- Mobile Menu -->
            <button
                type="button"
                class="relative h-8 w-8 cursor-pointer z-2 md:hidden"
                aria-label="Toggle menu"
                :aria-expanded="mobileOpen"
                @click="toggleMenu"
            >
                <span ref="burgerTop" class="burger-line top-1"></span>
                <span ref="burgerMiddle" class="burger-line top-1/2"></span>
                <span ref="burgerBottom" class="burger-line bottom-1"></span>
            </button>

            <!-- Overlay -->
            <Transition name="fade">
                <div
                    v-show="mobileOpen"
                    class="overlay"
                    @click="closeMenu"
                />
            </Transition>
            <Transition name="slide">
                <aside v-show="mobileOpen" class="mobile-menu bg-gris-carbon/90 md:hidden">
                    <!-- Mobile Menu Content -->
                    <div ref="mainMobileMenu" class="absolute inset-0 flex flex-col py-8 overflow-hidden">
                        <NuxtLink class="mobile-link text-gray-300" active-class="active" to="/" @click="closeMenu">Inicio</NuxtLink>
                        <NuxtLink class="mobile-link text-gray-300" active-class="active" to="/about" @click="closeMenu">Quienes Somos</NuxtLink>
                        <div class="mobile-link text-gray-300 cursor-pointer" active-class="active" @click="openServicesMenu">Servicios</div>
                        <NuxtLink class="mobile-link text-gray-300" active-class="active" to="/portfolio" @click="closeMenu">Portfolio</NuxtLink>
                        <NuxtLink class="mobile-link text-gray-300" active-class="active" to="/responsabilidad-social" @click="closeMenu">RSC</NuxtLink>
                        <NuxtLink class="mobile-link text-gray-300" active-class="active" to="/contacto" @click="closeMenu">Contacto</NuxtLink>
                    </div>
                    <div ref="servicesMobileMenu" class="absolute inset-0 flex flex-col py-8">
                        <button type="button" class="back-btn text-left font-semibold text-gray-400 ps-4 cursor-pointer" @click="backToMainMenu">
                            <FontAwesomeIcon icon="fa-solid fa-circle-chevron-left" class="back-icon" /> Back
                        </button>
                        <NuxtLink v-for="service in services" :key="service.name" class="mobile-link text-gray-300" active-class="active" :to="service.link" @click="closeMenu" @mouseenter="ownBrandsshow = false">{{  service.name }}</NuxtLink>
                        <NuxtLink class="mobile-link text-gray-300" active-class="active" to="#" @click="ownBrandsshow = true" @mouseenter="ownBrandsshow = true">Own Brands</NuxtLink>
                        <div v-show="ownBrandsshow" class="flex flex-col ms-12">
                            <NuxtLink class="mobile-link text-gray-300" active-class="active" to="/servicios/own-brands/vibe-music-wear" @click="closeMenu">Vibe Music Wear</NuxtLink>
                            <NuxtLink class="mobile-link text-gray-300" active-class="active" to="/servicios/own-brands/tiento-fest" @click="closeMenu">Tiento Fest</NuxtLink>
                        </div>
                    </div>
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
        background: var(--light-gray);

        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem 2rem 1rem 1rem;
    }

    .logo {
        display: flex;
        align-items: center;
        justify-content: space-between;
        /* padding: 1rem 0; */
    }

    .logo:hover .circle{
        animation: rotation 3s linear forwards;
    }

    .nav-link {
        position: relative;
        padding: 6px 10px;
        font-size: calc(1rem + 0.25vw);

        border-radius: 10px;
    }

    .dropdown-link:hover {
        background: var(--color-primary);
        color: white;
    }

    .active {
        background: var(--color-accent);
        color: #fff;
    }

    .nav-link::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 8px;
        width: 85%;
        height: 2px;
        background: var(--color-primary);
        transform: scaleX(0);
        transition: transform 0.3s ease;
        transform-origin: left;
    }

    .nav-link:hover:not(.active)::after {
        transform: scaleX(1);
    }

    .nav-link.active:hover {
        background: var(--color-primary);
    }

    .dropdown-menu {
        position: absolute;
        top: 3.9rem;
        left: -50%;
        width: 250px;
        background: #1f2937;
        border-radius: 10px;
        padding: 1rem 0;
        display: flex;
        flex-direction: column;
    }

    .sub-dropdown-menu {
        position: absolute;
        top: 0;
        left: 15.6rem;
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
        background: rgba(0, 0, 0, 0.05);
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
        position: fixed;
        top: 100%;
        right: 0;
        width: 60%;
        height: 100vh;
        padding: 1rem 0;
        z-index: 10;
        overflow: hidden;
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
    
    .mobile-link.active:hover {
        background: var(--color-accent);
        transform: translate(2rem);
    }

    .back-icon {
        transition: all 0.8s ease;
    }

    .back-btn:hover .back-icon {
        transform: translateX(-5px);
    }

    /* animations */
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

    @keyframes rotation {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

</style>