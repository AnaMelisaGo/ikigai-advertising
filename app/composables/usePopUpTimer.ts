// composables/usePopupTimer.ts

export function usePopupTimer(
  initialDelaySeconds = 5,
  repeatMinutes = 10,
  visibleSeconds = 6
) {
  const showPopup = useState('popup-visible', () => false)

  let timeoutId: ReturnType<typeof setTimeout> | null = null

  const show = () => {
    showPopup.value = true

    // auto-hide after 6s
    timeoutId = setTimeout(() => {
      showPopup.value = false
    }, visibleSeconds * 1000)
  }

  const start = () => {
    // first show after 5 seconds
    timeoutId = setTimeout(() => {
      show()

      // then repeat every 10 minutes
      setInterval(() => {
        show()
      }, repeatMinutes * 60 * 1000)
    }, initialDelaySeconds * 1000)
  }

  const close = () => {
    showPopup.value = false
  }

  const cleanup = () => {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }
  }

  return {
    showPopup,
    start,
    close,
    cleanup
  }
}