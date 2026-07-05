// components/sections/Blog.jsx
'use client'

import Link from 'next/link'
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react'
import { useEffect, useRef } from 'react'

const posts = [
  {
    id: 1,
    title: '10 Tips to Grow Your Freelance Business in 2026',
    excerpt: 'Discover proven strategies to attract more clients, increase your rates, and build a sustainable independent business.',
    date: 'Jun 20, 2026',
    readTime: '5 min read',
    category: 'Growth',
    categoryColor: 'bg-indigo-50 text-indigo-700 border-indigo-100',
    emoji: '📈',
    gradient: 'from-indigo-500 to-blue-600',
    slug: '10-tips-to-grow-freelance-business-2026',
  },
  {
    id: 2,
    title: 'How to Create Invoices That Get Paid Faster',
    excerpt: 'Learn best practices for professional invoicing — from structure and payment terms to follow-up strategies that work.',
    date: 'Jun 12, 2026',
    readTime: '4 min read',
    category: 'Finance',
    categoryColor: 'bg-emerald-50 text-emerald-700 border-emerald-100',
    emoji: '📄',
    gradient: 'from-emerald-500 to-green-600',
    slug: 'create-professional-invoices-get-paid-faster',
  },
  {
    id: 3,
    title: 'The Ultimate Guide to Freelance Pricing in 2026',
    excerpt: 'Find the pricing model that maximizes your earnings — hourly, project-based, retainer, or value-based pricing explained.',
    date: 'Jun 5, 2026',
    readTime: '6 min read',
    category: 'Pricing',
    categoryColor: 'bg-amber-50 text-amber-700 border-amber-100',
    emoji: '💰',
    gradient: 'from-amber-500 to-orange-600',
    slug: 'ultimate-guide-freelance-pricing-strategies',
  },
]

export default function Blog() {
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
    <section className="py-24 bg-white relative overflow-hidden" id="blog" ref={sectionRef}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-200 to-transparent" />
      <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-amber-50 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-14 section-fade">
          <div>
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 text-emerald-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              <BookOpen className="w-4 h-4" />
              Freelancer Blog
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
              Grow your{' '}
              <span className="gradient-text">freelance career</span>
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 bg-gray-900 text-white font-bold px-6 py-3.5 rounded-2xl hover:bg-gray-800 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg flex-shrink-0 group"
          >
            View All Posts
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="feature-card glass-card-light group border border-gray-100 hover:border-indigo-100 overflow-hidden section-fade"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {/* Post Header */}
              <div className={`h-2 bg-gradient-to-r ${post.gradient}`} />
              
              <div className="p-7">
                {/* Emoji */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${post.gradient} flex items-center justify-center text-2xl mb-5 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  {post.emoji}
                </div>

                {/* Meta */}
                <div className="flex items-center gap-2 text-xs mb-4">
                  <span className={`px-2.5 py-1 rounded-full font-bold border ${post.categoryColor}`}>
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-gray-400 font-medium">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1 text-gray-400 font-medium">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-black text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors leading-snug">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-500 text-sm leading-relaxed mb-5 font-medium">
                  {post.excerpt}
                </p>

                {/* Read More */}
                <div className="flex items-center gap-1.5 text-indigo-600 font-bold text-sm group-hover:gap-2.5 transition-all">
                  Read Article
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}