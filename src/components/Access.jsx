import React, { useState } from 'react'
import { MapPin, Clock, Phone, Mail } from 'lucide-react'

const Access = () => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    guests: '2',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('予約リクエストを受け付けました。後ほどご連絡いたします。')
    setFormData({ name: '', date: '', time: '', guests: '2' })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="access" className="section-padding bg-warm-yellow">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-deep-green mb-4">
          Access & Reservation
        </h2>
        <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
          Visit us or make a reservation
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
              <h3 className="text-2xl font-bold text-deep-green mb-6">
                Contact Information
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="text-wood-brown flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-deep-green mb-1">Address</h4>
                    <p className="text-gray-700">
                      1-2-3 Alleyway Street<br />
                      Shibuya-ku, Tokyo 150-0001<br />
                      Japan
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="text-wood-brown flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-deep-green mb-1">Opening Hours</h4>
                    <p className="text-gray-700">
                      Lunch: 11:30 - 14:30<br />
                      Dinner: 18:00 - 22:00<br />
                      Closed: Mondays
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="text-wood-brown flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-deep-green mb-1">Phone</h4>
                    <p className="text-gray-700">03-1234-5678</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="text-wood-brown flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-deep-green mb-1">Email</h4>
                    <p className="text-gray-700">info@haifame.jp</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.747389438!2d139.70108!3d35.66174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b563b00109f%3A0x337328def1e2ab26!2sShibuya%2C%20Tokyo!5e0!3m2!1sen!2sjp!4v1234567890"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded"
              ></iframe>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-deep-green mb-6">
              Make a Reservation
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-deep-green"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="date" className="block text-gray-700 font-medium mb-2">
                  Date *
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-deep-green"
                />
              </div>

              <div>
                <label htmlFor="time" className="block text-gray-700 font-medium mb-2">
                  Time *
                </label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-deep-green"
                />
              </div>

              <div>
                <label htmlFor="guests" className="block text-gray-700 font-medium mb-2">
                  Number of Guests *
                </label>
                <select
                  id="guests"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-deep-green"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? 'person' : 'people'}
                    </option>
                  ))}
                </select>
              </div>

              <button type="submit" className="btn-primary w-full text-lg">
                Reserve Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Access
