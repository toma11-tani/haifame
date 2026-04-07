import React from 'react'

const menuItems = [
  {
    name: '前菜盛り',
    nameIt: 'Antipasti Misti',
    category: '前菜',
    categoryIt: 'Antipasto',
    description: 'イタリアの前菜を少しずつ。ボリュームたっぷり。',
    image: '/images/antipasti.jpg',
  },
  {
    name: 'ポルペッティ（肉団子）',
    nameIt: 'Polpette',
    category: '一品',
    categoryIt: 'Piatto',
    description: 'しっかり食べごたえのある一皿。素朴で滋味深い味わいです。',
    image: '/images/Polpette.jpg',
  },
  {
    name: 'パスタ',
    nameIt: 'Pasta del Giorno',
    category: 'パスタ',
    categoryIt: 'Pasta',
    description: 'その日食べたい"気分"に合わせて。おなかいっぱい食べてほしいパスタです。',
    image: '/images/pasta.jpg',
  },
  {
    name: 'ドルチェ（日替わり）',
    nameIt: 'Dolce del Giorno',
    category: 'ドルチェ',
    categoryIt: 'Dolce',
    description: 'その日のおすすめを。店内のボードでご確認ください。',
    image: '/images/dolci.jpg',
  },
  {
    name: '自家製レモンチェッロのソーダ割り',
    nameIt: 'Limoncello Soda',
    category: 'ドリンク',
    categoryIt: 'Drink',
    description: '自家製ならではのさわやかな香り。食前・食中どちらにも。',
    image: '/images/drink.jpg',
  },
]

const MenuPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="section-padding bg-deep-green text-white text-center">
        <div className="container-custom">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Menu</h1>
          <p className="text-xl md:text-2xl mb-6 font-light italic">Il Nostro Menu</p>
          <div className="flex justify-center gap-2">
            <div className="w-20 h-2 bg-green-600"></div>
            <div className="w-20 h-2 bg-white"></div>
            <div className="w-20 h-2 bg-red-600"></div>
          </div>
        </div>
      </section>

      {/* Menu Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="bg-soft-cream rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="overflow-hidden relative aspect-square">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute bottom-2 left-2 bg-deep-green bg-opacity-80 text-white text-xs px-2 py-1 rounded">
                    {item.category} / <span className="italic">{item.categoryIt}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-deep-green mb-1">
                    {item.name}
                  </h3>
                  <p className="text-sm text-wood-brown italic mb-3">{item.nameIt}</p>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}

            {/* 本日のおすすめカード */}
            <div className="bg-soft-cream rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative">
              <div className="overflow-hidden relative aspect-square">
                <img
                  src="/images/menu.JPG"
                  alt="本日のおすすめボード"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute bottom-2 left-2 bg-deep-green bg-opacity-80 text-white text-xs px-2 py-1 rounded">
                  本日のおすすめ / <span className="italic">Il Giorno</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-deep-green mb-1">本日のおすすめ</h3>
                <p className="text-sm text-wood-brown italic mb-3">Il Piatto del Giorno</p>
                <p className="text-gray-600 text-sm">その日の仕入れで変わる一品。店内のボードでご確認ください。</p>
              </div>
            </div>
          </div>
          <p className="text-center text-gray-700 mt-10 mb-2 text-base">
            迷ったら、前菜盛り・一品・パスタ・ドルチェの順でお楽しみください。<br />
            まずは一杯から、気軽にどうぞ。
          </p>
          <p className="text-center text-gray-400 mt-2 text-sm">
            ※メニューは季節や仕入れによって変わります。
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-warm-yellow">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-deep-green mb-4">
            Hai fame?
          </h2>
          <p className="text-gray-700 mb-8 text-base">
            ふらっとお立ち寄りください。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/haifame/access" className="btn-secondary inline-block">
              アクセス
            </a>
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

export default MenuPage
