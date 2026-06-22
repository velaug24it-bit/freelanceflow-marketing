// components/sections/FAQ.jsx
'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: 'What is FreelanceFlow?',
    answer: 'FreelanceFlow is an all-in-one platform designed to help freelancers manage their clients, projects, invoices, and payments efficiently. It streamlines your workflow so you can focus on your craft.'
  },
  {
    question: 'Is FreelanceFlow free to use?',
    answer: 'Yes! We offer a free forever plan that includes basic features to get you started. You can upgrade to Pro or Business plans as your business grows.'
  },
  {
    question: 'How does the Connects system work?',
    answer: 'Connects are used to bid on projects in the marketplace. You get a monthly allowance of Connects based on your plan (Free: 20, Pro: 200, Business: 500). You can also purchase additional Connects.'
  },
  {
    question: 'Can I cancel my subscription anytime?',
    answer: 'Absolutely! You can cancel your subscription at any time from your account settings. There are no long-term contracts or cancellation fees.'
  },
  {
    question: 'Is my data secure?',
    answer: 'We take security seriously. FreelanceFlow uses bank-grade encryption and security measures to protect your data and payment information.'
  },
  {
    question: 'How does the invoicing work?',
    answer: 'You can create professional invoices in seconds, customize them with your branding, and send them directly to clients. You can track when they are viewed and receive automatic payment reminders.'
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="py-20 bg-white" id="faq">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              Questions
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about FreelanceFlow
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className={`border rounded-xl overflow-hidden transition-all ${
                  isOpen ? 'border-blue-200 shadow-md' : 'border-gray-200'
                }`}
              >
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-6 pb-4 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}