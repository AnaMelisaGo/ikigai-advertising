<template>
    <footer class="footer">
        <div class="footer-top">
            <div class="footer-logo-container">
                <img src="/logo.png" alt="Ikigai Advertising Logo" class="w-16 h-16" />
                <img src="/logo-name-light.png" alt="Ikigai Advertising Name" class="w-32" />
            </div>
            <!-- <div class="footer-left">
            </div> -->
            <div class="footer-right">
                <div class="r-top">
                    <div class="text-center md:text-left">
                        <h3 class="font-bold mb-2">Quick Links</h3>
                        <ul>
                            <li><a href="/about">About Us</a></li>
                            <li><a href="#">Servicios</a></li>
                            <li><a href="#">RSC</a></li>
                            <li><a href="#">Portfolio</a></li>
                        </ul>
                    </div>
                    <div class="text-center md:text-left">
                        <h3 class="font-bold mb-2">Servicios</h3>
                        <ul>
                            <li><a href="#">Graphics</a></li>
                            <li><a href="#">Events</a></li>
                            <li><a href="#">Design</a></li>
                        </ul>
                    </div>
                    <div class="text-center md:text-left">
                        <h3 class="font-bold mb-2">Contacto</h3>
                        <p>123 Main Street</p>
                        <p>City, State 12345</p>
                        <p>Phone: (123) 456-7890</p>
                    </div>
                    <div class="flex flex-col items-center">
                        <p>Síguenos</p>
                        <NuxtLink to="https://www.instagram.com/" target="_blank" class="social-icon">
                            <FontAwesomeIcon :icon="['fab', 'instagram']" />
                        </NuxtLink>
                        
                        <div class="social-icons">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="footer-bottom">
            <p>
                &copy; {{ new Date().getFullYear() }} Ikigai Advertising. All rights reserved.
            </p>
            <ul class="politica">
                <li><a href="#">Avisos Legales</a></li>
                <li><a href="#">Política de Privacidad</a></li>
                <li><a href="#">Política de Cookies</a></li>
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

.footer-right {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
    align-items: center;
}

.r-top {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
    align-items: center;
}

/* .contacto {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
} */

.social-icon {
    color: #fff;
    font-size: 2rem;
    transition: scale 0.8s ease;
}

.social-icon:hover {
    color: var(--color-accent);
    scale: 1.3;
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

@media (min-width: 768px) {
    .footer {
        align-items: unset;
    }
    .footer-top {
        /* flex-direction: row;
        justify-content: space-around;
        align-items: flex-start; */
        gap: 4rem;
    }

    /* .footer-logo-container {
        margin-right: auto;
    } */

    .r-top {
        display: flex;
        flex-direction: row;
        gap: calc(4rem + 2vw);
        /* justify-content: space-around; */
        align-items: flex-start;
        /* padding: 0 2rem; */
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
    }

    .politica {
        display: flex;
        gap: 1rem;
        justify-content: center;
        align-items: center;
        margin-left: auto;
    
}
</style>