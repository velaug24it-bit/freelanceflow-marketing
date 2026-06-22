// components/sections/About.jsx
export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              FreelanceFlow
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Empowering freelancers to build successful businesses
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              FreelanceFlow was born out of a simple observation: freelancers spend too much time
              on administrative tasks and not enough on what they do best - their craft.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              We built FreelanceFlow to be the all-in-one solution that helps freelancers
              manage their entire business from one place.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-blue-600">1000+</div>
              <div className="text-sm text-gray-600">Freelancers</div>
            </div>
            <div className="bg-purple-50 p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-purple-600">2500+</div>
              <div className="text-sm text-gray-600">Projects</div>
            </div>
            <div className="bg-green-50 p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-green-600">$5M+</div>
              <div className="text-sm text-gray-600">Revenue</div>
            </div>
            <div className="bg-orange-50 p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-orange-600">500+</div>
              <div className="text-sm text-gray-600">Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}