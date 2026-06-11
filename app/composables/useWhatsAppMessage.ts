export const useWhatsAppMessage = () => {
  const route = useRoute()

  const messages: Record<string, string> = {
    "/": "¡Hola! Vi su página web y me gustaría obtener más información.",
    "/servicios/graphics": "¡Hola! Estoy interesado/a en sus servicios. ¿Pueden ayudarme?",
    "/servicios/events": "¡Hola! Estoy interesado/a en sus servicios. ¿Pueden ayudarme?",
    "/servicios/digital": "¡Hola! Estoy interesado/a en sus servicios. ¿Pueden ayudarme?",
    "/portfolio": "¡Hola! Me gustaría hablar sobre un proyecto que vi en su portafolio.",
    "/contacto": "¡Hola! Necesito información sobre precios y disponibilidad."
  }

  const defaultMessage = "Hello! I need information..."

  const message = computed(() => {
    return messages[route.path] || defaultMessage
  })

  return { message }
}