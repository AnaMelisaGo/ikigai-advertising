<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { useWhatsAppMessage } from '~/composables/useWhatsAppMessage'

const config = useRuntimeConfig()
const phone = config.public.whatsappNumber
const { message } = useWhatsAppMessage()

const openWa = () => {
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message.value)}`
    window.open(url, '_blank')
}
</script>
<template>
    <section class="bg-white min-h-screen">
        <!-- Hero -->
        <ReusableHero
        hero-tag="Contáctanos"
        hero-title="Hablamos"
        hero-span="de tus ideas"
        hero-caption="Nos encantaría conocer tu proyecto. Ponte en contacto con nosotros a través de cualquiera de los canales que aparecen a continuación y te responderemos lo antes posible."
        background="linear-gradient(to top, #fff1eb 0%, #ace0f9 100%)"
        />
        <!-- Información del contacto -->
        <div class="max-w-7xl mx-auto px-6 pb-24 mt-20">
            <div
            class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start"
            >
            <!-- Info Card -->
            <div
                class="bg-white border border-gray-100 rounded-3xl p-10 shadow-sm"
            >
                <h2 class="text-2xl font-bold mb-8 title">
                Información del contacto
                </h2>

                <div class="space-y-8">
                <!-- Dirección -->
                <div>
                    <h3 class="text-sm uppercase tracking-widest text-gray-400 mb-2">
                    Dirección
                    </h3>
                    <p class="text-gray-700 leading-relaxed">
                    Calle del Bronce, 35<br />
                    Moraleja de Enmedio, 28950, Madrid
                    </p>
                </div>

                <!-- Phone -->
                <div>
                    <h3 class="text-sm uppercase tracking-widest text-gray-400 mb-2">
                    Teléfono
                    </h3>

                    <a
                    href="tel:+34600000000"
                    class="text-gray-700 hover:text-black transition-colors"
                    >
                    +34 600 000 000
                    </a>
                </div>

                <!-- Hours -->
                <div>
                    <h3 class="text-sm uppercase tracking-widest text-gray-400 mb-2">
                    Horario
                    </h3>

                    <div class="text-gray-700 space-y-1">
                    <p>Lunes – Viernes</p>
                    <p>09:00 – 18:00</p>
                    </div>
                </div>

                <!-- Socials -->
                <div>
                    <h3 class="text-sm uppercase tracking-widest text-gray-400 mb-4">
                    Conecta con nosotros
                    </h3>

                    <div class="flex gap-4">
                    <!-- Instagram -->
                    <NuxtLink to="https://www.instagram.com/" target="_blank" aria-label="Instagram"
                        class="contact-icon hover:border-black hover:-translate-y-1 transition-all duration-300">
                        <FontAwesomeIcon :icon="['fab', 'instagram']" />
                    </NuxtLink>
                    <!-- WhatsApp -->
                    <button class="contact-icon" @click="openWa">
                        <FontAwesomeIcon :icon="['fab','whatsapp']" />
                    </button>
                    </div>
                </div>
                </div>
            </div>

            <!-- Map -->
            <div
                class="overflow-hidden rounded-3xl border border-gray-100 shadow-sm h-125"
            >
                <iframe
                title="Google Maps"
                class="w-full h-full"
                loading="lazy"
                allowfullscreen
                referrerpolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d348.5497416658747!2d-3.8493091882995683!3d40.265129352289755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd418cc1e75c2b27%3A0x8286147a938a19ba!2sC.%20Bronce%2C%2035%2C%2028950%20Moraleja%20de%20Enmedio%2C%20Madrid!5e0!5m2!1sen!2ses!4v1780999587416!3m2!1sen!2ses"
                />
            </div>
            </div>
        </div>
    </section>
</template>
<style scoped>
.contact-icon {
    /* color: #fff; */
    font-size: 3rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.8s ease, color 0.8s ease;
    transform-origin: center;
}

.contact-icon:hover {
    color: var(--color-accent);
    transform: scale(1.3);
}

.title {
    color: var(--color-accent);
}
</style>