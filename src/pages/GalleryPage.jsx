import React, { useEffect } from 'react'
import { Instagram } from 'lucide-react'

// Beholdウィジェット設定
// セットアップ手順:
// 1. https://behold.so にアクセスしてアカウント作成
// 2. Instagramアカウント（クリエイター/ビジネス）を連携
// 3. ウィジェットを作成してIDを取得
// 4. 下記 BEHOLD_WIDGET_ID を取得したIDに変更するだけでOK
const BEHOLD_WIDGET_ID = '' // 例: 'AbCdEfGhIjKlMnOp'

const INSTAGRAM_URL = 'https://www.instagram.com/haifame_taira/'

const GalleryPage = () => {
  useEffect(() => {
    if (!BEHOLD_WIDGET_ID) return
    const script = document.createElement('script')
    script.src = 'https://w.behold.so/widget.js'
    script.type = 'module'
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="section-padding bg-deep-green text-white text-center">
        <div className="container-custom">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Gallery</h1>
          <p className="text-xl md:text-2xl mb-6 font-light italic">La Nostra Galleria</p>
          <div className="flex justify-center gap-2">
            <div className="w-20 h-2 bg-green-600"></div>
            <div className="w-20 h-2 bg-white"></div>
            <div className="w-20 h-2 bg-red-600"></div>
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex items-center justify-center gap-2 mb-8">
            <Instagram className="text-deep-green" size={22} />
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-deep-green font-medium hover:text-wood-brown transition-colors"
            >
              @haifame_taira
            </a>
          </div>

          {BEHOLD_WIDGET_ID ? (
            <div id={`behold-widget-${BEHOLD_WIDGET_ID}`}></div>
          ) : (
            <div className="text-center py-20">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-col items-center gap-4 text-gray-400 hover:text-deep-green transition-colors"
              >
                <Instagram size={64} />
                <span className="text-lg">Instagramで最新の投稿を見る</span>
              </a>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-warm-yellow">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-deep-green mb-4">
            Hai fame?
          </h2>
          <p className="text-gray-700 mb-8 text-lg">
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

export default GalleryPage
