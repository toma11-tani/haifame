import React from 'react'
import { ChevronDown } from 'lucide-react'

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(45, 80, 22, 0.3), rgba(45, 80, 22, 0.3)), url('/images/front.jpeg')`,
      }}
    >
      <div className="text-center text-white z-10 px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-shadow">
          Hai Fame?
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-shadow font-light">
          Authentic Italian in a cozy corner.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection('menu')}
            className="btn-primary text-lg"
          >
            See Menu
          </button>
          <button
            onClick={() => scrollToSection('access')}
            className="btn-secondary text-lg"
          >
            Reserve a Table
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollToSection('menu')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
      >
        <ChevronDown size={40} />
      </button>
    </section>
  )
}

export default Hero
