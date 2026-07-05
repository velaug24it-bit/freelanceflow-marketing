// components/sections/About.jsx
'use client'

import { useEffect, useRef } from 'react'
import { Target, Heart, Lightbulb, Globe } from 'lucide-react'

const values = [
  {
    icon: Target,
    title: 'Built for Freelancers',
    description: 'Every feature is purpose-built for independent professionals, not adapted from enterprise software.',
    gradient: 'from-indigo-500 to-blue-600',
  },
  {
    icon: Heart,
    title: 'Freelancer-First',
    description: 'We put freelancers at the center of every decision — your success is our success.',
    gradient: 'from-pink-500 to-rose-600',
  },
  {
    icon: Lightbulb,
    title: 'Constantly Innovating',
    description: 'We ship new features every week based on real feedback from our community.',
    gradient: 'from-amber-500 to-orange-600',
  },
  {
    icon: Globe,
    title: 'Built for the World',
    description: 'Support for multiple currencies and payment methods, designed for freelancers globally.',
    gradient: 'from-emerald-500 to-teal-600',
  },
]

const milestones = [
  { year: '2024', event: 'FreelanceFlow founded' },
  { year: 'Q1 2025', event: 'Beta launch with 100+ users' },
  { year: 'Q2 2025', event: 'Razorpay payment integration' },
  { year: 'Q3 2025', event: '1,000+ registered freelancers' },
  { year: '2026', event: '🚀 Official public launch' },
]

export default function About() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.05 }
    )
    const elements = sectionRef.current?.querySelectorAll('.section-fade')
    elements?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-24 bg-gray-50 relative overflow-hidden" ref={sectionRef}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-200 to-transparent" />
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-purple-100/50 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-64 h-64 rounded-full bg-indigo-100/50 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 section-fade">
          <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-5">
            🧡 Our Story
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-5 leading-tight">
            Built by freelancers,{' '}
            <span className="gradient-text">for freelancers</span>
          </h2>
          <p className="text-xl text-gray-500 font-medium leading-relaxed">
            FreelanceFlow was born out of a simple frustration: managing freelance work was chaos. 
            So we built the tool we always wished existed.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Mission & Story */}
          <div className="section-fade">
            <h3 className="text-3xl font-black text-gray-900 mb-6">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed text-lg mb-5">
              FreelanceFlow was built because freelancers spend too much time on admin work 
              and not enough on what they actually love doing — their craft.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mb-8">
              We created an all-in-one platform that handles everything from client onboarding 
              to final payment, so you can focus on delivering great work.
            </p>

            {/* Timeline */}
            <div className="space-y-4">
              <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wider mb-4">Our Journey</h4>
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-20 text-xs font-bold text-indigo-600 flex-shrink-0 text-right">
                    {milestone.year}
                  </div>
                  <div className="w-3 h-3 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex-shrink-0 shadow-md" />
                  <div className="flex-1 h-px bg-indigo-100" />
                  <div className="text-sm font-medium text-gray-700 flex-shrink-0 text-right">
                    {milestone.event}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-2 gap-5 section-fade" style={{ transitionDelay: '0.2s' }}>
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div
                  key={index}
                  className="feature-card glass-card-light p-6 border border-gray-100 hover:border-indigo-100"
                >
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-4 shadow-md`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2 text-sm">{value.title}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Stats highlight */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 section-fade" style={{ transitionDelay: '0.3s' }}>
          {[
            { value: '1,000+', label: 'Freelancers', color: 'text-indigo-600', bg: 'bg-indigo-50 border-indigo-100' },
            { value: '2,500+', label: 'Projects Completed', color: 'text-purple-600', bg: 'bg-purple-50 border-purple-100' },
            { value: '$5M+', label: 'Revenue Facilitated', color: 'text-emerald-600', bg: 'bg-emerald-50 border-emerald-100' },
            { value: '98%', label: 'Client Satisfaction', color: 'text-pink-600', bg: 'bg-pink-50 border-pink-100' },
          ].map((stat, i) => (
            <div key={i} className={`${stat.bg} border rounded-2xl p-6 text-center`}>
              <div className={`text-3xl font-black ${stat.color} mb-1`}>{stat.value}</div>
              <div className="text-sm font-medium text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}