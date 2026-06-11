<template>
    <footer class="footer">
        <div class="footer-top md:mb-10">
            <div class="footer-logo-container">
                <img src="/images/logo.png" alt="Ikigai Advertising Logo" class="w-16 h-16" />
                <img src="/images/logo-name-light.png" alt="Ikigai Advertising Name" class="w-32" />
            </div>
            <div class="footer-links">
                <div class="links-top">
                    <div class="text-center md:text-left">
                        <h3 class="font-bold mb-2">Quick Links</h3>
                        <ul>
                            <li><a href="/">Inicio</a></li>
                            <li><NuxtLink to="/responsabilidad-social">RSC</NuxtLink></li>
                            <li><NuxtLink to="/portfolio">Portfolio</NuxtLink></li>
                        </ul>
                        
                        
                    </div>
                    <div class="text-center md:text-left">
                        <h3 class="font-bold mb-2">Servicios</h3>
                        <ul>
                            <li><NuxtLink to="/servicios/graphics">Graphics</NuxtLink></li>
                            <li><NuxtLink to="/servicios/events">Events</NuxtLink></li>
                            <li><NuxtLink to="/servicios/digital">Digital</NuxtLink></li>
                        </ul>
                    </div>
                    <div class="text-center md:text-left">
                        <h3 class="font-bold mb-2">Own Brands</h3>
                        <ul>
                            <li><NuxtLink to="/servicios/own-brands/vibe-music-wear">Vibe Music Wear</NuxtLink></li>
                            <li><NuxtLink to="/servicios/own-brands/tiento-fest">Tiento Fest</NuxtLink></li>
                        </ul>
                    </div>
                    <div class="contacto text-center md:text-left">
                        <h3 class="font-bold mb-2">Empresa</h3>
                        <ul>
                            <li><NuxtLink to="/about">Quienes Somos</NuxtLink></li>
                            <li><NuxtLink to="/contacto">Contacto</NuxtLink></li>
                        </ul>
                    </div>
                    <div class="flex flex-col items-center">
                        <p>Síguenos</p>
                        <NuxtLink to="https://www.instagram.com/" target="_blank" class="social-icon">
                            <FontAwesomeIcon :icon="['fab', 'instagram']" />
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>

        <div class="footer-bottom">
            <p>
                &copy; {{ new Date().getFullYear() }} Ikigai Advertising. All rights reserved.
            </p>
            <ul class="politica">
                <li><NuxtLink to="/legal">Avisos Legales</NuxtLink></li>
                <li><NuxtLink to="/politica-privacidad">Política de Privacidad</NuxtLink></li>
                <li><NuxtLink to="/politica-cookies">Política de Cookies</NuxtLink></li>
            </ul>
        </div>
    </footer>
</template>

<style scoped>
.footer {
    background-color: var(--color-secondary);
    color: #fff;
    padding: 2rem 2rem 0.5rem;
    margin-top: auto;

    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
    align-items: center;
}

.footer-top {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: center;
}
.footer-logo-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
}

.footer-links {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
    align-items: center;
}

.links-top {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
    align-items: center;
}

.social-icon {
    color: #fff;
    font-size: 2rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.8s ease, color 0.8s ease;
    transform-origin: center;
}

.social-icon:hover {
    color: var(--color-accent);
    transform: scale(1.3);
}

.footer-bottom {
    text-align: center;
    font-size: 0.8rem;
    font-weight: 100;
    color: gray;
    border-top: solid 1px gray;
    padding: 1rem;
    width: 100%;
}

.footer-links .links-top a {
    color: rgb(213, 213, 213);
    display: inline-block;
    transition: transform 0.5s ease, color 0.5s ease;
    transform-origin: center;
}

.contacto p {
    color: rgb(213, 213, 213);
}

.footer-links .links-top a:hover {
    color: var(--color-accent);
    transform: scale(1.2);
}

.politica li a:hover {
    color: var(--color-primary);
}

@media (min-width: 768px) {
    .footer {
        align-items: unset;
    }
    .footer-top {
        gap: 2rem;
    }

    .links-top {
        display: flex;
        flex-direction: row;
        gap: calc(4rem + 2vw);
        align-items: flex-start;
        margin: auto;
    }

    .contacto {
        align-items: flex-start;
    }

    .footer-bottom {
        display: flex;
        justify-content: space-around;
        gap: 1rem;
    }
    .politica {
        display: flex;
        gap: 1rem;
        justify-content: center;
        align-items: center;
        margin-left: auto;
    }
}
</style>