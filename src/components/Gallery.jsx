import React, { useState } from 'react'
import { X } from 'lucide-react'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  const images = [
    {
      url: '/haifame/images/front.jpeg',
      alt: 'Hai Fame? Restaurant Front',
    },
    {
      url: '/haifame/images/menu1.jpg',
      alt: 'Italian Vegetable Dish',
    },
    {
      url: 'https://images.unsplash.com/photo-1595295333158-4742f28fbd85?q=80&w=800',
      alt: 'Fresh pasta dish',
    },
    {
      url: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800',
      alt: 'Delicious pizza',
    },
    {
      url: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?q=80&w=800',
      alt: 'Italian wine',
    },
    {
      url: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=800',
      alt: 'Tiramisu dessert',
    },
    {
      url: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800',
      alt: 'Cozy interior',
    },
    {
      url: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?q=80&w=800',
      alt: 'Fresh ingredients',
    },
    {
      url: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=800',
      alt: 'Espresso coffee',
    },
  ]

  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-deep-green mb-4">
          Gallery
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          A glimpse into our culinary world
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group aspect-square"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-deep-green bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <span className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  View
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-warm-yellow transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={40} />
          </button>
          <img
            src={selectedImage.url}
            alt={selectedImage.alt}
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}

export default Gallery
