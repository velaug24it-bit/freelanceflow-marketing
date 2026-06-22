const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Freelance Web Developer',
    content: 'FreelanceFlow has completely transformed how I manage my business. I save hours every week on administrative tasks.',
    avatar: 'SJ'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'UI/UX Designer',
    content: 'The invoicing and payment system is a game-changer. I get paid faster and my clients love the professional look.',
    avatar: 'MC'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Content Strategist',
    content: 'I love how everything is in one place. From client management to project tracking, FreelanceFlow has it all.',
    avatar: 'ER'
  }
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Users Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied freelancers who trust FreelanceFlow
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center font-semibold text-blue-600">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}