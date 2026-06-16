import { onMounted, onUnmounted, nextTick } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const useReveal = () => {
  let ctx: gsap.Context | null = null

  onMounted(async () => {
    await nextTick()
    await new Promise(requestAnimationFrame)

    ctx = gsap.context(() => {
      const elements = gsap.utils.toArray<HTMLElement>('.reveal')

      elements.forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 40,
          duration: 1,
          ease: 'power3.out',
          clearProps: 'transform',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        })
      })
    })

    // IMPORTANT: only local refresh
    ScrollTrigger.refresh()
  })

  onUnmounted(() => {
    ctx?.revert()
  })
}