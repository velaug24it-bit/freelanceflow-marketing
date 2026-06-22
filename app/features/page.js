import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import { 
  Users, Briefcase, FileText, CreditCard, 
  BarChart, Shield, Clock, Zap 
} from 'lucide-react'

const features = [
  {
    icon: Users,
    title: 'Client Management',
    description: 'Easily manage all your clients in one place. Track communication, projects, and payments.'
  },
  {
    icon: Briefcase,
    title: 'Project Tracking',
    description: 'Keep track of all your projects with progress tracking, deadlines, and milestones.'
  },
  {
    icon: FileText,
    title: 'Invoice Generation',
    description: 'Create professional invoices in seconds. Track payments and send reminders automatically.'
  },
  {
    icon: CreditCard,
    title: 'Payment Processing',
    description: 'Accept payments securely with Razorpay integration. Get paid faster and easier.'
  },
  {
    icon: BarChart,
    title: 'Analytics & Reports',
    description: 'Get insights into your business with detailed reports on revenue, clients, and projects.'
  },
  {
    icon: Shield,
    title: 'Secure Platform',
    description: 'Your data is safe with us. We use industry-standard security to protect your information.'
  },
  {
    icon: Clock,
    title: 'Time Tracking',
    description: 'Track time spent on projects and generate accurate invoices based on hours worked.'
  },
  {
    icon: Zap,
    title: 'Connects System',
    description: 'Bid on projects using our unique Connects system. Get more opportunities and grow your business.'
  }
]

export default function FeaturesPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
              Powerful Features for Freelancers
            </h1>
            <p className="text-xl text-center max-w-2xl mx-auto opacity-90">
              Everything you need to manage your freelance business efficiently
            </p>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20">
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-50 py-20">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of freelancers who are already using FreelanceFlow to grow their business
            </p>
            <a
              href="https://freelanceflow-frontend-uh18.onrender.com/register"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Start Free Trial
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}