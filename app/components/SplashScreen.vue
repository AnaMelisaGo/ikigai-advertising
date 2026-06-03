<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

const emit = defineEmits(['finished'])
const splash = ref(null)
const logoWrap = ref(null)
const logoName = ref(null)

// Circle references
const circle1 = ref(null)
const circle2 = ref(null)
const circle3 = ref(null)
const circle4 = ref(null)

onMounted(() => {
    buildAnimation()

    function buildAnimation() {
        let finished = false
        const finish = () => {
          if (finished) return
          finished = true
          emit('finished')
        }

        const timeline = gsap.timeline()

        // Set initial state of circles and logo text
        gsap.set(circle1.value, {
            x: -window.innerWidth,
            y: -window.innerHeight,
        })
        gsap.set(circle2.value, {
            x: window.innerWidth,
            y: -window.innerHeight,
        })
        gsap.set(circle3.value, {
            x: -window.innerWidth,
            y: window.innerHeight,
        })
        gsap.set(circle4.value, {
            x: window.innerWidth,
            y: window.innerHeight,
        })
        gsap.set(logoName.value, {
            opacity: 0,
            y: 20,
        })

        // main timeline
        timeline.to([circle1.value, circle2.value, circle3.value, circle4.value], {
            x: 0,
            y: 0,
            duration: 1.5,
            ease: 'power4.out',
            stagger: 0.05
        })

        // spin
        .to(logoWrap.value, {
            rotation: 360,
            duration: 2,
            ease: 'none',
            repeat: -1
        }, '<')

        // name fade in
        .to(logoName.value, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power2.inOut'
        }, '-=1.4') // start slightly after circles start moving

        // hold for a moment
        .to({}, { duration: 0.8 })

        // name fade out
        .to(logoName.value, {
            opacity: 0,
            // y: -20,
            duration: 0.8,
            ease: 'power2.inOut'
        })

        // circles stop spinning and fade out
        .to(logoWrap.value, {
            rotation: 0,
            duration: 0.5,
            ease: 'power2.in'
        }, '<')
        .to(circle1.value, {
            x: -window.innerWidth,
            y: -window.innerHeight,
            duration: 1.5,
            ease: 'power4.in',
        }, '<')
         .to(circle2.value, {
            x: window.innerWidth,
            y: -window.innerHeight,
            duration: 1.5,
            ease: 'power4.in',
        }, '<')
         .to(circle3.value, {
            x: -window.innerWidth,
            y: window.innerHeight,
            duration: 1.5,
            ease: 'power4.in',
        }, '<')
         .to(circle4.value, {
            x: window.innerWidth,
            y: window.innerHeight,
            duration: 1.5,
            ease: 'power4.in',
         }, '<')

         // fade out entire splash screen
         .to(splash.value, {
             opacity: 0,
             duration: 0.4,
             ease: 'power2.inOut',
             onComplete: () => {
               if (splash.value) {
                 splash.value.style.pointerEvents = 'none'
               }
               finish()
             }
        },
        '-=0.4') // start fading out slightly before circles finish moving

        // safety fallback in case GSAP event doesn't fire
        setTimeout(() => {
          finish()
        }, 5000)

    }
})

</script>

<template>
    <div ref="splash" class="splash-screen">
        <!-- Ikigai logo -->
        <div ref="logoWrap" class="logo-wrapper">
            <div ref="circle1" class="circle bg-green-500/60 top-1.5 left-6 z-2"></div>
            <div ref="circle2" class="circle bg-pink-500/60 top-6 right-1.5 z-1"></div>
            <div ref="circle3" class="circle bg-yellow-500/60 top-6 left-1.5"></div>
            <div ref="circle4" class="circle bg-orange-500/60 bottom-1.5 left-6 z-3"></div>
        </div>
        <h1 ref="logoName" class="font-bold mt-6 text-2xl">
            Welcome to Ikigai Advertising
        </h1>
    </div>
</template>
<style scoped>
.splash-screen {
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: var(--light-gray);
    color: var(--gris-carbon);
    text-align: center;
    z-index: 9999;
    inset: 0;
    overflow: hidden;
}

.logo-wrapper {
    position: relative;
    width: 100px;
    height: 100px;

}

.circle {
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    animation: pulse 2s infinite ease-in-out;
}

</style>