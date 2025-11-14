import { useEffect } from 'react'

export function useDynamicFavicon(activeIcon: string, inactiveIcon: string) {
  useEffect(() => {
    const favicon = document.querySelector<HTMLLinkElement>("link[rel='icon']")

    const handleChange = () => {
      if (!favicon) {
        return
      }
      favicon.href = !document.hidden ? inactiveIcon : activeIcon
    }

    document.addEventListener('visibilitychange', handleChange)

    handleChange()

    return () => {
      document.removeEventListener('visibilitychange', handleChange)
    }
  }, [activeIcon, inactiveIcon])
}
