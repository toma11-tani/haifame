import React from 'react'
import { Link } from 'react-router-dom'
import { UtensilsCrossed, Home, Sparkles, History } from 'lucide-react'

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="section-padding bg-deep-green text-white text-center">
        <div className="container-custom">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">About</h1>
          <p className="text-xl md:text-2xl mb-6 font-light italic">La Nostra Storia</p>
          <div className="flex justify-center gap-2">
            <div className="w-20 h-2 bg-green-600"></div>
            <div className="w-20 h-2 bg-white"></div>
            <div className="w-20 h-2 bg-red-600"></div>
          </div>
        </div>
      </section>

      {/* Concept */}
      <section className="section-padding bg-warm-yellow">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-deep-green mb-6">Hai fame?</h2>
              <p className="text-gray-700 mb-4 leading-relaxed text-sm md:text-base">
                「お腹空いてる？」<br className="md:hidden" />——これがお店の名前の意味です。<br />「食堂」のような雰囲気のお店を目指しています。
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed text-sm md:text-base">
                常連も、初めての人も。ひとりでも、大勢でも。<br />
                誰でも気楽に食べて、飲んで、くつろげる場所に。
              </p>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                肩肘張らずに、ふらっと立ち寄ってください。
              </p>
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

      {/* こだわり */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-deep-green text-center mb-12">
            大切にしていること
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* 郷土料理 */}
            <div className="bg-soft-cream p-8 rounded-lg shadow-md relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 flex">
                <div className="flex-1 h-2 bg-green-600"></div>
                <div className="flex-1 h-2 bg-white"></div>
                <div className="flex-1 h-2 bg-red-600"></div>
              </div>
              <div className="flex items-center gap-3 mb-4 mt-2">
                <div className="p-3 bg-deep-green rounded-full">
                  <UtensilsCrossed className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-deep-green">郷土料理の提供</h3>
                  <p className="text-wood-brown italic text-sm">Cucina Regionale</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                化学調味料（味の素・コンソメ等）は使いません。素材そのものの味を大切に、素朴で滋味深い一皿を。
              </p>
              <p className="text-gray-700 leading-relaxed">
                有名な料理だけでなく、少しマイナーなイタリアの郷土料理もメニューに加えています。食べ飽きない発見を、毎回お届けしたい。
              </p>
            </div>

            {/* イタリアの家 */}
            <div className="bg-soft-cream p-8 rounded-lg shadow-md relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 flex">
                <div className="flex-1 h-2 bg-green-600"></div>
                <div className="flex-1 h-2 bg-white"></div>
                <div className="flex-1 h-2 bg-red-600"></div>
              </div>
              <div className="flex items-center gap-3 mb-4 mt-2">
                <div className="p-3 bg-wood-brown rounded-full">
                  <Home className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-deep-green">イタリアの家</h3>
                  <p className="text-wood-brown italic text-sm">Casa Italiana</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                イタリアの家をイメージしたお店づくりを心がけています。黄色い壁もそのひとつ。雑多でにぎやかで、でもどこか温かい。あのイタリアの夜の空気を、大阪で。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 初体験の提供 */}
      <section className="section-padding bg-deep-green text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-warm-yellow rounded-full">
                <Sparkles className="text-deep-green" size={32} />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">初体験の提供</h2>
            <p className="text-warm-yellow italic mb-8">Prima Esperienza</p>
            <p className="text-gray-200 leading-relaxed text-sm md:text-base mb-4">
              「初めて食べた」「こんな組み合わせがあるんだ」——
            </p>
            <p className="text-gray-200 leading-relaxed text-sm md:text-base mb-4">
              地元のワインと地元の料理。シンプルだけど、出会ったことのない味わい。
            </p>
            <p className="text-gray-200 leading-relaxed text-sm md:text-base">
              高くなくていい。でも確かな「初めて」に出会える場所を目指しています。
            </p>
          </div>
        </div>
      </section>

      {/* 創業の思い */}
      <section className="section-padding bg-warm-yellow">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-deep-green rounded-full">
                <History className="text-white" size={24} />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-deep-green">創業の思い</h2>
                <p className="text-wood-brown italic text-sm">La Nostra Storia</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 flex">
                <div className="flex-1 h-2 bg-green-600"></div>
                <div className="flex-1 h-2 bg-white"></div>
                <div className="flex-1 h-2 bg-red-600"></div>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base mb-6 mt-2">
                2〜3年前にイタリアを訪れたとき、忘れられない体験をしました。しゃべりながらわいわいと、雑多な活気の中で、地元の料理と地元のワインを楽しむ——日本ではなかなか出会えない雰囲気でした。
              </p>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                「この感覚を大阪で再現したい。お客様にも体験してほしい。」<br />
                それが、Hai fame? を始めた理由です。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-deep-green mb-4">
            Hai fame?
          </h2>
          <p className="text-gray-700 mb-8 text-sm md:text-base">
            ふらっとお立ち寄りください。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/access" className="btn-secondary inline-block">
              アクセス
            </Link>
            <a
              href="https://www.hotpepper.jp/strJ004492742/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block"
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
