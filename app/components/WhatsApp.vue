<script setup>
import {  onMounted, onUnmounted } from 'vue'
import { useWhatsAppMessage } from '~/composables/useWhatsAppMessage'

const config = useRuntimeConfig()
const phone = config.public.whatsappNumber
const { showPopup, start, close, cleanup } = usePopupTimer(
  5,  // first show after 5s
  10, // repeat every 10min
  6   // visible for 6s
)

const { message } = useWhatsAppMessage()

const openWhatsApp = () => {
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message.value)}`
    window.open(url, '_blank')
    }

onMounted(() => {
  start()
})

onUnmounted(() => {
  cleanup()
})

</script>
<template>
    <div class="whatsapp-wrapper">
    <!-- popup message -->
        <transition name="fade">
            <div v-if="showPopup" @close="close" class="popup">
                ¿Necesita ayuda? Chatea con nosotros👋
            </div>
        </transition>

    <!-- floating button -->
        <button class="whatsapp-btn" @click="openWhatsApp">
            <img src="/images/whatsapp.svg" alt="WhatsApp" />
        </button>
    </div>
</template>

<style scoped>
.whatsapp-wrapper {
    position: fixed;
    bottom: 65px;
    right: 20px;
    z-index: 9999;
}

.whatsapp-btn {
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background: #fff;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 5px 5px 12px rgba(0, 0, 0, 0.5);

  animation: bounce 2.5s infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
}

.popup {
    position: absolute;
    bottom: 65px;
    right: 0;
    background: rgba(255, 255, 255, 0.9);
    padding: 10px 12px;
    border-radius: 10px;
    font-size: 14px;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
    z-index: 10000;
    width: 13.5rem;
    text-align: end;
}

.fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
    opacity: 0;
}
</style>