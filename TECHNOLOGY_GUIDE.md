# 🍝 Hai Fame? - 使用技術ガイド（初心者向け）

このドキュメントでは、このウェブサイトで使われている技術を初心者の方にもわかりやすく説明します。

---

## 📚 目次

1. [使用技術の概要](#使用技術の概要)
2. [各技術の詳しい説明](#各技術の詳しい説明)
3. [プロジェクト構造](#プロジェクト構造)
4. [なぜこれらの技術を使うのか](#なぜこれらの技術を使うのか)

---

## 使用技術の概要

このウェブサイトは以下の技術で構築されています：

| 技術 | 役割 | 例え |
|------|------|------|
| **React** | ウェブサイトの基盤 | 家の骨組み |
| **Vite** | 開発環境 | 工事現場の道具箱 |
| **React Router** | ページ遷移 | 家の中の廊下・ドア |
| **Tailwind CSS** | デザイン | 家の内装・装飾 |
| **Lucide React** | アイコン | 看板やピクトグラム |
| **JavaScript (JSX)** | プログラミング言語 | 設計図の言語 |

---

## 各技術の詳しい説明

### 1. **React（リアクト）**

**何ができる？**
- ウェブサイトを「部品」に分けて作れる
- 画面の一部だけを更新できる（ページ全体を読み込まない）
- 再利用可能なコンポーネントを作れる

**例え話：**
レゴブロックのように、小さな部品（コンポーネント）を組み合わせて大きなウェブサイトを作ります。

**このサイトでの使用例：**
```javascript
// Navbar（ナビゲーションバー）という部品
function Navbar() {
  return (
    <nav>
      <Link to="/">ホーム</Link>
      <Link to="/menu">メニュー</Link>
    </nav>
  )
}
```

**メリット：**
- ✅ 部品を再利用できるので効率的
- ✅ 変更が簡単（1箇所直せば全体に反映）
- ✅ 世界中で使われている人気の技術

---

### 2. **Vite（ヴィート）**

**何ができる？**
- 開発中のサイトを高速で表示
- コードを保存すると自動で画面が更新される
- 本番用のファイルを最適化して作成

**例え話：**
料理を作るときの「電子レンジ」のようなもの。すぐに温まって、すぐに結果が見られます。

**このサイトでの使用：**
```bash
npm run dev  # 開発サーバーを起動（すぐに確認できる）
npm run build  # 本番用ファイルを作成（公開用）
```

**メリット：**
- ⚡ とにかく速い！
- ✅ 保存すると即座に反映
- ✅ 設定が簡単

---

### 3. **React Router（リアクト ルーター）**

**何ができる？**
- 複数のページを作れる
- URLに応じて違う画面を表示
- ページ遷移がスムーズ（ページ全体を読み込まない）

**例え話：**
家の中の「廊下」や「ドア」。各部屋（ページ）に移動できます。

**このサイトでの使用例：**
```javascript
<Routes>
  <Route path="/" element={<HomePage />} />        {/* トップページ */}
  <Route path="/menu" element={<MenuPage />} />    {/* メニューページ */}
  <Route path="/about" element={<AboutPage />} />  {/* 私たちについて */}
</Routes>
```

**URL構造：**
- `http://localhost:3000/` → ホームページ
- `http://localhost:3000/menu` → メニューページ
- `http://localhost:3000/about` → 私たちについて
- `http://localhost:3000/gallery` → ギャラリー
- `http://localhost:3000/access` → アクセス・予約

---

### 4. **Tailwind CSS（テイルウィンド CSS）**

**何ができる？**
- HTMLに直接スタイルを書ける
- 事前に用意されたクラス名を使うだけでデザインできる
- レスポンシブデザイン（スマホ対応）が簡単

**例え話：**
服を選ぶときの「コーディネートアプリ」。組み合わせを選ぶだけでおしゃれになります。

**このサイトでの使用例：**
```javascript
<button className="bg-deep-green text-white px-6 py-3 rounded-lg hover:bg-wood-brown">
  予約する
</button>
```

**クラス名の意味：**
- `bg-deep-green` → 背景色を深緑に
- `text-white` → 文字色を白に
- `px-6 py-3` → 左右に6、上下に3の余白
- `rounded-lg` → 角を丸く
- `hover:bg-wood-brown` → マウスを乗せたら茶色に

**カスタムカラー（このサイト専用）：**
```javascript
colors: {
  'deep-green': '#2d5016',    // 深い緑（イタリア国旗の緑）
  'warm-yellow': '#f4e5c3',   // 温かい黄色
  'wood-brown': '#8b4513',    // 木の茶色
  'soft-cream': '#faf8f3',    // クリーム色
}
```

---

### 5. **Lucide React（ルシード リアクト）**

**何ができる？**
- 美しいアイコンを簡単に使える
- サイズや色を自由に変更できる

**例え話：**
絵文字やピクトグラムのセット。必要なものを選んで使えます。

**このサイトでの使用例：**
```javascript
import { Heart, Users, Award, Camera, MapPin } from 'lucide-react'

<Heart size={32} className="text-white" />      {/* ハートマーク */}
<Camera size={48} />                            {/* カメラアイコン */}
<MapPin className="text-wood-brown" size={24} /> {/* 地図ピン */}
```

**使用しているアイコン：**
- 🍴 `UtensilsCrossed` - フォークとナイフ
- 📖 `BookOpen` - 本
- 📷 `Camera` - カメラ
- 📍 `MapPin` - 地図ピン
- 🕐 `Clock` - 時計
- 📞 `Phone` - 電話
- ✉️ `Mail` - メール
- ❤️ `Heart` - ハート
- 👥 `Users` - ユーザー
- 🏆 `Award` - 賞

---

### 6. **JavaScript / JSX**

**何ができる？**
- ウェブサイトに動きをつける
- ユーザーの操作に反応する
- データを処理する

**JSXとは？**
JavaScriptの中にHTMLのような書き方ができる特別な記法です。

**例：**
```javascript
// 普通のJavaScript
const name = "Hai Fame?"

// JSX（HTMLっぽく書ける）
return (
  <h1>ようこそ {name} へ</h1>
)
```

---

## プロジェクト構造

```
Haifame/
├── public/              # 公開ファイル（画像など）
│   └── images/         # 画像フォルダ
│       ├── front.jpeg  # お店の外観
│       └── menu1.jpg   # メニュー写真
│
├── src/                # ソースコード（メインの作業場所）
│   ├── components/     # 再利用可能な部品
│   │   ├── Navbar.jsx      # ナビゲーションバー
│   │   ├── Footer.jsx      # フッター
│   │   └── ...
│   │
│   ├── pages/          # 各ページ
│   │   ├── HomePage.jsx    # トップページ
│   │   ├── MenuPage.jsx    # メニューページ
│   │   ├── AboutPage.jsx   # 私たちについて
│   │   ├── GalleryPage.jsx # ギャラリー
│   │   └── AccessPage.jsx  # アクセス・予約
│   │
│   ├── App.jsx         # アプリのメイン（ルーティング設定）
│   ├── main.jsx        # エントリーポイント（起動地点）
│   └── index.css       # グローバルスタイル
│
├── index.html          # HTMLのベース
├── package.json        # プロジェクト設定・依存関係
├── vite.config.js      # Viteの設定
├── tailwind.config.js  # Tailwindの設定（カスタムカラーなど）
└── postcss.config.js   # CSSの処理設定
```

---

## なぜこれらの技術を使うのか

### 🚀 **速度**
- Viteで開発が高速
- Reactで必要な部分だけ更新

### 🔧 **メンテナンス性**
- コンポーネントで部品化
- 1箇所直せば全体に反映

### 📱 **レスポンシブ**
- Tailwind CSSで簡単にスマホ対応
- どんな画面サイズでも美しく表示

### 🎨 **デザインの自由度**
- Tailwind CSSで細かいカスタマイズ
- イタリア国旗カラーなど独自デザイン

### 🌐 **SEO・パフォーマンス**
- 最適化されたコード
- 高速な読み込み

### 👥 **コミュニティ**
- 人気の技術なので情報が豊富
- 困ったときに調べやすい

---

## 学習リソース

### React
- [公式チュートリアル（日本語）](https://ja.react.dev/learn)
- [React入門 - Qiita](https://qiita.com/tags/react)

### Tailwind CSS
- [公式ドキュメント](https://tailwindcss.com/docs)
- [Tailwind CSS入門](https://zenn.dev/topics/tailwindcss)

### JavaScript
- [MDN Web Docs（日本語）](https://developer.mozilla.org/ja/docs/Web/JavaScript)
- [JavaScript Primer](https://jsprimer.net/)

---

## よくある質問

**Q: プログラミング初心者でも編集できますか？**
A: はい！次の「取扱説明書」を見れば、テキストや画像の変更は簡単にできます。

**Q: どのファイルを編集すればいいですか？**
A: 主に `src/pages/` フォルダ内のファイルを編集します。詳しくは取扱説明書をご覧ください。

**Q: 間違えて壊してしまったら？**
A: Git（バージョン管理）を使えば元に戻せます。または、バックアップを取っておきましょう。

**Q: もっと機能を追加したい場合は？**
A: 新しいコンポーネントやページを追加できます。取扱説明書の「カスタマイズ」セクションを参照してください。

---

**次は「USER_MANUAL.md」（取扱説明書）を読んで、実際に編集してみましょう！** 🎉
