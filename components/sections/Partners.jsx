// components/sections/Partners.jsx
export default function Partners() {
  const logos = [
    { name: 'Google', icon: '🔵' },
    { name: 'Microsoft', icon: '🟠' },
    { name: 'Amazon', icon: '🟢' },
    { name: 'Meta', icon: '🔷' },
    { name: 'Apple', icon: '⚪' },
    { name: 'Netflix', icon: '🔴' },
  ]

  return (
    <section className="py-12 bg-gray-50 border-y border-gray-100">
      <div className="container mx-auto px-4">
        <p className="text-center text-gray-500 text-sm font-medium uppercase tracking-wider mb-8">
          Trusted by freelancers from leading companies
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
          {logos.map((logo, index) => (
            <div key={index} className="flex items-center gap-2 text-gray-400">
              <span className="text-2xl">{logo.icon}</span>
              <span className="text-lg font-semibold">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}