// components/sections/Features.jsx
'use client'

import {
  Users, Briefcase, FileText, CreditCard,
  BarChart, Clock, Zap, Shield, MessageSquare
} from 'lucide-react'
import { useEffect, useRef } from 'react'

const features = [
  {
    icon: Users,
    title: 'Client Management',
    description: 'Organize all your client relationships, communications, and projects in one powerful hub.',
    gradient: 'from-blue-500 to-indigo-600',
    bgGradient: 'from-blue-50 to-indigo-50',
    border: 'hover:border-blue-200',
  },
  {
    icon: Briefcase,
    title: 'Project Tracking',
    description: 'Track progress, deadlines, and milestones with real-time updates and visual timelines.',
    gradient: 'from-purple-500 to-violet-600',
    bgGradient: 'from-purple-50 to-violet-50',
    border: 'hover:border-purple-200',
  },
  {
    icon: FileText,
    title: 'Smart Invoicing',
    description: 'Create beautiful professional invoices in seconds and get paid faster with auto-reminders.',
    gradient: 'from-pink-500 to-rose-600',
    bgGradient: 'from-pink-50 to-rose-50',
    border: 'hover:border-pink-200',
  },
  {
    icon: CreditCard,
    title: 'Payment Processing',
    description: 'Accept payments securely through Razorpay with instant settlement and transaction history.',
    gradient: 'from-emerald-500 to-green-600',
    bgGradient: 'from-emerald-50 to-green-50',
    border: 'hover:border-emerald-200',
  },
  {
    icon: BarChart,
    title: 'Analytics & Reports',
    description: 'Get powerful insights into your revenue, client performance, and business growth metrics.',
    gradient: 'from-amber-500 to-orange-600',
    bgGradient: 'from-amber-50 to-orange-50',
    border: 'hover:border-amber-200',
  },
  {
    icon: Clock,
    title: 'Time Tracking',
    description: 'Track billable hours with one click and auto-generate accurate invoices from time logs.',
    gradient: 'from-cyan-500 to-blue-600',
    bgGradient: 'from-cyan-50 to-blue-50',
    border: 'hover:border-cyan-200',
  },
  {
    icon: Zap,
    title: 'Connects System',
    description: 'Bid on projects with our unique Connects marketplace and grow your client pipeline.',
    gradient: 'from-violet-500 to-purple-600',
    bgGradient: 'from-violet-50 to-purple-50',
    border: 'hover:border-violet-200',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade encryption and security to protect your data, contracts, and payment info.',
    gradient: 'from-slate-600 to-gray-700',
    bgGradient: 'from-slate-50 to-gray-50',
    border: 'hover:border-slate-200',
  },
  {
    icon: MessageSquare,
    title: 'Client Messaging',
    description: 'Built-in messaging system keeps all client conversations organized and easily searchable.',
    gradient: 'from-indigo-500 to-blue-600',
    bgGradient: 'from-indigo-50 to-blue-50',
    border: 'hover:border-indigo-200',
  },
]

export default function Features() {
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
    <section className="py-24 bg-white relative overflow-hidden" id="features" ref={sectionRef}>
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-200 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-200 to-transparent" />
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-gradient-to-br from-indigo-100/50 to-purple-100/30 blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 section-fade">
          <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-5">
            ⚡ Powerful Features
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-5 leading-tight">
            Everything you need to{' '}
            <span className="gradient-text">run your business</span>
          </h2>
          <p className="text-xl text-gray-500 font-medium leading-relaxed">
            Powerful tools built specifically for freelancers — from day one to scaling up.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className={`feature-card glass-card-light p-8 border border-gray-100/80 ${feature.border} section-fade`}
                style={{ transitionDelay: `${(index % 6) * 0.08}s` }}
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${feature.bgGradient} rounded-2xl flex items-center justify-center mb-5 shadow-sm`}>
                  <div className={`w-9 h-9 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center shadow-md`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}