// components/sections/Pricing.jsx
'use client'

import { useState } from 'react'
import { Check, X } from 'lucide-react'

const plans = [
  {
    name: 'Free',
    price: 0,
    description: 'Perfect for getting started',
    features: [
      { name: '5 Clients', included: true },
      { name: '10 Projects', included: true },
      { name: '20 Invoices', included: true },
      { name: 'Basic Support', included: true },
      { name: '20 Connects/month', included: true },
      { name: 'Advanced Analytics', included: false },
      { name: 'Priority Support', included: false },
      { name: 'API Access', included: false },
    ],
    cta: 'Get Started Free',
    popular: false,
  },
  {
    name: 'Pro',
    price: 19,
    description: 'Best for growing freelancers',
    features: [
      { name: '50 Clients', included: true },
      { name: '100 Projects', included: true },
      { name: '500 Invoices', included: true },
      { name: 'Priority Support', included: true },
      { name: '200 Connects/month', included: true },
      { name: 'Advanced Analytics', included: true },
      { name: 'Time Tracking', included: true },
      { name: 'API Access', included: false },
    ],
    cta: 'Start Pro Trial',
    popular: true,
  },
  {
    name: 'Business',
    price: 49,
    description: 'For agencies and teams',
    features: [
      { name: 'Unlimited Clients', included: true },
      { name: 'Unlimited Projects', included: true },
      { name: 'Unlimited Invoices', included: true },
      { name: '24/7 Priority Support', included: true },
      { name: '500 Connects/month', included: true },
      { name: 'Advanced Analytics', included: true },
      { name: 'API Access', included: true },
      { name: 'Custom Branding', included: true },
    ],
    cta: 'Start Business Trial',
    popular: false,
  },
]

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false)

  return (
    <section className="py-20 bg-gray-50" id="pricing">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, Transparent{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              Pricing
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Choose the plan that fits your freelance business needs
          </p>
        </div>

        {/* Toggle */}
        <div className="flex justify-center items-center gap-4 mb-12">
          <span className={`text-sm font-medium ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
            Monthly
          </span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className="relative w-14 h-8 bg-gray-300 rounded-full transition-colors duration-300 focus:outline-none"
            style={{ backgroundColor: isAnnual ? '#2563eb' : '#d1d5db' }}
          >
            <span
              className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${
                isAnnual ? 'translate-x-6' : ''
              }`}
            />
          </button>
          <span className={`text-sm font-medium ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
            Annual
            <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
              Save 20%
            </span>
          </span>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const annualPrice = Math.round(plan.price * 0.8 * 12)
            const monthlyEquivalent = Math.round(annualPrice / 12)
            const displayPrice = isAnnual ? annualPrice : plan.price

            return (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden ${
                  plan.popular ? 'ring-2 ring-blue-600 relative' : 'border border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-1.5 text-sm font-semibold">
                    MOST POPULAR
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-4xl font-bold">${displayPrice}</span>
                    <span className="text-gray-600 ml-2 text-sm">
                      {isAnnual ? '/year' : '/month'}
                    </span>
                  </div>
                  {isAnnual && (
                    <p className="text-sm text-green-600 mt-1">
                      ${monthlyEquivalent}/month billed annually
                    </p>
                  )}
                  <p className="text-gray-600 mt-2 text-sm">{plan.description}</p>

                  <ul className="mt-6 space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        {feature.included ? (
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                        ) : (
                          <X className="w-5 h-5 text-gray-300 flex-shrink-0" />
                        )}
                        <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={`https://freelanceflow-frontend-uh18.onrender.com/register?plan=${plan.name.toLowerCase()}`}
                    className={`mt-8 block text-center py-3.5 px-6 rounded-lg font-semibold transition ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg'
                        : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                    }`}
                  >
                    {plan.cta}
                  </a>
                </div>
              </div>
            )
          })}
        </div>

        <p className="text-center text-gray-500 text-sm mt-8">
          All plans include a 14-day free trial. No credit card required.
        </p>
      </div>
    </section>
  )
}