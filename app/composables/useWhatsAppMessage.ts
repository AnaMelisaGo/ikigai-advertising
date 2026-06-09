export const useWhatsAppMessage = () => {
  const route = useRoute()

  const messages: Record<string, string> = {
    "/": "¡Hola! Vi su página web y me gustaría obtener más información.",
    "/services": "¡Hola! Estoy interesado/a en sus servicios. ¿Pueden ayudarme?",
    "/portfolio": "¡Hola! Me gustaría hablar sobre un proyecto que vi en su portafolio.",
    "/contact": "¡Hola! Necesito información sobre precios y disponibilidad."
  }

  const defaultMessage = "Hello! I need information..."

  const message = computed(() => {
    return messages[route.path] || defaultMessage
  })

  return { message }
}