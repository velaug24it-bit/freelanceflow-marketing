// components/sections/Stats.jsx
'use client'

import { useEffect, useState, useRef } from 'react'
import { Users, Briefcase, DollarSign, Award, TrendingUp } from 'lucide-react'

const stats = [
  {
    label: 'Freelancers',
    value: 1000,
    suffix: '+',
    icon: Users,
    gradient: 'from-indigo-500 to-blue-600',
    bgGlow: 'from-indigo-500/20 to-blue-500/10',
    description: 'Registered users growing daily',
  },
  {
    label: 'Projects Completed',
    value: 2500,
    suffix: '+',
    icon: Briefcase,
    gradient: 'from-emerald-500 to-green-600',
    bgGlow: 'from-emerald-500/20 to-green-500/10',
    description: 'Successfully delivered on time',
  },
  {
    label: 'Revenue Generated',
    value: 5,
    suffix: 'M+',
    prefix: '$',
    icon: DollarSign,
    gradient: 'from-purple-500 to-violet-600',
    bgGlow: 'from-purple-500/20 to-violet-500/10',
    description: 'Earned by our freelancers',
  },
  {
    label: 'Happy Clients',
    value: 500,
    suffix: '+',
    icon: Award,
    gradient: 'from-pink-500 to-rose-600',
    bgGlow: 'from-pink-500/20 to-rose-500/10',
    description: 'With 98% satisfaction rate',
  },
]

const StatCounter = ({ target, prefix = '', suffix = '', isVisible }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) return
    const duration = 1800
    const steps = 60
    const increment = target / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [target, isVisible])

  return (
    <span>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  )
}

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.3 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0f0c29, #302b63, #24243e)',
      }}
    >
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 text-white/80 px-4 py-1.5 rounded-full text-sm font-semibold mb-5">
            <TrendingUp className="w-4 h-4" />
            Real Numbers. Real Impact.
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
            Freelancers are{' '}
            <span className="gradient-text">thriving</span>
          </h2>
          <p className="text-xl text-white/60 font-medium">
            Join a growing community of successful independent professionals
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="glass-card p-8 text-center group hover:bg-white/10 transition-all duration-300"
              >
                <div className={`w-14 h-14 mx-auto mb-5 rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-black text-white mb-2">
                  <StatCounter
                    target={stat.value}
                    prefix={stat.prefix || ''}
                    suffix={stat.suffix || ''}
                    isVisible={isVisible}
                  />
                </div>
                <div className="text-white font-bold mb-1">{stat.label}</div>
                <div className="text-white/50 text-sm">{stat.description}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}