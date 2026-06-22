// components/layout/Header.jsx
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
      
      // Detect which section is in view
      const sections = ['features', 'pricing', 'about', 'blog']
      let current = ''
      sections.forEach((id) => {
        const element = document.getElementById(id)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100) {
            current = id
          }
        }
      })
      setActiveSection(current)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-sm">FF</span>
            </div>
            <span className="text-xl font-bold text-gray-900">FreelanceFlow</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-gray-600 hover:text-blue-600 transition font-medium ${
                  activeSection === item.href.replace('#', '') ? 'text-blue-600' : ''
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={`${APP_URL}/login`}
              className="text-gray-600 hover:text-blue-600 transition font-medium"
            >
              Log In
            </a>
            <a
              href={`${APP_URL}/register`}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2.5 rounded-lg font-medium hover:shadow-lg transition"
            >
              Get Started Free
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 shadow-lg">
          <nav className="container mx-auto px-4 flex flex-col gap-3">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-gray-600 hover:text-blue-600 transition py-2 px-3 rounded-lg hover:bg-gray-50 ${
                  activeSection === item.href.replace('#', '') ? 'text-blue-600 bg-blue-50' : ''
                }`}
              >
                {item.name}
              </a>
            ))}
            <div className="flex flex-col gap-3 pt-4 border-t border-gray-100">
              <a
                href={`${APP_URL}/login`}
                className="text-gray-600 hover:text-blue-600 transition text-center py-2"
                onClick={() => setIsOpen(false)}
              >
                Log In
              </a>
              <a
                href={`${APP_URL}/register`}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2.5 rounded-lg text-center font-medium hover:shadow-lg transition"
                onClick={() => setIsOpen(false)}
              >
                Get Started Free
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}