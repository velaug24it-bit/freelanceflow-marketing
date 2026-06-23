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
import About from '../components/sections/About'
import Blog from '../components/sections/Blog'
import Contact from '../components/sections/Contact'  // Import Contact
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
        <About />
        <Blog />
        <Contact />      {/* Add Contact section */}
        <CTA />
      </main>
      <Footer />
    </>
  )
}