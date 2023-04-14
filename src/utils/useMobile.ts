import { useState, useEffect } from 'react'

export const useMobile = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [screenWidth, setScreenWidth] = useState(1366)
  const [screenHeight, setScreenHeight] = useState(768)
  const [browser, setBrowser] = useState('')

  useEffect(() => {
    if (typeof navigator !== 'undefined') {
      setBrowser(navigator.userAgent)
    }

    if (typeof window !== 'undefined') {
      setIsMobile(window.innerWidth <= 768)
      setScreenWidth(window.screen.width)
      setScreenHeight(window.screen.height)
    }

    window.addEventListener('resize', () => {
      setIsMobile(window.innerWidth < 768)
      setScreenWidth(window.screen.width)
      setScreenHeight(window.screen.height)
    })
  }, [])

  return { isMobile, screenWidth, screenHeight, browser }
}
