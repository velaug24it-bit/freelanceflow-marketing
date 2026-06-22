// components/sections/Features.jsx
import { 
  Users, Briefcase, FileText, CreditCard, 
  BarChart, Clock, Zap, Shield, MessageSquare,
  Link, Smartphone, Globe, Database
} from 'lucide-react'

const features = [
  {
    icon: Users,
    title: 'Client Management',
    description: 'Organize all your client relationships, communications, and projects in one place.',
  },
  {
    icon: Briefcase,
    title: 'Project Tracking',
    description: 'Track project progress, deadlines, and milestones with real-time updates.',
  },
  {
    icon: FileText,
    title: 'Invoicing',
    description: 'Create professional invoices in seconds and get paid faster with automated reminders.',
  },
  {
    icon: CreditCard,
    title: 'Payment Processing',
    description: 'Accept payments securely through Razorpay integration with instant settlement.',
  },
  {
    icon: BarChart,
    title: 'Analytics & Reports',
    description: 'Get powerful insights into your business performance with detailed analytics.',
  },
  {
    icon: Clock,
    title: 'Time Tracking',
    description: 'Track time spent on projects and automatically generate accurate invoices.',
  },
  {
    icon: Zap,
    title: 'Connects System',
    description: 'Bid on projects with our unique Connects system and grow your business.',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade security to protect your data and payment information.',
  },
  {
    icon: MessageSquare,
    title: 'Client Communication',
    description: 'Built-in messaging to keep all client communications organized and accessible.',
  },
]

export default function Features() {
  return (
    <section className="py-20 bg-white" id="features">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything You Need to{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              Succeed
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Powerful features designed specifically for freelancers to streamline their workflow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition">
                  <Icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}