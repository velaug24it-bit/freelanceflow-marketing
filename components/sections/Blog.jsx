// components/sections/Blog.jsx
import Link from 'next/link'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

const posts = [
  {
    id: 1,
    title: '10 Tips to Grow Your Freelance Business in 2024',
    excerpt: 'Discover proven strategies to attract more clients and increase your income.',
    date: 'Dec 15, 2024',
    readTime: '5 min read',
    category: 'Growth',
    image: '📈',
    slug: '10-tips-to-grow-freelance-business-2024',
  },
  {
    id: 2,
    title: 'How to Create Professional Invoices That Get Paid Faster',
    excerpt: 'Learn the best practices for creating invoices that clients actually pay on time.',
    date: 'Dec 10, 2024',
    readTime: '4 min read',
    category: 'Finance',
    image: '📄',
    slug: 'create-professional-invoices-get-paid-faster',
  },
  {
    id: 3,
    title: 'The Ultimate Guide to Freelance Pricing Strategies',
    excerpt: 'Find the perfect pricing model for your services and maximize your earnings.',
    date: 'Dec 5, 2024',
    readTime: '6 min read',
    category: 'Pricing',
    image: '💰',
    slug: 'ultimate-guide-freelance-pricing-strategies',
  },
]

export default function Blog() {
  return (
    <section className="py-20 bg-gray-50" id="blog">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Latest from the{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              Blog
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Tips, guides, and insights to help you succeed as a freelancer
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="p-6">
                <div className="text-4xl mb-4">{post.image}</div>
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                  <span className="bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {post.readTime}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm">{post.excerpt}</p>
                <div className="flex items-center gap-1 text-blue-600 font-medium mt-4 group-hover:gap-2 transition-all">
                  Read More <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
          >
            View All Posts
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}