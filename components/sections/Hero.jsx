// components/sections/Hero.jsx
import { ArrowRight, Play, Star, Users, CheckCircle } from 'lucide-react'

export default function Hero() {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4 fill-blue-600 text-blue-600" />
              Trusted by 1,000+ freelancers
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              The All-in-One{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                Freelance
              </span>{' '}
              Management Platform
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              From clients and projects to invoices and payments—everything you need to run your freelance business efficiently.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://freelanceflow-frontend-uh18.onrender.com/register"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3.5 rounded-lg font-semibold hover:shadow-lg transition text-lg"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/features"
                className="inline-flex items-center justify-center gap-2 border-2 border-gray-300 text-gray-700 px-8 py-3.5 rounded-lg font-semibold hover:bg-gray-50 transition text-lg"
              >
                <Play className="w-5 h-5" />
                See How It Works
              </a>
            </div>

            <div className="flex items-center gap-6 mt-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                No credit card
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                Free forever plan
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                14-day trial
              </div>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-4 mt-8">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-r from-blue-400 to-purple-400 flex items-center justify-center text-white font-semibold text-sm"
                  >
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  Rated 4.9/5 by 500+ freelancers
                </span>
              </div>
            </div>
          </div>

          {/* Right - Mockup Image */}
          <div className="relative hidden md:block">
            <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-2xl p-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-white">
                    <p className="font-semibold">Active Projects</p>
                    <p className="text-2xl font-bold">12</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center justify-between bg-white/10 rounded-lg p-3">
                      <div>
                        <p className="text-white font-medium text-sm">Project {i}</p>
                        <p className="text-white/70 text-xs">Client {i}</p>
                      </div>
                      <span className="text-xs bg-green-400/30 text-green-200 px-2 py-1 rounded-full">
                        In Progress
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 bg-white shadow-xl rounded-xl p-4 animate-bounce">
              <div className="text-2xl">💰</div>
              <p className="text-sm font-semibold">+$5,000 earned</p>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white shadow-xl rounded-xl p-4 animate-bounce delay-100">
              <div className="text-2xl">📊</div>
              <p className="text-sm font-semibold">95% satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}