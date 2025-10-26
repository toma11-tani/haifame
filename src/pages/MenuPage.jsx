import React from 'react'

const MenuPage = () => {
  const menuCategories = [
    {
      icon: '🍝',
      title: 'Pasta',
      subtitle: 'Le Nostre Paste',
      items: [
        {
          name: 'Carbonara',
          nameIt: 'Carbonara Classica',
          description: 'Classic Roman pasta with guanciale, egg, and pecorino',
          price: '¥1,400',
          image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?q=80&w=800',
        },
        {
          name: 'Amatriciana',
          nameIt: 'Amatriciana Tradizionale',
          description: 'Tomato sauce with guanciale and pecorino romano',
          price: '¥1,300',
          image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=800',
        },
        {
          name: 'Aglio e Olio',
          nameIt: 'Aglio, Olio e Peperoncino',
          description: 'Simple yet delicious garlic and olive oil pasta',
          price: '¥1,100',
          image: 'https://images.unsplash.com/photo-1627662168781-d324f2ee8889?q=80&w=800',
        },
      ],
    },
    {
      icon: '🍕',
      title: 'Pizza',
      subtitle: 'Le Nostre Pizze',
      items: [
        {
          name: 'Margherita',
          nameIt: 'Pizza Margherita',
          description: 'Fresh mozzarella, tomato sauce, and basil',
          price: '¥1,500',
          image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=800',
        },
        {
          name: 'Quattro Formaggi',
          nameIt: 'Pizza Quattro Formaggi',
          description: 'Four cheese blend on crispy thin crust',
          price: '¥1,700',
          image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800',
        },
        {
          name: 'Prosciutto e Rucola',
          nameIt: 'Pizza Prosciutto e Rucola',
          description: 'Parma ham and fresh arugula',
          price: '¥1,800',
          image: 'https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?q=80&w=800',
        },
      ],
    },
    {
      icon: '🥗',
      title: 'Antipasto',
      subtitle: 'I Nostri Antipasti',
      items: [
        {
          name: 'Caprese Salad',
          nameIt: 'Insalata Caprese',
          description: 'Fresh tomatoes, mozzarella, and basil',
          price: '¥900',
          image: 'https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?q=80&w=800',
        },
        {
          name: 'Bruschetta',
          nameIt: 'Bruschetta al Pomodoro',
          description: 'Toasted bread with tomatoes and garlic',
          price: '¥800',
          image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?q=80&w=800',
        },
        {
          name: 'Prosciutto Platter',
          nameIt: 'Tagliere di Prosciutto',
          description: 'Selection of Italian cured meats',
          price: '¥1,200',
          image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800',
        },
      ],
    },
    {
      icon: '🍷',
      title: 'Drinks',
      subtitle: 'Le Nostre Bevande',
      items: [
        {
          name: 'House Red Wine',
          nameIt: 'Vino Rosso della Casa',
          description: 'Italian red wine selection',
          price: '¥700/glass',
          image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=800',
        },
        {
          name: 'House White Wine',
          nameIt: 'Vino Bianco della Casa',
          description: 'Crisp Italian white wine',
          price: '¥700/glass',
          image: 'https://images.unsplash.com/photo-1547595628-c61a29f496f0?q=80&w=800',
        },
        {
          name: 'Espresso',
          nameIt: 'Caffè Espresso',
          description: 'Authentic Italian espresso',
          price: '¥400',
          image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=800',
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

          {menuCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-20">
              <div className="text-center mb-10">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <span className="text-5xl">{category.icon}</span>
                  <h2 className="text-4xl font-bold text-deep-green">{category.title}</h2>
                </div>
                <p className="text-wood-brown text-xl italic">{category.subtitle}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="bg-soft-cream rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                  >
                    <div className="h-48 overflow-hidden relative">
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
          <a href="/access" className="btn-primary inline-block">
            予約する
          </a>
        </div>
      </section>
    </div>
  )
}

export default MenuPage
