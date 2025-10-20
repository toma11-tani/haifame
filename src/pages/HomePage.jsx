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
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-shadow">
            Hai Fame?
          </h1>
          <p className="text-2xl md:text-3xl mb-3 text-shadow font-light italic">
            お腹が空きましたか?
          </p>
          <p className="text-xl md:text-2xl mb-12 text-shadow">
            路地裏の小さな本格イタリアン
          </p>
          
          {/* Italian Flag Accent */}
          <div className="flex justify-center gap-2 mb-8">
            <div className="w-16 h-2 bg-green-600"></div>
            <div className="w-16 h-2 bg-white"></div>
            <div className="w-16 h-2 bg-red-600"></div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/menu"
              className="btn-primary text-lg inline-block"
            >
              メニューを見る
            </Link>
            <Link
              to="/access"
              className="btn-secondary text-lg inline-block"
            >
              予約する
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <ChevronDown size={40} />
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="section-padding bg-warm-yellow">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-deep-green mb-4">
            ようこそ
          </h2>
          <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto text-lg">
            イタリアの小さな一角へようこそ。本格的な料理と居心地の良い雰囲気をお楽しみください。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              to="/menu"
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center group"
            >
              <div className="inline-block p-4 bg-deep-green rounded-full mb-4 group-hover:scale-110 transition-transform">
                <UtensilsCrossed className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-deep-green mb-2">メニュー</h3>
              <p className="text-gray-600">本格イタリアン料理をご覧ください</p>
            </Link>

            <Link
              to="/about"
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center group"
            >
              <div className="inline-block p-4 bg-wood-brown rounded-full mb-4 group-hover:scale-110 transition-transform">
                <BookOpen className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-deep-green mb-2">私たちについて</h3>
              <p className="text-gray-600">お店の想いとこだわりをご紹介</p>
            </Link>

            <Link
              to="/gallery"
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center group"
            >
              <div className="inline-block p-4 bg-deep-green rounded-full mb-4 group-hover:scale-110 transition-transform">
                <Camera className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-deep-green mb-2">ギャラリー</h3>
              <p className="text-gray-600">お店の雰囲気と美味しい料理</p>
            </Link>

            <Link
              to="/access"
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center group"
            >
              <div className="inline-block p-4 bg-wood-brown rounded-full mb-4 group-hover:scale-110 transition-transform">
                <MapPin className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-deep-green mb-2">アクセス・予約</h3>
              <p className="text-gray-600">店舗情報とご予約はこちら</p>
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
                本格イタリア料理
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed text-lg">
                Hai Fame?（ハイ ファーメ）では、イタリアの温かさと味わいをお届けします。
                すべての料理は、伝統的なレシピと最高の食材を使い、愛情を込めて作られています。
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                店名は「お腹が空きましたか？」というイタリア語。手作りパスタ、薪窯ピッツァ、
                そして本場のイタリアンホスピタリティで、あなたの食欲を満たします。
              </p>
              
              {/* Italian Flag Divider */}
              <div className="flex gap-2 mb-6">
                <div className="flex-1 h-1 bg-green-600"></div>
                <div className="flex-1 h-1 bg-white border border-gray-300"></div>
                <div className="flex-1 h-1 bg-red-600"></div>
              </div>

              <Link to="/about" className="btn-primary inline-block">
                もっと詳しく
              </Link>
            </div>
            <div>
              <img
                src="/images/front.jpeg"
                alt="Hai Fame? Restaurant"
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
