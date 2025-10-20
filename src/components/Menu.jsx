import React from 'react'

const Menu = () => {
  const menuCategories = [
    {
      icon: '🍝',
      title: 'Pasta',
      items: [
        {
          name: 'Carbonara',
          description: 'Classic Roman pasta with guanciale, egg, and pecorino',
          price: '¥1,400',
          image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?q=80&w=800',
        },
        {
          name: 'Amatriciana',
          description: 'Tomato sauce with guanciale and pecorino romano',
          price: '¥1,300',
          image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=800',
        },
        {
          name: 'Aglio e Olio',
          description: 'Simple yet delicious garlic and olive oil pasta',
          price: '¥1,100',
          image: 'https://images.unsplash.com/photo-1627662168781-d324f2ee8889?q=80&w=800',
        },
      ],
    },
    {
      icon: '🍕',
      title: 'Pizza',
      items: [
        {
          name: 'Margherita',
          description: 'Fresh mozzarella, tomato sauce, and basil',
          price: '¥1,500',
          image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=800',
        },
        {
          name: 'Quattro Formaggi',
          description: 'Four cheese blend on crispy thin crust',
          price: '¥1,700',
          image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800',
        },
        {
          name: 'Prosciutto e Rucola',
          description: 'Parma ham and fresh arugula',
          price: '¥1,800',
          image: 'https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?q=80&w=800',
        },
      ],
    },
    {
      icon: '🥗',
      title: 'Antipasto',
      items: [
        {
          name: 'Caprese Salad',
          description: 'Fresh tomatoes, mozzarella, and basil',
          price: '¥900',
          image: 'https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?q=80&w=800',
        },
        {
          name: 'Bruschetta',
          description: 'Toasted bread with tomatoes and garlic',
          price: '¥800',
          image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?q=80&w=800',
        },
        {
          name: 'Prosciutto Platter',
          description: 'Selection of Italian cured meats',
          price: '¥1,200',
          image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800',
        },
      ],
    },
    {
      icon: '🍷',
      title: 'Drinks',
      items: [
        {
          name: 'House Red Wine',
          description: 'Italian red wine selection',
          price: '¥700/glass',
          image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=800',
        },
        {
          name: 'House White Wine',
          description: 'Crisp Italian white wine',
          price: '¥700/glass',
          image: 'https://images.unsplash.com/photo-1547595628-c61a29f496f0?q=80&w=800',
        },
        {
          name: 'Espresso',
          description: 'Authentic Italian espresso',
          price: '¥400',
          image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=800',
        },
      ],
    },
  ]

  return (
    <section id="menu" className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-deep-green mb-4">
          Our Menu
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Discover authentic Italian flavors made with love and local ingredients
        </p>

        {menuCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16">
            <h3 className="text-3xl font-bold text-wood-brown mb-8 flex items-center justify-center gap-3">
              <span className="text-4xl">{category.icon}</span>
              {category.title}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="bg-soft-cream rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-semibold text-deep-green">
                        {item.name}
                      </h4>
                      <span className="text-wood-brown font-bold">
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
  )
}

export default Menu
