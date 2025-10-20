import React, { useState } from 'react'
import { X, Camera } from 'lucide-react'

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  const images = [
    {
      url: '/haifame/images/front.jpeg',
      alt: 'Hai Fame? Restaurant Front',
      category: 'Restaurant',
    },
    {
      url: '/haifame/images/menu1.jpg',
      alt: 'Italian Vegetable Dish',
      category: 'Food',
    },
    {
      url: 'https://images.unsplash.com/photo-1595295333158-4742f28fbd85?q=80&w=800',
      alt: 'Fresh pasta dish',
      category: 'Food',
    },
    {
      url: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800',
      alt: 'Delicious pizza',
      category: 'Food',
    },
    {
      url: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?q=80&w=800',
      alt: 'Italian wine',
      category: 'Drinks',
    },
    {
      url: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=800',
      alt: 'Tiramisu dessert',
      category: 'Food',
    },
    {
      url: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800',
      alt: 'Cozy interior',
      category: 'Restaurant',
    },
    {
      url: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?q=80&w=800',
      alt: 'Fresh ingredients',
      category: 'Food',
    },
    {
      url: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=800',
      alt: 'Espresso coffee',
      category: 'Drinks',
    },
    {
      url: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?q=80&w=800',
      alt: 'Carbonara pasta',
      category: 'Food',
    },
    {
      url: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=800',
      alt: 'Margherita pizza',
      category: 'Food',
    },
    {
      url: 'https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?q=80&w=800',
      alt: 'Caprese salad',
      category: 'Food',
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="section-padding bg-deep-green text-white text-center">
        <div className="container-custom">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Camera size={48} />
            <h1 className="text-5xl md:text-6xl font-bold">ギャラリー</h1>
          </div>
          <p className="text-xl md:text-2xl mb-6 font-light italic">La Nostra Galleria</p>
          
          {/* Italian Flag Accent */}
          <div className="flex justify-center gap-2">
            <div className="w-20 h-2 bg-green-600"></div>
            <div className="w-20 h-2 bg-white"></div>
            <div className="w-20 h-2 bg-red-600"></div>
          </div>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="section-padding">
        <div className="container-custom">
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
            イタリアの伝統と日本のおもてなしが出会う、私たちの料理の世界をご覧ください
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer group aspect-square"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Italian Flag Corner */}
                <div className="absolute top-3 right-3 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-2 h-8 bg-green-600 shadow-lg"></div>
                  <div className="w-2 h-8 bg-white shadow-lg"></div>
                  <div className="w-2 h-8 bg-red-600 shadow-lg"></div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-deep-green via-transparent to-transparent opacity-0 group-hover:opacity-90 transition-all duration-300 flex items-end justify-center pb-6">
                  <div className="text-center">
                    <span className="text-white text-lg font-semibold block mb-1">
                      {image.alt}
                    </span>
                    <span className="text-warm-yellow text-sm italic">
                      {image.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-warm-yellow">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-deep-green mb-4">
            実際に味わってみませんか？
          </h2>
          <p className="text-gray-700 mb-8 text-lg">
            これらの美味しい料理をぜひお試しください！
          </p>
          <a href="/menu" className="btn-primary inline-block mr-4">
            メニューを見る
          </a>
          <a href="/access" className="btn-secondary inline-block">
            予約する
          </a>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-warm-yellow transition-colors z-10"
            onClick={() => setSelectedImage(null)}
          >
            <X size={40} />
          </button>
          
          {/* Italian Flag Border */}
          <div className="absolute top-0 left-0 right-0 flex">
            <div className="flex-1 h-3 bg-green-600"></div>
            <div className="flex-1 h-3 bg-white"></div>
            <div className="flex-1 h-3 bg-red-600"></div>
          </div>

          <div className="max-w-5xl w-full">
            <img
              src={selectedImage.url}
              alt={selectedImage.alt}
              className="w-full h-auto object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="text-center mt-4">
              <p className="text-white text-xl font-semibold">{selectedImage.alt}</p>
              <p className="text-warm-yellow italic">{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default GalleryPage
