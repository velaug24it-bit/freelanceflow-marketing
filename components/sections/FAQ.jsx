// components/sections/FAQ.jsx
'use client'

import { useState, useEffect, useRef } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

const faqs = [
  {
    question: 'What is FreelanceFlow and how does it work?',
    answer: 'FreelanceFlow is an all-in-one platform designed to help freelancers manage every aspect of their business. From client management and project tracking to professional invoicing and secure payments — everything is in one place. Sign up free, add your clients, start tracking projects, and send your first invoice in minutes.',
    emoji: '🚀',
  },
  {
    question: 'Is FreelanceFlow really free to use?',
    answer: 'Yes! Our Free plan is completely free — forever. It includes up to 5 clients, 10 projects, 20 invoices per month, and 20 Connects. You can upgrade to Pro ($19/month) or Business ($49/month) as your business grows. All paid plans start with a 14-day free trial, no credit card required.',
    emoji: '💚',
  },
  {
    question: 'How does the Connects system work?',
    answer: 'Connects are used to bid on projects in the FreelanceFlow marketplace — similar to job credits. Each plan comes with a monthly Connects allowance: Free (20), Pro (200), Business (500). Unused Connects roll over. You can also purchase additional Connects anytime from your dashboard.',
    emoji: '⚡',
  },
  {
    question: 'How do payments work? Is it secure?',
    answer: 'FreelanceFlow uses Razorpay for secure payment processing. You can accept payments from clients via credit/debit cards, UPI, net banking, and more. All transactions are encrypted with bank-grade security. Settlement typically happens within 1-2 business days.',
    emoji: '🔐',
  },
  {
    question: 'Can I cancel my subscription anytime?',
    answer: 'Absolutely. You can cancel your subscription at any time from your account settings — no questions asked, no cancellation fees. If you cancel, you keep access to your paid features until the end of your billing period. Your data is always yours.',
    emoji: '✅',
  },
  {
    question: 'Can I try Pro or Business before paying?',
    answer: 'Yes! All paid plans come with a 14-day free trial. No credit card is required to start your trial. You can upgrade, downgrade, or cancel anytime during or after the trial period. We want you to be confident before committing.',
    emoji: '🎁',
  },
  {
    question: 'Is my data safe if I switch plans or cancel?',
    answer: 'Yes. Your data — clients, projects, invoices, everything — is always yours. If you downgrade or cancel, your data is retained. You can export all your data at any time from your account settings in CSV or PDF format.',
    emoji: '🛡️',
  },
  {
    question: 'Do you support multiple currencies?',
    answer: 'Yes! FreelanceFlow supports invoicing in multiple currencies including USD, EUR, GBP, INR, and more. Payment processing currency depends on your Razorpay account settings. More currency support is being added regularly.',
    emoji: '🌍',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)
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
    <section className="py-24 bg-white relative overflow-hidden" id="faq" ref={sectionRef}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-200 to-transparent" />
      <div className="absolute top-20 right-10 w-56 h-56 rounded-full bg-indigo-50 blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 section-fade">
          <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-5">
            <HelpCircle className="w-4 h-4" />
            Got Questions?
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-5 leading-tight">
            Frequently asked{' '}
            <span className="gradient-text">questions</span>
          </h2>
          <p className="text-xl text-gray-500 font-medium">
            Everything you need to know about FreelanceFlow. Can't find the answer? 
            <a href="#contact" className="text-indigo-600 font-bold ml-1 hover:underline">Ask us directly.</a>
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className={`section-fade rounded-2xl border overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? 'border-indigo-200 shadow-lg shadow-indigo-50'
                    : 'border-gray-150 shadow-sm hover:border-indigo-100 hover:shadow-md'
                }`}
                style={{ transitionDelay: `${(index % 8) * 0.05}s` }}
              >
                <button
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-gray-50/50 transition-colors"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  id={`faq-${index}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl flex-shrink-0">{faq.emoji}</span>
                    <span className="font-bold text-gray-900">{faq.question}</span>
                  </div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    isOpen
                      ? 'bg-indigo-600 text-white rotate-180'
                      : 'bg-gray-100 text-gray-500'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>
                
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6 pt-2 text-gray-600 leading-relaxed ml-10 font-medium">
                    {faq.answer}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}