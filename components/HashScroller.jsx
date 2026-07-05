// components/HashScroller.jsx
// Handles scrolling to a hash section when navigating from another page (e.g. /blog -> /#features)
'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function HashScroller() {
  const pathname = usePathname()

  useEffect(() => {
    // Read the hash from the URL (e.g. #features)
    const hash = window.location.hash
    if (!hash) return

    const sectionId = hash.replace('#', '')

    // Wait a tick for the page to fully render, then scroll
    const attempt = (retries = 5) => {
      const element = document.getElementById(sectionId)
      if (element) {
        // Extra offset for the fixed header
        const headerOffset = 80
        const top = element.getBoundingClientRect().top + window.scrollY - headerOffset
        window.scrollTo({ top, behavior: 'smooth' })
      } else if (retries > 0) {
        // Section not yet in DOM — retry after a short delay
        setTimeout(() => attempt(retries - 1), 150)
      }
    }

    // Small delay to let Next.js finish hydration
    setTimeout(() => attempt(), 200)
  }, [pathname])

  return null
}
