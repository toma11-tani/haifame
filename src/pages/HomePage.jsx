import React from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, UtensilsCrossed, BookOpen, Camera, MapPin } from 'lucide-react'

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(45, 80, 22, 0.3), rgba(45, 80, 22, 0.3)), url('/images/front.jpeg')`,
        }}
      >
        <div className="text-center text-white z-10 px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-10 text-shadow">
            Hai fame?
          </h1>

          {/* Italian Flag Accent */}
          <div className="flex justify-center gap-2 mb-10">
            <div className="w-16 h-2 bg-green-600"></div>
            <div className="w-16 h-2 bg-white"></div>
            <div className="w-16 h-2 bg-red-600"></div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/menu" className="btn-primary text-lg inline-block">
              メニューを見る
            </Link>
            <a
              href="https://www.hotpepper.jp/strJ004492742/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-lg inline-block"
            >
              予約する
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <ChevronDown size={40} />
        </div>
      </section>

      {/* Concept Section */}
      <section className="section-padding bg-warm-yellow">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-deep-green mb-6">
              Hai fame?
            </h2>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
              「お腹空いてる？」<br className="md:hidden" />——これがお店の名前の意味です。<br />
              「食堂」のような雰囲気のお店を目指しています。
            </p>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
              常連も、初めての人も。ひとりでも、大勢でも。<br />
              誰でも気軽に食べて、飲んで、くつろげる場所に。
            </p>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              肩肘張らずに、ふらっと立ち寄ってください。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              to="/menu"
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center group"
            >
              <div className="inline-block p-4 bg-deep-green rounded-full mb-4 group-hover:scale-110 transition-transform">
                <UtensilsCrossed className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-deep-green mb-2">Menu</h3>
              <p className="text-gray-600">定番メニューをご覧ください</p>
            </Link>

            <Link
              to="/about"
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center group"
            >
              <div className="inline-block p-4 bg-wood-brown rounded-full mb-4 group-hover:scale-110 transition-transform">
                <BookOpen className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-deep-green mb-2">About</h3>
              <p className="text-gray-600">お店の想いとこだわり</p>
            </Link>

            <Link
              to="/gallery"
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center group"
            >
              <div className="inline-block p-4 bg-deep-green rounded-full mb-4 group-hover:scale-110 transition-transform">
                <Camera className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-deep-green mb-2">Gallery</h3>
              <p className="text-gray-600">お店の雰囲気と料理</p>
            </Link>

            <Link
              to="/access"
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center group"
            >
              <div className="inline-block p-4 bg-wood-brown rounded-full mb-4 group-hover:scale-110 transition-transform">
                <MapPin className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-deep-green mb-2">Access</h3>
              <p className="text-gray-600">店舗情報とご予約</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-deep-green mb-6">
                初めての体験を、<br className="md:hidden" />気軽に。
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed text-sm md:text-base">
                知らなかった郷土料理、<br className="md:hidden" />飲んだことのない地元のワイン。
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed text-sm md:text-base">
                お金をかけずに、でも確かな「初めて」に<br className="md:hidden" />出会える場所を目指しています。
              </p>

              <div className="flex gap-2 mb-6">
                <div className="flex-1 h-1 bg-green-600"></div>
                <div className="flex-1 h-1 bg-white border border-gray-300"></div>
                <div className="flex-1 h-1 bg-red-600"></div>
              </div>

              <Link to="/about" className="btn-primary inline-block">
                お店について
              </Link>
            </div>
            <div>
              <img
                src="/images/front.jpeg"
                alt="Hai fame? Restaurant"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
