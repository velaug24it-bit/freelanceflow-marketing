// components/sections/Hero.jsx
'use client'

import { ArrowRight, Rocket, Play, Star, CheckCircle, TrendingUp, DollarSign, Users } from 'lucide-react'
import { useEffect, useRef } from 'react'

const APP_URL = 'https://freelanceflow-frontend-uh18.onrender.com'

const floatingCards = [
  { icon: '💰', label: '+$12,400 this month', color: 'from-green-400 to-emerald-500', delay: '0s' },
  { icon: '✅', label: '98% client satisfaction', color: 'from-blue-400 to-indigo-500', delay: '1s' },
  { icon: '⚡', label: 'Invoice sent in 10s', color: 'from-purple-400 to-pink-500', delay: '0.5s' },
]

export default function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )
    const elements = heroRef.current?.querySelectorAll('.section-fade')
    elements?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden hero-bg"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -right-32 w-96 h-96 rounded-full bg-gradient-to-br from-indigo-400/20 to-purple-400/10 blur-3xl animate-float-slow" />
        <div className="absolute -bottom-20 -left-32 w-80 h-80 rounded-full bg-gradient-to-tr from-pink-400/15 to-indigo-400/10 blur-3xl animate-float" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-indigo-100/30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-purple-100/20" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="section-fade" style={{ transitionDelay: '0.1s' }}>
            {/* Live Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200/60 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold mb-8 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              🎉 Now Live — FreelanceFlow is officially launched!
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-[1.05] tracking-tight">
              Freelance smarter.{' '}
              <br />
              <span className="gradient-text">
                Earn more.
              </span>
            </h1>

            <p className="text-xl text-gray-500 mb-10 max-w-xl leading-relaxed font-medium">
              The all-in-one platform to manage clients, track projects, send invoices, 
              and get paid — built for modern freelancers ready to grow.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-launch text-base px-8 py-4 justify-center sm:justify-start"
                id="hero-cta-primary"
              >
                <Rocket className="w-5 h-5" />
                Open App — It's Free
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#features"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="inline-flex items-center justify-center gap-2 bg-white border-2 border-gray-200 text-gray-700 font-bold px-8 py-4 rounded-2xl hover:border-indigo-300 hover:text-indigo-600 transition-all duration-300 shadow-sm hover:shadow-md"
                id="hero-cta-secondary"
              >
                <Play className="w-4 h-4" />
                See How It Works
              </a>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-10">
              {[
                'No credit card required',
                'Free forever plan',
                '14-day Pro trial',
              ].map((text) => (
                <div key={text} className="flex items-center gap-2 font-medium">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  {text}
                </div>
              ))}
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2.5">
                {['A', 'B', 'C', 'D', 'E'].map((letter, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-white font-bold text-xs shadow-md"
                    style={{
                      background: [
                        'linear-gradient(135deg,#6366f1,#8b5cf6)',
                        'linear-gradient(135deg,#8b5cf6,#ec4899)',
                        'linear-gradient(135deg,#ec4899,#f59e0b)',
                        'linear-gradient(135deg,#06b6d4,#6366f1)',
                        'linear-gradient(135deg,#10b981,#06b6d4)',
                      ][i],
                    }}
                  >
                    {letter}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-gray-500 mt-0.5 font-medium">
                  Loved by <strong className="text-gray-700">1,000+</strong> freelancers
                </p>
              </div>
            </div>
          </div>

          {/* Right - Interactive App Mockup */}
          <div className="relative hidden lg:block section-fade" style={{ transitionDelay: '0.3s' }}>
            {/* Main Dashboard Card */}
            <div className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-1 shadow-2xl shadow-indigo-500/30 animate-float">
              <div className="bg-gray-950 rounded-[22px] p-6 overflow-hidden">
                {/* Top bar */}
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <div className="flex-1 ml-2 bg-gray-800/60 rounded-lg h-7 flex items-center px-3">
                    <span className="text-gray-400 text-xs font-mono">freelanceflow-frontend-uh18.onrender.com</span>
                  </div>
                </div>

                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <p className="text-gray-400 text-xs font-medium uppercase tracking-wider">Dashboard</p>
                    <h3 className="text-white font-bold text-lg">Good morning, Alex 👋</h3>
                  </div>
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                    <span className="text-white font-black text-xs">FF</span>
                  </div>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-3 mb-5">
                  {[
                    { label: 'Revenue', value: '$12,400', icon: DollarSign, color: 'from-emerald-500/20 to-green-500/20', text: 'text-emerald-400' },
                    { label: 'Projects', value: '8 Active', icon: TrendingUp, color: 'from-blue-500/20 to-indigo-500/20', text: 'text-blue-400' },
                    { label: 'Clients', value: '14 Total', icon: Users, color: 'from-purple-500/20 to-pink-500/20', text: 'text-purple-400' },
                  ].map((stat) => {
                    const Icon = stat.icon
                    return (
                      <div key={stat.label} className={`bg-gradient-to-br ${stat.color} rounded-xl p-3 border border-white/5`}>
                        <Icon className={`w-4 h-4 ${stat.text} mb-2`} />
                        <p className="text-white font-bold text-sm">{stat.value}</p>
                        <p className="text-gray-400 text-xs">{stat.label}</p>
                      </div>
                    )
                  })}
                </div>

                {/* Recent Projects */}
                <div className="space-y-2.5">
                  <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider">Recent Projects</p>
                  {[
                    { name: 'E-commerce Website', client: 'TechCorp', status: 'In Progress', color: 'bg-blue-500/20 text-blue-300' },
                    { name: 'Mobile App Design', client: 'StartupX', status: 'Review', color: 'bg-amber-500/20 text-amber-300' },
                    { name: 'Brand Identity', client: 'CreativeHQ', status: 'Done', color: 'bg-green-500/20 text-green-300' },
                  ].map((project) => (
                    <div key={project.name} className="flex items-center justify-between bg-white/5 rounded-xl px-4 py-3 hover:bg-white/8 transition-colors">
                      <div>
                        <p className="text-white font-semibold text-sm">{project.name}</p>
                        <p className="text-gray-400 text-xs">{project.client}</p>
                      </div>
                      <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${project.color}`}>
                        {project.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Cards */}
            {floatingCards.map((card, i) => (
              <div
                key={i}
                className="absolute bg-white rounded-2xl shadow-2xl shadow-indigo-200/50 px-4 py-3 flex items-center gap-3"
                style={{
                  ...(i === 0 ? { top: '-20px', right: '-24px' } : i === 1 ? { bottom: '-20px', left: '-24px' } : { bottom: '30%', right: '-28px' }),
                  animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
                  animationDelay: card.delay,
                  zIndex: 10,
                }}
              >
                <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center text-lg`}>
                  {card.icon}
                </div>
                <p className="text-gray-800 font-bold text-sm whitespace-nowrap">{card.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}