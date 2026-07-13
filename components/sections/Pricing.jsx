// components/sections/Pricing.jsx
'use client'

import { useState, useEffect, useRef } from 'react'
import { Check, X, Zap, Star, Crown, Sparkles } from 'lucide-react'

const APP_URL = 'https://freelancewebsite.vrinnovation.online'

const plans = [
  {
    name: 'Free',
    monthlyPrice: 0,
    description: 'Perfect for getting started',
    icon: Star,
    gradient: 'from-gray-600 to-slate-700',
    features: [
      { name: 'Max 2 Bids & 2 Saved Projects', included: true },
      { name: 'Max 2 Portfolio Items & 2 Boosts', included: true },
      { name: 'Max 2 active contracts & hiring slots', included: true },
      { name: 'Max 2 Projects Posted & 2 Active Projects', included: true },
      { name: 'Basic Support', included: true },
    ],
    cta: 'Upgrade to Free',
    ctaHref: `${APP_URL}/register?plan=free`,
    popular: false,
    badge: null,
  },
  {
    name: 'Pro',
    monthlyPrice: 249,
    description: 'Best for growing freelancers',
    icon: Zap,
    gradient: 'from-amber-500 to-orange-500',
    features: [
      { name: 'Max 10 Bids & 10 Saved Projects', included: true },
      { name: 'Max 10 Portfolio Items & 10 Boosts', included: true },
      { name: 'Max 10 active contracts & hiring slots', included: true },
      { name: 'Max 10 Projects Posted & 10 Active Projects', included: true },
      { name: 'Expense Tracking & Task Board', included: true },
      { name: 'Priority Support', included: true },
    ],
    cta: 'Upgrade to Pro',
    ctaHref: `${APP_URL}/register?plan=pro`,
    popular: true,
    badge: 'MOST POPULAR',
  },
  {
    name: 'Business',
    monthlyPrice: 499,
    description: 'For agencies and power users',
    icon: Crown,
    gradient: 'from-indigo-500 to-purple-600',
    features: [
      { name: 'Unlimited Bids & Saved Projects', included: true },
      { name: 'Unlimited Portfolio Items & Boosts', included: true },
      { name: 'Unlimited contracts & hiring slots', included: true },
      { name: 'Unlimited Projects Posted & Active Projects', included: true },
      { name: 'Team member access & API access', included: true },
      { name: '24/7 Dedicated Support', included: true },
    ],
    cta: 'Upgrade to Business',
    ctaHref: `${APP_URL}/register?plan=business`,
    popular: false,
    badge: null,
  },
]

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false)
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
    <section className="py-24 bg-white relative overflow-hidden" id="pricing" ref={sectionRef}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-200 to-transparent" />
      <div className="absolute top-40 left-0 w-64 h-64 rounded-full bg-indigo-50 blur-3xl pointer-events-none" />
      <div className="absolute bottom-40 right-0 w-64 h-64 rounded-full bg-purple-50 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 section-fade">
          <div className="inline-flex items-center gap-2 bg-purple-50 border border-purple-100 text-purple-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-5">
            <Sparkles className="w-4 h-4" />
            Simple Pricing
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-5 leading-tight">
            Start free.{' '}
            <span className="gradient-text">Scale as you grow.</span>
          </h2>
          <p className="text-xl text-gray-500 font-medium">
            No hidden fees. Cancel anytime.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center items-center gap-4 mb-14 section-fade">
          <span className={`text-sm font-bold transition-colors ${!isAnnual ? 'text-gray-900' : 'text-gray-400'}`}>
            Monthly
          </span>
          <button
            id="pricing-toggle"
            onClick={() => setIsAnnual(!isAnnual)}
            className="relative w-14 h-7 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            style={{ background: isAnnual ? 'linear-gradient(135deg, #6366f1, #8b5cf6)' : '#d1d5db' }}
          >
            <span
              className={`absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-300 ${
                isAnnual ? 'translate-x-7' : ''
              }`}
            />
          </button>
          <span className={`text-sm font-bold transition-colors flex items-center gap-2 ${isAnnual ? 'text-gray-900' : 'text-gray-400'}`}>
            Annual
            <span className="bg-green-100 text-green-700 text-xs px-2.5 py-0.5 rounded-full font-bold border border-green-200">
              Save 20%
            </span>
          </span>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon
            const annualTotal = Math.round(plan.monthlyPrice * 0.8 * 12)
            const monthlyEquiv = Math.round(annualTotal / 12)
            const displayPrice = isAnnual ? monthlyEquiv : plan.monthlyPrice

            return (
              <div
                key={index}
                className={`pricing-card relative rounded-3xl overflow-hidden section-fade ${
                  plan.popular
                    ? 'ring-2 ring-indigo-500 shadow-2xl shadow-indigo-200/60 scale-[1.02]'
                    : 'border border-gray-200 shadow-md'
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                {/* Popular gradient top bar */}
                {plan.popular && (
                  <div className="h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
                )}

                <div className="p-8 bg-white">
                  {/* Plan header */}
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      {plan.badge && (
                        <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-3 ${
                          plan.popular
                            ? 'bg-indigo-50 text-indigo-700 border border-indigo-100'
                            : 'bg-amber-50 text-amber-700 border border-amber-100'
                        }`}>
                          {plan.badge}
                        </span>
                      )}
                      <h3 className="text-2xl font-black text-gray-900">{plan.name}</h3>
                      <p className="text-gray-500 text-sm mt-1 font-medium">{plan.description}</p>
                    </div>
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${plan.gradient} flex items-center justify-center shadow-md flex-shrink-0`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mb-2">
                    <div className="flex items-baseline gap-1">
                      <span className="text-5xl font-black text-gray-900">₹{displayPrice}</span>
                      <span className="text-gray-400 font-medium">/month</span>
                    </div>
                    {isAnnual && plan.monthlyPrice > 0 && (
                      <p className="text-green-600 text-sm font-bold mt-1">
                        ₹{annualTotal}/year — save ₹{Math.round(plan.monthlyPrice * 12 - annualTotal)}
                      </p>
                    )}
                    {!isAnnual && plan.monthlyPrice > 0 && (
                      <p className="text-gray-400 text-xs mt-1">billed monthly</p>
                    )}
                  </div>

                  {/* CTA */}
                  <a
                    href={plan.ctaHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    id={`pricing-cta-${plan.name.toLowerCase()}`}
                    className={`mt-6 mb-8 block text-center py-3.5 px-6 rounded-2xl font-bold transition-all duration-300 ${
                      plan.popular
                        ? 'btn-launch'
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200 border border-gray-200'
                    }`}
                  >
                    {plan.cta}
                  </a>

                  {/* Divider */}
                  <div className="border-t border-gray-100 mb-6" />

                  {/* Features */}
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        {feature.included ? (
                          <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${plan.popular ? 'from-indigo-500 to-purple-500' : 'from-gray-600 to-slate-700'} flex items-center justify-center flex-shrink-0`}>
                            <Check className="w-3 h-3 text-white" />
                          </div>
                        ) : (
                          <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                            <X className="w-3 h-3 text-gray-300" />
                          </div>
                        )}
                        <span className={`text-sm font-medium ${feature.included ? 'text-gray-700' : 'text-gray-300'}`}>
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>


      </div>
    </section>
  )
}