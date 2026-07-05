// components/sections/Contact.jsx
'use client'

import { useState, useEffect, useRef } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle, XCircle, Clock, MessageSquare } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState({
    type: 'idle',
    message: ''
  })
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setStatus({ type: 'error', message: 'Please fill in all fields.' })
      return
    }
    setStatus({ type: 'sending', message: 'Sending your message...' })
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const data = await response.json()
      if (response.ok) {
        setStatus({ type: 'success', message: "Message sent! We'll get back to you within 24 hours." })
        setFormData({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setStatus({ type: 'idle', message: '' }), 6000)
      } else {
        setStatus({ type: 'error', message: data.error || 'Failed to send. Please try again.' })
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Network error. Please check your connection.' })
    }
  }

  const contactItems = [
    {
      icon: Mail,
      label: 'Email Us',
      value: 'support@freelanceflow.com',
      sub: 'We respond within 24 hours',
      gradient: 'from-indigo-500 to-blue-600',
    },
    {
      icon: Phone,
      label: 'Call Us',
      value: '+91 9840994649',
      sub: 'Mon–Fri, 9AM–6PM IST',
      gradient: 'from-purple-500 to-pink-600',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Tamil Nadu, India',
      sub: 'Remote-first team',
      gradient: 'from-emerald-500 to-teal-600',
    },
  ]

  const inputClass = `w-full px-4 py-3.5 rounded-xl border border-gray-200 text-gray-800 font-medium text-sm
    bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-400
    placeholder:text-gray-400 transition-all duration-200 hover:border-gray-300`

  return (
    <section id="contact" className="py-24 bg-gray-50 relative overflow-hidden" ref={sectionRef}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-200 to-transparent" />
      <div className="absolute top-20 left-10 w-56 h-56 rounded-full bg-indigo-100/60 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-56 h-56 rounded-full bg-purple-100/60 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 section-fade">
          <div className="inline-flex items-center gap-2 bg-pink-50 border border-pink-100 text-pink-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-5">
            <MessageSquare className="w-4 h-4" />
            Contact Us
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-5 leading-tight">
            We'd love to{' '}
            <span className="gradient-text">hear from you</span>
          </h2>
          <p className="text-xl text-gray-500 font-medium">
            Have questions or need help? Our team is always happy to assist.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Left — Contact Info */}
          <div className="space-y-5 section-fade">
            {contactItems.map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={index}
                  className="feature-card glass-card-light p-6 border border-gray-100 flex items-start gap-5 hover:border-indigo-100"
                >
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-md flex-shrink-0`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">{item.label}</p>
                    <p className="font-bold text-gray-900 text-base">{item.value}</p>
                    <p className="text-sm text-gray-500 mt-0.5 font-medium">{item.sub}</p>
                  </div>
                </div>
              )
            })}

            {/* Response time note */}
            <div className="glass-card-light border border-indigo-100 rounded-2xl p-5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-bold text-gray-900 text-sm">Quick Response Guaranteed</p>
                <p className="text-gray-500 text-xs font-medium mt-0.5">Average response time: under 24 hours</p>
              </div>
            </div>
          </div>

          {/* Right — Contact Form */}
          <div className="section-fade" style={{ transitionDelay: '0.2s' }}>
            <form
              onSubmit={handleSubmit}
              className="glass-card-light border border-gray-100 rounded-3xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-black text-gray-900 mb-6">Send a Message</h3>

              {/* Status */}
              {status.type !== 'idle' && (
                <div
                  className={`mb-5 p-4 rounded-xl border flex items-center gap-3 text-sm font-semibold ${
                    status.type === 'success'
                      ? 'bg-green-50 text-green-700 border-green-200'
                      : status.type === 'error'
                      ? 'bg-red-50 text-red-700 border-red-200'
                      : 'bg-indigo-50 text-indigo-700 border-indigo-200'
                  }`}
                >
                  {status.type === 'success' && <CheckCircle className="w-5 h-5 flex-shrink-0" />}
                  {status.type === 'error' && <XCircle className="w-5 h-5 flex-shrink-0" />}
                  {status.type === 'sending' && (
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-indigo-600 border-t-transparent flex-shrink-0" />
                  )}
                  {status.message}
                </div>
              )}

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={inputClass}
                      placeholder="Alex Johnson"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={inputClass}
                      placeholder="alex@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={inputClass}
                    placeholder="How can we help you?"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    required
                    className={`${inputClass} resize-none`}
                    placeholder="Tell us more about your question or project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status.type === 'sending'}
                  id="contact-submit"
                  className="w-full btn-launch py-4 justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status.type === 'sending' ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}