// components/layout/Footer.jsx
import Link from 'next/link'
import { Twitter, Linkedin, Github, Youtube, Mail, ExternalLink, Rocket } from 'lucide-react'

const APP_URL = 'https://freelanceflow-frontend-uh18.onrender.com'

const footerLinks = {
  product: [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Open App', href: APP_URL, external: true },
    { name: 'Changelog', href: '#' },
  ],
  company: [
    { name: 'About', href: '#about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '#contact' },
    { name: 'Press', href: '#' },
  ],
  support: [
    { name: 'Help Center', href: '#contact' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
  ],
  connect: [
    { name: 'Twitter', href: 'https://twitter.com', icon: Twitter },
    { name: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
    { name: 'GitHub', href: 'https://github.com', icon: Github },
    { name: 'YouTube', href: 'https://youtube.com', icon: Youtube },
  ],
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0a0a0f, #13111f, #0a0a0f)' }}
    >
      {/* Top gradient border */}
      <div className="h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-indigo-500/5 blur-3xl" />
        <div className="absolute top-0 right-1/4 w-64 h-64 rounded-full bg-purple-500/5 blur-3xl" />
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-indigo-500/20">
                <span className="text-white font-black text-sm">FF</span>
              </div>
              <span className="text-xl font-black text-white tracking-tight">FreelanceFlow</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-6">
              The all-in-one platform for freelancers to manage clients, projects, invoices, and payments — now live and growing.
            </p>

            {/* Live App CTA */}
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-indigo-500/20 border border-indigo-500/30 text-indigo-400 font-bold text-sm px-4 py-2.5 rounded-xl hover:bg-indigo-500/30 hover:text-white transition-all duration-300 mb-6"
            >
              <Rocket className="w-4 h-4" />
              Open Live App
              <ExternalLink className="w-3 h-3" />
            </a>

            {/* Social */}
            <div className="flex gap-3">
              {footerLinks.connect.map((item, index) => {
                const Icon = item.icon
                return (
                  <a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-indigo-500/30 hover:border-indigo-500/40 transition-all duration-300"
                    aria-label={item.name}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-bold text-white mb-5 text-sm uppercase tracking-wider">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((item) => (
                <li key={item.name}>
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-indigo-400 transition-colors text-sm font-medium flex items-center gap-1.5"
                    >
                      {item.name}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <Link href={item.href} className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-white mb-5 text-sm uppercase tracking-wider">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold text-white mb-5 text-sm uppercase tracking-wider">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-5 pt-5 border-t border-white/5">
              <a
                href="mailto:support@freelanceflow.com"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-indigo-400 transition-colors font-medium"
              >
                <Mail className="w-4 h-4" />
                support@freelanceflow.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 relative z-10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <p>© {currentYear} FreelanceFlow. All rights reserved.</p>
              <span className="hidden md:inline">·</span>
              <span className="hidden md:flex items-center gap-1.5 text-indigo-400 font-medium">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500" />
                </span>
                App is live
              </span>
            </div>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link href="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}