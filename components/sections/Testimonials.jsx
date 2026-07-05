// components/sections/Testimonials.jsx
'use client'

import { Star, Quote } from 'lucide-react'
import { useEffect, useRef } from 'react'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Freelance Web Developer',
    company: 'Ex-Google',
    content: 'FreelanceFlow completely transformed how I manage my business. I save 10+ hours every week on admin tasks — now I focus on building, not bookkeeping.',
    avatar: 'SJ',
    rating: 5,
    gradient: 'from-blue-500 to-indigo-600',
    revenue: '$8,400/mo',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'UI/UX Designer',
    company: 'Independent',
    content: 'The invoicing and payment system is a game-changer. I get paid 3x faster and my clients love the professional look. Worth every penny!',
    avatar: 'MC',
    rating: 5,
    gradient: 'from-purple-500 to-pink-600',
    revenue: '$12,000/mo',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Content Strategist',
    company: 'Remote-First',
    content: 'Everything in one place — client management, projects, invoices, analytics. FreelanceFlow made me feel like I have a business operations team.',
    avatar: 'ER',
    rating: 5,
    gradient: 'from-emerald-500 to-teal-600',
    revenue: '$5,200/mo',
  },
  {
    id: 4,
    name: 'David Kim',
    role: 'Full Stack Developer',
    company: 'Freelancer',
    content: 'The Connects system is brilliant. I landed 3 new long-term clients in my first month. The analytics help me understand exactly where my revenue is coming from.',
    avatar: 'DK',
    rating: 5,
    gradient: 'from-amber-500 to-orange-600',
    revenue: '$15,800/mo',
  },
  {
    id: 5,
    name: 'Priya Sharma',
    role: 'Brand Designer',
    company: 'Solo Agency',
    content: 'I tried everything — Notion, spreadsheets, other tools. Nothing comes close to FreelanceFlow for running a real freelance business. Set it up in 20 minutes!',
    avatar: 'PS',
    rating: 5,
    gradient: 'from-pink-500 to-rose-600',
    revenue: '$9,600/mo',
  },
  {
    id: 6,
    name: 'James Torres',
    role: 'Motion Designer',
    company: 'Creative Studio',
    content: 'The time tracking feature alone is worth it. I now know exactly how long projects take, which means I price better and earn more. My revenue went up 40%.',
    avatar: 'JT',
    rating: 5,
    gradient: 'from-violet-500 to-purple-600',
    revenue: '$11,200/mo',
  },
]

export default function Testimonials() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.05 }
    )
    const elements = sectionRef.current?.querySelectorAll('.section-fade')
    elements?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden" ref={sectionRef}>
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-200 to-transparent" />
      <div className="absolute top-20 left-10 w-48 h-48 rounded-full bg-indigo-100/60 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-purple-100/60 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 section-fade">
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-100 text-amber-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-5">
            ⭐ User Stories
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-5 leading-tight">
            Freelancers love{' '}
            <span className="gradient-text">FreelanceFlow</span>
          </h2>
          <p className="text-xl text-gray-500 font-medium">
            Real stories from real freelancers who are building thriving businesses
          </p>

          {/* Overall Rating */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-black text-gray-900 text-lg">4.9</span>
            <span className="text-gray-500 font-medium">from 500+ reviews</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="feature-card glass-card-light p-8 border border-gray-100 hover:border-indigo-100 section-fade"
              style={{ transitionDelay: `${(index % 3) * 0.1}s` }}
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-indigo-200 mb-4" />

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 leading-relaxed mb-6 font-medium text-sm">
                "{testimonial.content}"
              </p>

              {/* Author + Revenue Badge */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-11 h-11 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white font-black text-sm shadow-md`}
                  >
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{testimonial.name}</p>
                    <p className="text-gray-400 text-xs">{testimonial.role}</p>
                  </div>
                </div>
                <div className="bg-green-50 border border-green-100 text-green-700 font-bold text-xs px-3 py-1.5 rounded-full">
                  {testimonial.revenue}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}