// components/layout/Header.jsx
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Menu, X, Rocket, ExternalLink, Sparkles, Download } from 'lucide-react'

const navigation = [
  { name: 'Features', href: '#features' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'About', href: '#about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '#contact' },
]

const APP_URL = 'https://freelancewebsite.vrinnovation.online'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [bannerVisible, setBannerVisible] = useState(true)
  const pathname = usePathname()
  const router = useRouter()

  const [deferredPrompt, setDeferredPrompt] = useState(null)
  const [isInstallable, setIsInstallable] = useState(false)

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault()
      setDeferredPrompt(e)
      setIsInstallable(true)
    }

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)

    if (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone) {
      setIsInstallable(false)
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
    }
  }, [])

  const handleInstallClick = async (e) => {
    e.preventDefault()
    if (deferredPrompt) {
      deferredPrompt.prompt()
      const { outcome } = await deferredPrompt.userChoice
      console.log(`User response to the install prompt: ${outcome}`)
      setDeferredPrompt(null)
      setIsInstallable(false)
    } else {
      alert(
        "To install FreelanceFlow on your device:\n\n" +
        "• On iOS/Safari: Tap the share button in your browser and select 'Add to Home Screen'.\n" +
        "• On desktop Chrome/Edge: Click the install icon in the address bar."
      )
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
      const sections = ['features', 'pricing', 'about', 'blog', 'contact']
      let current = ''
      sections.forEach((id) => {
        const element = document.getElementById(id)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100) current = id
        }
      })
      setActiveSection(current)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      setIsOpen(false)
      const sectionId = href.replace('#', '')

      if (pathname === '/') {
        // Already on home — just smooth scroll
        const element = document.getElementById(sectionId)
        if (element) element.scrollIntoView({ behavior: 'smooth' })
      } else {
        // On another page (e.g. /blog) — navigate home then scroll
        router.push(`/#${sectionId}`)
      }
    } else {
      setIsOpen(false)
    }
  }

  return (
    <>
      {/* Launch Announcement Banner */}
      {bannerVisible && (
        <div className="launch-banner relative z-50 py-2 px-4">
          <div className="container mx-auto flex items-center justify-center gap-3 text-white text-sm font-medium">
            <Sparkles className="w-4 h-4 animate-pulse" />
            <span>
              🚀 <strong>FreelanceFlow is now live!</strong> — Start managing your freelance business today.
            </span>
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:no-underline font-bold flex items-center gap-1"
            >
              Open App <ExternalLink className="w-3 h-3" />
            </a>
            <button
              onClick={() => setBannerVisible(false)}
              className="ml-4 opacity-70 hover:opacity-100 transition"
              aria-label="Dismiss banner"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Main Header */}
      <header
        className={`fixed w-full z-40 transition-all duration-500 ${
          bannerVisible ? 'top-9' : 'top-0'
        } ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-xl shadow-indigo-500/5 border-b border-indigo-100/50'
            : 'bg-white/80 backdrop-blur-md'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-indigo-500/30 group-hover:shadow-indigo-500/50 transition-all duration-300 group-hover:scale-105">
                <span className="text-white font-black text-sm tracking-tight">FF</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                FreelanceFlow
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navigation.map((item) => {
                const isActive = activeSection === item.href.replace('#', '')
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`text-sm font-semibold transition-all duration-200 relative group ${
                      isActive ? 'text-indigo-600' : 'text-gray-600 hover:text-indigo-600'
                    }`}
                  >
                    {item.name}
                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`} />
                  </a>
                )
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={handleInstallClick}
                className="text-sm font-semibold text-gray-600 hover:text-indigo-600 transition-colors px-3 py-2 flex items-center gap-1.5 cursor-pointer bg-transparent border-none"
              >
                <Download className="w-4.5 h-4.5" />
                Download App
              </button>
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-launch text-sm py-2.5 px-6"
              >
                <Rocket className="w-4 h-4" />
                Try it Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-xl hover:bg-indigo-50 transition text-gray-600"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 py-4 shadow-2xl">
            <nav className="container mx-auto px-4 flex flex-col gap-1">
              {navigation.map((item) => {
                const isActive = activeSection === item.href.replace('#', '')
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`py-3 px-4 rounded-xl font-semibold transition-all ${
                      isActive
                        ? 'text-indigo-600 bg-indigo-50'
                        : 'text-gray-700 hover:text-indigo-600 hover:bg-indigo-50/50'
                    }`}
                  >
                    {item.name}
                  </a>
                )
              })}

              <div className="flex flex-col gap-3 pt-4 mt-2 border-t border-gray-100">
                <button
                  onClick={(e) => {
                    setIsOpen(false)
                    handleInstallClick(e)
                  }}
                  className="text-gray-600 text-center py-3 font-semibold hover:text-indigo-600 transition flex items-center justify-center gap-1.5 bg-transparent border-none cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  Download App
                </button>
                <a
                  href={APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-launch text-sm justify-center py-3"
                  onClick={() => setIsOpen(false)}
                >
                  <Rocket className="w-4 h-4" />
                  Try it Now — It's Free
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Spacer for fixed header + banner */}
      <div className={bannerVisible ? 'h-[100px]' : 'h-16'} />
    </>
  )
}