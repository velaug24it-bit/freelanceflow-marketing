// components/sections/Partners.jsx
'use client'

const companies = [
  { name: 'Google', icon: '🔵' },
  { name: 'Microsoft', icon: '🟠' },
  { name: 'Shopify', icon: '🟢' },
  { name: 'Stripe', icon: '🔷' },
  { name: 'Figma', icon: '🎨' },
  { name: 'Notion', icon: '⬛' },
  { name: 'Slack', icon: '💜' },
  { name: 'AWS', icon: '🟡' },
]

// Duplicate for seamless marquee
const allCompanies = [...companies, ...companies]

export default function Partners() {
  return (
    <section className="py-14 bg-white border-b border-gray-100 overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <p className="text-center text-sm font-semibold text-gray-400 uppercase tracking-widest">
          Trusted by freelancers working with world-class companies
        </p>
      </div>
      
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex overflow-hidden">
          <div className="marquee-track animate-marquee">
            {allCompanies.map((company, index) => (
              <div
                key={index}
                className="inline-flex items-center gap-2.5 bg-gray-50 border border-gray-100 px-6 py-3 rounded-xl text-gray-500 font-bold text-base hover:border-indigo-200 hover:text-indigo-600 hover:bg-indigo-50/50 transition-all cursor-pointer group flex-shrink-0"
              >
                <span className="text-xl group-hover:scale-110 transition-transform">{company.icon}</span>
                {company.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}