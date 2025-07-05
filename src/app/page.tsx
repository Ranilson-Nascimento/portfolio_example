import Hero from '@/components/sections/hero'
import About from '@/components/sections/about'
import Projects from '@/components/sections/projects'
import Services from '@/components/sections/services'
import Contact from '@/components/sections/contact'
import Header from '@/components/header'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </>
  )
}
