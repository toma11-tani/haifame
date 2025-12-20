import React from 'react'

const MenuPage = () => {
  const menuCategories = [
    {
      icon: '🍝',
      title: 'Signature',
      subtitle: 'I Nostri Piatti',
      items: [
        {
          name: 'ポルペッティ（肉団子）',
          nameIt: 'Polpette',
          description: 'しっかり食べごたえのある一皿。素朴で滋味深い味わいです。',
          price: '¥1,400',
          image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?q=80&w=800',
        },
        {
          name: '前菜盛り',
          nameIt: 'Antipasti Misti',
          description: 'イタリアのお惣菜を少しずつ。野菜中心で素材の味を楽しめます。',
          price: '¥1,200',
          image: 'https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?q=80&w=800',
        },
        {
          name: 'パスタ',
          nameIt: 'Pasta del Giorno',
          description: 'その日食べたい“気分”に合わせて。おなかいっぱい食べてほしいパスタです。',
          price: '¥1,100',
          image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=800',
        },
        {
          name: '自家製パン（フォカッチャ／カラッリ）',
          nameIt: 'Pane Fatto in Casa',
          description: '毎日焼くパン。食前酒の一杯と一緒にどうぞ。',
          price: '¥800',
          image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?q=80&w=800',
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="section-padding bg-deep-green text-white text-center">
        <div className="container-custom">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Menu</h1>
          <p className="text-xl md:text-2xl mb-6 font-light italic">Il Nostro Menu</p>
          
          {/* Italian Flag Accent */}
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
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto text-lg">
            愛情と最高の地元食材で作る本格イタリアンの味わいをお楽しみください
          </p>
          <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto text-lg">
            迷ったら「前菜盛り → 一品 → パスタ → デザート」。<br />
            まずは食前酒の一杯から、気軽にどうぞ。
          </p>

          {menuCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-20">
              <div className="text-center mb-10">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <span className="text-5xl">{category.icon}</span>
                  <h2 className="text-4xl font-bold text-deep-green">{category.title}</h2>
                </div>
                <p className="text-wood-brown text-xl italic">{category.subtitle}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="bg-soft-cream rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                  >
                    <div className="overflow-hidden relative aspect-[4/3]">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                      {/* Italian Flag Corner */}
                      <div className="absolute top-2 right-2 flex gap-1">
                        <div className="w-2 h-6 bg-green-600"></div>
                        <div className="w-2 h-6 bg-white"></div>
                        <div className="w-2 h-6 bg-red-600"></div>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="text-xl font-semibold text-deep-green">
                            {item.name}
                          </h3>
                          <p className="text-sm text-wood-brown italic">{item.nameIt}</p>
                        </div>
                        <span className="text-wood-brown font-bold text-lg">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <p className="text-center text-gray-600 mt-8 mb-4 text-sm">
            ※メニューは季節や仕入れで変わります。詳しくは店内メニューでご案内します。
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-warm-yellow">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-deep-green mb-4">
            お腹すいてる？
          </h2>
          <p className="text-gray-700 mb-8 text-lg">
            本場のイタリアンを味わいにお越しください！
          </p>
          <a
            href="https://www.hotpepper.jp/strJ004492742/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-block"
          >
            予約する
          </a>
        </div>
      </section>
    </div>
  )
}

export default MenuPage
