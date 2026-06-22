'use client'

import { useEffect, useState } from 'react'
import { Users, Briefcase, DollarSign, Award } from 'lucide-react'

const stats = [
  {
    id: 1,
    label: 'Freelancers',
    value: 1000,
    suffix: '+',
    icon: Users,
    color: 'blue'
  },
  {
    id: 2,
    label: 'Projects Completed',
    value: 2500,
    suffix: '+',
    icon: Briefcase,
    color: 'green'
  },
  {
    id: 3,
    label: 'Revenue Generated',
    value: 5000000,
    suffix: '+',
    prefix: '$',
    icon: DollarSign,
    color: 'purple'
  },
  {
    id: 4,
    label: 'Happy Clients',
    value: 500,
    suffix: '+',
    icon: Award,
    color: 'orange'
  }
]

const StatCounter = ({ target, prefix = '', suffix = '' }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const increment = target / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [target])

  return (
    <span>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => {
            const Icon = stat.icon
            const colorClasses = {
              blue: 'bg-blue-100 text-blue-600',
              green: 'bg-green-100 text-green-600',
              purple: 'bg-purple-100 text-purple-600',
              orange: 'bg-orange-100 text-orange-600'
            }
            return (
              <div key={stat.id} className="text-center">
                <div className={`w-12 h-12 ${colorClasses[stat.color]} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900">
                  <StatCounter target={stat.value} prefix={stat.prefix || ''} suffix={stat.suffix || ''} />
                </div>
                <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}