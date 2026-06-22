// app/page.js
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import Hero from '../components/sections/Hero'
import Partners from '../components/sections/Partners'
import Features from '../components/sections/Features'
import Stats from '../components/sections/Stats'
import Testimonials from '../components/sections/Testimonials'
import Pricing from '../components/sections/Pricing'
import FAQ from '../components/sections/FAQ'
import About from '../components/sections/About'  // Import About
import Blog from '../components/sections/Blog'
import CTA from '../components/sections/CTA'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Partners />
        <Features />
        <Stats />
        <Testimonials />
        <Pricing />
        <FAQ />
        <About />          {/* Add About section */}
        <Blog />
        <CTA />
      </main>
      <Footer />
    </>
  )
}