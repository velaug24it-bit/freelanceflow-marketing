// app/blog/[slug]/page.js
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Header from '../../../components/layout/Header'
import Footer from '../../../components/layout/Footer'
import { Calendar, Clock, ArrowLeft } from 'lucide-react'

// This would normally come from a CMS or database
const blogPosts = [
  {
    id: 1,
    slug: '10-tips-to-grow-freelance-business-2024',
    title: '10 Tips to Grow Your Freelance Business in 2024',
    excerpt: 'Discover proven strategies to attract more clients and increase your income.',
    date: 'Dec 15, 2024',
    readTime: '5 min read',
    category: 'Growth',
    image: '📈',
    content: `
      <h2>1. Build a Strong Portfolio</h2>
      <p>Your portfolio is your most powerful marketing tool. Showcase your best work and make it easy for potential clients to see what you can do.</p>
      
      <h2>2. Network Consistently</h2>
      <p>Attend industry events, join online communities, and connect with other professionals. Your network is your net worth.</p>
      
      <h2>3. Specialize in a Niche</h2>
      <p>Specializing helps you stand out and command higher rates. Clients are willing to pay more for expertise in their specific industry.</p>
      
      <h2>4. Master Client Communication</h2>
      <p>Clear, professional communication builds trust and leads to repeat business. Always set clear expectations from the start.</p>
      
      <h2>5. Use Professional Tools</h2>
      <p>Platforms like FreelanceFlow help you manage clients, projects, and invoices efficiently, saving you time and reducing stress.</p>
    `
  },
  {
    id: 2,
    slug: 'create-professional-invoices-get-paid-faster',
    title: 'How to Create Professional Invoices That Get Paid Faster',
    excerpt: 'Learn the best practices for creating invoices that clients actually pay on time.',
    date: 'Dec 10, 2024',
    readTime: '4 min read',
    category: 'Finance',
    image: '📄',
    content: `
      <h2>1. Include Clear Payment Terms</h2>
      <p>Specify due dates, payment methods, and late fees clearly on every invoice.</p>
      
      <h2>2. Use Professional Invoicing Software</h2>
      <p>Tools like FreelanceFlow make it easy to create, send, and track invoices automatically.</p>
      
      <h2>3. Send Invoices Immediately</h2>
      <p>Don't wait to send invoices. The sooner you send them, the sooner you get paid.</p>
      
      <h2>4. Follow Up Professionally</h2>
      <p>Send polite reminders before and after the due date. Automated reminders save time and effort.</p>
    `
  },
  {
    id: 3,
    slug: 'ultimate-guide-freelance-pricing-strategies',
    title: 'The Ultimate Guide to Freelance Pricing Strategies',
    excerpt: 'Find the perfect pricing model for your services and maximize your earnings.',
    date: 'Dec 5, 2024',
    readTime: '6 min read',
    category: 'Pricing',
    image: '💰',
    content: `
      <h2>1. Value-Based Pricing</h2>
      <p>Price based on the value you deliver to clients, not just the time you spend.</p>
      
      <h2>2. Project-Based Pricing</h2>
      <p>Charge a flat fee for the entire project. This is ideal for well-defined projects with clear deliverables.</p>
      
      <h2>3. Hourly Pricing</h2>
      <p>Best for projects with uncertain scope or ongoing work. Track your time accurately and bill accordingly.</p>
      
      <h2>4. Retainer Pricing</h2>
      <p>Offer monthly retainers for ongoing work. This provides predictable income and strengthens client relationships.</p>
    `
  }
]

// Generate static paths for all blog posts
export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPostPage({ params }) {
  const { slug } = params
  const post = blogPosts.find((p) => p.slug === slug)

  // If post not found, show 404
  if (!post) {
    notFound()
  }

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
              <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-medium">
                {post.category}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" /> {post.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" /> {post.readTime}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {post.title}
            </h1>

            <div className="text-4xl mb-6">{post.image}</div>

            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  FF
                </div>
                <div>
                  <p className="font-semibold">FreelanceFlow Team</p>
                  <p className="text-sm text-gray-600">Helping freelancers build successful businesses</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="font-semibold mb-4">Share this article</h3>
              <div className="flex gap-4">
                <button className="text-gray-600 hover:text-blue-600 transition">Twitter</button>
                <button className="text-gray-600 hover:text-blue-600 transition">LinkedIn</button>
                <button className="text-gray-600 hover:text-blue-600 transition">Facebook</button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}