import React from 'react'
import { MapPin, Clock, Phone, Mail, ExternalLink } from 'lucide-react'

const AccessPage = () => {
  return (
    <div className="min-h-screen bg-warm-yellow">
      {/* Header */}
      <section className="section-padding bg-deep-green text-white text-center">
        <div className="container-custom">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Access</h1>
          <p className="text-xl md:text-2xl mb-6 font-light italic">Vieni a Trovarci</p>
          
          {/* Italian Flag Accent */}
          <div className="flex justify-center gap-2">
            <div className="w-20 h-2 bg-green-600"></div>
            <div className="w-20 h-2 bg-white"></div>
            <div className="w-20 h-2 bg-red-600"></div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <div className="bg-white p-8 rounded-lg shadow-xl mb-8 relative overflow-hidden">
                {/* Italian Flag Top Border */}
                <div className="absolute top-0 left-0 right-0 flex">
                  <div className="flex-1 h-3 bg-green-600"></div>
                  <div className="flex-1 h-3 bg-white"></div>
                  <div className="flex-1 h-3 bg-red-600"></div>
                </div>

                <h2 className="text-3xl font-bold text-deep-green mb-6 mt-2">
                  店舗情報
                </h2>
                <p className="text-gray-600 mb-6 italic text-sm">Informazioni di Contatto</p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 bg-soft-cream rounded-lg hover:shadow-md transition-shadow">
                    <MapPin className="text-wood-brown flex-shrink-0 mt-1" size={28} />
                    <div>
                      <h3 className="font-semibold text-deep-green mb-1 text-lg">住所</h3>
                      <p className="text-gray-700">
                        大阪府大阪市北区浪花町9-9 1F
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-soft-cream rounded-lg hover:shadow-md transition-shadow">
                    <Clock className="text-wood-brown flex-shrink-0 mt-1" size={28} />
                    <div>
                      <h3 className="font-semibold text-deep-green mb-1 text-lg">営業時間</h3>
                      <p className="text-gray-700">
                        <span className="font-medium"></span> 16:00〜24:00（L.O 23:00）<br />
                        <span className="font-medium text-red-600">定休日:</span> 月曜日
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-soft-cream rounded-lg hover:shadow-md transition-shadow">
                    <Phone className="text-wood-brown flex-shrink-0 mt-1" size={28} />
                    <div>
                      <h3 className="font-semibold text-deep-green mb-1 text-lg">電話番号</h3>
                      <p className="text-gray-700 text-lg">070-8597-4322</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-soft-cream rounded-lg hover:shadow-md transition-shadow">
                    <Mail className="text-wood-brown flex-shrink-0 mt-1" size={28} />
                    <div>
                      <h3 className="font-semibold text-deep-green mb-1 text-lg">Email</h3>
                      <p className="text-gray-700">info@〇〇.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="bg-white p-4 rounded-lg shadow-xl relative overflow-hidden">
                {/* Italian Flag Top Border */}
                <div className="absolute top-0 left-0 right-0 flex">
                  <div className="flex-1 h-2 bg-green-600"></div>
                  <div className="flex-1 h-2 bg-white"></div>
                  <div className="flex-1 h-2 bg-red-600"></div>
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3279.8803031929206!2d135.50775077617973!3d34.708198872917116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e72b1b4aa2a1%3A0xd93bd94105e5bba3!2sHai%20fame%3F!5e0!3m2!1sen!2sjp!4v1761462861063!5m2!1sen!2sjp"
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded mt-2"
                ></iframe>
              </div>
            </div>

            {/* External Links */}
            <div className="bg-white p-8 rounded-lg shadow-xl relative overflow-hidden">
              {/* Italian Flag Top Border */}
              <div className="absolute top-0 left-0 right-0 flex">
                <div className="flex-1 h-3 bg-green-600"></div>
                <div className="flex-1 h-3 bg-white"></div>
                <div className="flex-1 h-3 bg-red-600"></div>
              </div>

              <div className="flex items-center gap-3 mb-2 mt-2">
                <ExternalLink className="text-deep-green" size={32} />
                <h2 className="text-3xl font-bold text-deep-green">
                  ご案内
                </h2>
              </div>
              <p className="text-gray-600 mb-6 italic text-sm">Link Esterni</p>

              <div className="space-y-6">
                <div className="bg-soft-cream rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className="p-6 text-center">
                    <h3 className="text-2xl font-bold text-deep-green mb-3">Hotpepper</h3>
                    <p className="text-gray-700 mb-6">公式ページで空席状況とご予約を承ります。</p>
                    <a
                      href="https://www.hotpepper.jp/strJ004492742/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary inline-block"
                    >
                      Hotpepperを開く
                    </a>
                  </div>
                </div>

                <div className="bg-soft-cream rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className="p-6 text-center">
                    <h3 className="text-2xl font-bold text-deep-green mb-3">食べログ</h3>
                    <p className="text-gray-700 mb-6">レビューや写真はこちらからご覧ください。</p>
                    <a
                      href="https://tabelog.com/osaka/A2701/A270103/27152494/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary inline-block"
                    >
                      食べログを開く
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="section-padding bg-deep-green text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            お待ちしております
          </h2>
          <p className="text-xl mb-8 font-light">
            Hai fame?で皆様をお迎えできることを楽しみにしております
          </p>
          <div className="flex justify-center gap-2">
            <div className="w-24 h-2 bg-green-600"></div>
            <div className="w-24 h-2 bg-white"></div>
            <div className="w-24 h-2 bg-red-600"></div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AccessPage
