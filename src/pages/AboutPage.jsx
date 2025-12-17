import React from 'react'
import { Heart, Users, Award, ChefHat } from 'lucide-react'

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-warm-yellow">
      {/* Header */}
      <section className="section-padding bg-deep-green text-white text-center">
        <div className="container-custom">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">About</h1>
          <p className="text-xl md:text-2xl mb-6 font-light italic">La Nostra Storia</p>
          
          {/* Italian Flag Accent */}
          <div className="flex justify-center gap-2">
            <div className="w-20 h-2 bg-green-600"></div>
            <div className="w-20 h-2 bg-white"></div>
            <div className="w-20 h-2 bg-red-600"></div>
          </div>
        </div>
      </section>

      {/* Main Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl font-bold text-deep-green mb-6 flex items-center gap-3">
                <span className="text-5xl"></span>
                CONCEPT
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed text-lg">
                Hai fame? は「イタリアの家みたいな食堂」。
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed text-lg">
                誰でも気楽に、ふらっと立ち寄れる場所に。
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                家のような温かさをそのままに、お腹も気持ちも満たせるように。
              </p>

              {/* Italian Flag Divider */}
              <div className="flex gap-2 mb-6">
                <div className="flex-1 h-2 bg-green-600"></div>
                <div className="flex-1 h-2 bg-white border border-gray-300"></div>
                <div className="flex-1 h-2 bg-red-600"></div>
              </div>

              <blockquote className="border-l-4 border-deep-green pl-4 italic text-gray-600 text-lg">
                「イタリア料理は人々を幸せにする芸術です」
                <br />
                <span className="text-sm not-italic">- La cucina italiana è l'arte di far felici le persone</span>
              </blockquote>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src="/haifame/images/front.jpeg"
                alt="Hai fame? Restaurant Front"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center relative overflow-hidden">
              {/* Italian Flag Top Border */}
              <div className="absolute top-0 left-0 right-0 flex">
                <div className="flex-1 h-2 bg-green-600"></div>
                <div className="flex-1 h-2 bg-white"></div>
                <div className="flex-1 h-2 bg-red-600"></div>
              </div>
              <div className="inline-block p-4 bg-deep-green rounded-full mb-4 mt-2">
                <Heart className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-deep-green mb-3">
                CUISINE
              </h3>
              <p className="text-gray-600 mb-2 italic text-sm">Cucina di Casa</p>
              <p className="text-gray-600 text-sm">
                化学調味料は使わず、素朴で滋味深い郷土料理を。有名どころだけでなく、少しマイナーな地域の味も気軽に。
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center relative overflow-hidden">
              {/* Italian Flag Top Border */}
              <div className="absolute top-0 left-0 right-0 flex">
                <div className="flex-1 h-2 bg-green-600"></div>
                <div className="flex-1 h-2 bg-white"></div>
                <div className="flex-1 h-2 bg-red-600"></div>
              </div>
              <div className="inline-block p-4 bg-wood-brown rounded-full mb-4 mt-2">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-deep-green mb-3">
                WINE
              </h3>
              <p className="text-gray-600 mb-2 italic text-sm">Vini Locali</p>
              <p className="text-gray-600 text-sm">
                地元ワインと料理の“初めての組み合わせ”を、手頃に楽しむ。一杯からでも、気軽にどうぞ。
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center relative overflow-hidden">
              {/* Italian Flag Top Border */}
              <div className="absolute top-0 left-0 right-0 flex">
                <div className="flex-1 h-2 bg-green-600"></div>
                <div className="flex-1 h-2 bg-white"></div>
                <div className="flex-1 h-2 bg-red-600"></div>
              </div>
              <div className="inline-block p-4 bg-deep-green rounded-full mb-4 mt-2">
                <Award className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-deep-green mb-3">
                SPACE
              </h3>
              <p className="text-gray-600 mb-2 italic text-sm">Spazio Confortevole</p>
              <p className="text-gray-600 text-sm">
                雑多でにぎやかな、あのイタリアの夜を思い出せる空気感を目指して。
              </p>
            </div>
          </div>

          {/* Chef Section */}
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-xl relative overflow-hidden">
            {/* Italian Flag Top Border */}
            <div className="absolute top-0 left-0 right-0 flex">
              <div className="flex-1 h-3 bg-green-600"></div>
              <div className="flex-1 h-3 bg-white"></div>
              <div className="flex-1 h-3 bg-red-600"></div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-8 mt-4">
              <img
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=400"
                alt="Chef"
                className="w-48 h-48 rounded-full object-cover shadow-lg border-4 border-deep-green"
              />
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                  <ChefHat className="text-deep-green" size={28} />
                  <h3 className="text-3xl font-bold text-deep-green">
                    シェフ紹介
                  </h3>
                </div>
                <p className="text-wood-brown font-semibold mb-1 text-xl">
                  〇〇 〇〇
                </p>
                <p className="text-gray-500 italic mb-4">オーナーシェフ</p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  〇〇生まれ、〇〇育ちの〇〇 〇〇は、
                  伝統を尊重しながら革新的な料理を生み出します。
                </p>
                <p className="text-gray-600 italic">
                  「料理は情熱です。一皿一皿に物語があります」
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-deep-green text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            お待ちしております
          </h2>
          <p className="text-xl mb-8 font-light">
            本場のイタリアンホスピタリティを体験しにお越しください
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/access" className="btn-secondary inline-block">
              アクセス
            </a>
            <a
              href="https://www.hotpepper.jp/strJ004492742/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-block"
            >
              予約する
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
