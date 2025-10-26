import React from 'react'
import { Heart, Users, Award } from 'lucide-react'

const About = () => {
  return (
    <section id="about" className="section-padding bg-warm-yellow">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-deep-green mb-4">
          About Us
        </h2>
        <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
          A cozy spot bringing authentic Italian flavors to the local neighborhood
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 lg:order-1">
            <h3 className="text-3xl font-bold text-deep-green mb-6">
              Our Story
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Nestled in a quiet alleyway, Hai fame? was born from a passion for authentic Italian cuisine and a desire to create a warm, welcoming space for our community.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Our name, meaning "Are you hungry?" in Italian, reflects our mission: to satisfy your cravings with homemade dishes that transport you straight to Italy.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We combine traditional Italian recipes with the finest local ingredients, creating a unique fusion that honors both cultures.
            </p>
          </div>
          <div className="order-1 lg:order-2">
            <img
              src="/haifame/images/front.jpeg"
              alt="Hai fame? Restaurant Front"
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
            <div className="inline-block p-4 bg-deep-green rounded-full mb-4">
              <Heart className="text-white" size={32} />
            </div>
            <h4 className="text-xl font-bold text-deep-green mb-3">
              Made with Love
            </h4>
            <p className="text-gray-600">
              Every dish is prepared with care and passion, just like nonna used to make
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
            <div className="inline-block p-4 bg-wood-brown rounded-full mb-4">
              <Users className="text-white" size={32} />
            </div>
            <h4 className="text-xl font-bold text-deep-green mb-3">
              Local Community
            </h4>
            <p className="text-gray-600">
              We source fresh ingredients from local farmers and suppliers
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
            <div className="inline-block p-4 bg-deep-green rounded-full mb-4">
              <Award className="text-white" size={32} />
            </div>
            <h4 className="text-xl font-bold text-deep-green mb-3">
              Italian Tradition
            </h4>
            <p className="text-gray-600">
              Authentic recipes passed down through generations
            </p>
          </div>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-lg shadow-xl">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img
              src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=400"
              alt="Chef"
              className="w-48 h-48 rounded-full object-cover shadow-lg"
            />
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold text-deep-green mb-2">
                Meet Our Chef
              </h3>
              <p className="text-wood-brown font-semibold mb-4">
                Marco Tanaka
              </p>
              <p className="text-gray-700 leading-relaxed">
                Born in Naples and raised in Tokyo, Chef Marco brings together the best of both worlds. 
                With 15 years of experience in Italian kitchens across Europe and Japan, 
                he creates dishes that honor tradition while embracing innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
