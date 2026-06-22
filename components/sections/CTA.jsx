// components/sections/CTA.jsx
export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Take Your Freelance Business to the Next Level?
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Join thousands of freelancers who are already using FreelanceFlow to manage their business efficiently.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a            href="https://freelanceflow-frontend-uh18.onrender.com/register"
            className="bg-white text-blue-600 px-8 py-3.5 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg"
          >
            Start Free Trial
          </a>
          <a
            href="/features"
            className="border-2 border-white text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-white/10 transition"
          >
            Learn More
          </a>
        </div>
        <p className="text-white/80 text-sm mt-4">No credit card required. Free forever plan available.</p>
      </div>
    </section>
  )
}