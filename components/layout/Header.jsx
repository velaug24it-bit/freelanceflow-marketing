// components/layout/Header.jsx
 'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import Button from '../ui/Button'

const navigation = [
  { name: 'Features', href: '#features' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'About', href: '#about' },
  { name: 'Blog', href: '#blog' },
]

const APP_URL = 'https://freelanceflow-frontend-uh18.onrender.com'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const firstNavRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12)

      const sections = ['features', 'pricing', 'about', 'blog']
      let current = ''
      sections.forEach((id) => {
        const element = document.getElementById(id)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 120 && rect.bottom > 120) {
            current = id
          }
        }
      })
      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // lock body scroll when mobile menu is open
    document.body.style.overflow = isOpen ? 'hidden' : ''

    const handleKey = (e) => {
      if (e.key === 'Escape' && isOpen) setIsOpen(false)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [isOpen])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else if (href === '/') {
      window.location.href = '/'
    }
    setIsOpen(false)
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-3" aria-label="FreelanceFlow home">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(90deg,#2563EB,#7C3AED)' }}>
                <span className="text-white font-bold">FF</span>
              </div>
              <span className="hidden md:inline text-lg font-semibold text-gray-900">FreelanceFlow</span>
            </Link>
          </div>

          {/* Navigation - Desktop */}
          <nav aria-label="Primary" className="hidden md:flex items-center gap-8">
            {navigation.map((item, idx) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                ref={idx === 0 ? firstNavRef : null}
                className={`text-gray-600 hover:text-sky-600 transition font-medium ${
                  activeSection === item.href.replace('#', '') ? 'text-sky-600' : ''
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <a href={`${APP_URL}/login`} className="text-gray-600 hover:text-sky-600 transition font-medium">Log In</a>
            <Button href={`${APP_URL}/register`} external className="px-6 py-2.5 font-medium">Get Started Free</Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
            onClick={() => setIsOpen((s) => !s)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile overlay menu */}
      <div
        className={`md:hidden fixed inset-0 z-40 transform ${isOpen ? 'translate-y-0' : '-translate-y-full'} transition-transform duration-300`}
        aria-hidden={!isOpen}
      >
        <div className="absolute inset-0 bg-white/95 backdrop-blur-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(90deg,#2563EB,#7C3AED)' }}>
                <span className="text-white font-bold">FF</span>
              </div>
              <span className="text-lg font-semibold text-gray-900">FreelanceFlow</span>
            </Link>
            <button onClick={() => setIsOpen(false)} aria-label="Close menu" className="p-2 rounded-md">
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex flex-col gap-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-gray-800 text-lg font-medium p-3 rounded-lg hover:bg-gray-50"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="mt-6 border-t border-gray-200 pt-6 flex flex-col gap-3">
            <a href={`${APP_URL}/login`} className="text-gray-700 text-center py-3">Log In</a>
            <Button href={`${APP_URL}/register`} external className="w-full text-center px-4 py-3">Get Started Free</Button>
          </div>
        </div>
      </div>
    </header>
  )
}