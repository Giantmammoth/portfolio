import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import Lenis from '@studio-freight/lenis'
import App from './App.tsx'
import { LanguageProvider } from './contexts/LanguageContext.tsx'
import './i18n/config'
import './index.css'

function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.5, // Multiplicateur pour la vitesse de scroll
      touchMultiplier: 1.5,
      infinite: false,
    })

    // Synchroniser avec requestAnimationFrame pour de meilleures performances
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Ajouter la classe lenis au body
    document.body.classList.add('lenis')

    return () => {
      lenis.destroy()
      document.body.classList.remove('lenis')
    }
  }, [])

  return null
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <SmoothScroll />
      <App />
    </LanguageProvider>
  </StrictMode>,
)

