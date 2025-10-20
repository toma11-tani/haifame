import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

const Footer = () => {
  const navLinks = [
    { path: '/', label: 'ホーム' },
    { path: '/menu', label: 'メニュー' },
    { path: '/about', label: '私たちについて' },
    { path: '/gallery', label: 'ギャラリー' },
    { path: '/access', label: 'アクセス・予約' },
  ]

  return (
    <footer className="bg-deep-green text-white py-12 relative overflow-hidden">
      {/* Italian Flag Top Border */}
      <div className="absolute top-0 left-0 right-0 flex">
        <div className="flex-1 h-2 bg-green-600"></div>
        <div className="flex-1 h-2 bg-white"></div>
        <div className="flex-1 h-2 bg-red-600"></div>
      </div>
      
      <div className="container-custom px-4 mt-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-2">Hai Fame?</h3>
            <p className="text-warm-yellow italic mb-2">
              お腹が空きましたか?
            </p>
            <p className="text-gray-300 text-sm">
              路地裏の小さな本格イタリアン
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">クイックリンク</h4>
            <p className="text-xs text-gray-400 mb-3 italic">Collegamenti Rapidi</p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-warm-yellow hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">フォローしてください</h4>
            <p className="text-xs text-gray-400 mb-3 italic">Seguici</p>
            <div className="flex gap-4 mb-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-warm-yellow hover:text-white transition-colors hover:scale-110 transform"
              >
                <Instagram size={28} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-warm-yellow hover:text-white transition-colors hover:scale-110 transform"
              >
                <Facebook size={28} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-warm-yellow hover:text-white transition-colors hover:scale-110 transform"
              >
                <Twitter size={28} />
              </a>
            </div>
            <p className="text-sm text-gray-300">
              📍 東京都渋谷区<br />
              📞 03-1234-5678
            </p>
          </div>
        </div>

        <div className="border-t border-warm-yellow pt-6 text-center">
          <p className="text-warm-yellow mb-2">
            © {new Date().getFullYear()} Hai Fame? - All rights reserved.
          </p>
          <p className="text-xs text-gray-400 italic">
            愛情を込めて ❤️ Fatto con amore
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
