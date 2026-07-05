// components/sections/CTA.jsx
'use client'

import { Rocket, ArrowRight, Star, CheckCircle, ExternalLink } from 'lucide-react'

const APP_URL = 'https://freelanceflow-frontend-uh18.onrender.com'

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Full gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 35%, #db2777 70%, #f59e0b 100%)',
        }}
      />

      {/* Animated overlay blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-white/10 blur-3xl animate-float-slow" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-white/10 blur-3xl animate-float" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-white/5" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur border border-white/30 text-white px-5 py-2 rounded-full text-sm font-bold mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
          </span>
          App is live — Start for free today
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
          Ready to grow your
          <br />
          freelance business?
        </h2>

        <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
          Join 1,000+ freelancers already using FreelanceFlow to manage clients, 
          track projects, and get paid faster.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            id="cta-open-app"
            className="inline-flex items-center justify-center gap-3 bg-white text-indigo-700 font-black px-10 py-4 rounded-2xl hover:bg-gray-50 transition-all duration-300 shadow-2xl hover:shadow-white/20 hover:-translate-y-1 text-lg group"
          >
            <Rocket className="w-5 h-5" />
            Open App — It's Free
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#features"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })
            }}
            id="cta-see-features"
            className="btn-ghost-dark text-lg px-10 py-4 justify-center"
          >
            Explore Features
          </a>
        </div>

        {/* Trust signals */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-white/80 text-sm font-medium">
          {[
            'No credit card required',
            'Free forever plan',
            '14-day Pro trial',
            'Cancel anytime',
          ].map((text) => (
            <div key={text} className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-300" />
              {text}
            </div>
          ))}
        </div>

        {/* Social proof */}
        <div className="mt-10 flex items-center justify-center gap-3">
          <div className="flex -space-x-2">
            {['A', 'B', 'C', 'D'].map((l, i) => (
              <div
                key={i}
                className="w-9 h-9 rounded-full border-2 border-white/30 bg-white/20 flex items-center justify-center text-white font-bold text-xs"
              >
                {l}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-300 text-amber-300" />
            ))}
          </div>
          <span className="text-white/80 text-sm font-medium">
            Loved by 1,000+ freelancers
          </span>
        </div>
      </div>
    </section>
  )
}