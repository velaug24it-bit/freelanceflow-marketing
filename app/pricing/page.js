import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Free',
    price: 0,
    description: 'Perfect for getting started',
    features: [
      '5 Clients',
      '10 Projects',
      '20 Invoices',
      'Basic Support',
      '20 Connects/month'
    ],
    cta: 'Get Started',
    popular: false
  },
  {
    name: 'Pro',
    price: 19,
    description: 'Best for growing freelancers',
    features: [
      '50 Clients',
      '100 Projects',
      '500 Invoices',
      'Expense Tracking',
      'Task Board',
      'Priority Support',
      '200 Connects/month',
      'Advanced Analytics'
    ],
    cta: 'Start Pro Trial',
    popular: true
  },
  {
    name: 'Business',
    price: 49,
    description: 'For agencies and teams',
    features: [
      'Unlimited Clients',
      'Unlimited Projects',
      'Unlimited Invoices',
      'All Features',
      'API Access',
      '24/7 Support',
      '500 Connects/month',
      'Custom Branding',
      'White-label Solution'
    ],
    cta: 'Start Business Trial',
    popular: false
  }
]

export default function PricingPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Choose the plan that fits your freelance business needs
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-xl shadow-lg overflow-hidden ${
                    plan.popular ? 'ring-2 ring-blue-600 relative' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="bg-blue-600 text-white text-center py-1 text-sm font-semibold">
                      MOST POPULAR
                    </div>
                  )}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold">{plan.name}</h3>
                    <div className="mt-4 flex items-baseline">
                      <span className="text-4xl font-bold">${plan.price}</span>
                      <span className="text-gray-600 ml-2">/month</span>
                    </div>
                    <p className="text-gray-600 mt-2">{plan.description}</p>
                    <ul className="mt-6 space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href={`https://freelanceflow-frontend-uh18.onrender.com/register?plan=${plan.name.toLowerCase()}`}
                      className={`mt-8 block text-center py-3 px-6 rounded-lg font-semibold transition ${
                        plan.popular
                          ? 'bg-blue-600 text-white hover:bg-blue-700'
                          : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                      }`}
                    >
                      {plan.cta}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-600">
                All plans include a 14-day free trial. No credit card required.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}