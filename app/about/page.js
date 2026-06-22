import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import { Users, Target, Heart } from 'lucide-react'

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">About FreelanceFlow</h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Empowering freelancers to build successful businesses
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="prose prose-lg">
                <p>
                  FreelanceFlow was born out of a simple observation: freelancers spend too much time
                  on administrative tasks and not enough on what they do best - their craft.
                </p>
                <p>
                  We built FreelanceFlow to be the all-in-one solution that helps freelancers
                  manage their entire business from one place. From clients and projects to
                  invoices and payments, we've got you covered.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold">Our Mission</h3>
                  <p className="text-gray-600 mt-2">
                    To empower freelancers with the tools they need to succeed
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold">Our Vision</h3>
                  <p className="text-gray-600 mt-2">
                    To become the world's leading freelance management platform
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-pink-600" />
                  </div>
                  <h3 className="text-xl font-semibold">Our Values</h3>
                  <p className="text-gray-600 mt-2">
                    We believe in simplicity, security, and putting our users first
                  </p>
                </div>
              </div>

              <div className="mt-12 bg-gray-50 rounded-xl p-8 text-center">
                <h2 className="text-2xl font-bold mb-4">Ready to join the community?</h2>
                <p className="text-gray-600 mb-6">
                  Start your free trial today and see why thousands of freelancers trust FreelanceFlow
                </p>
                <a
                  href="https://freelanceflow-frontend-uh18.onrender.com/register"
                  className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                  Get Started Free
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}