# 🍝 Hai Fame? - イタリアンレストラン ウェブサイト

路地裏の小さな本格イタリアン「Hai Fame?」のスタイリッシュで居心地の良いウェブサイトです。

---

## 📖 ドキュメント

初心者の方でも安心して編集できるよう、詳しいガイドを用意しています：

- **[🚀 クイックスタート](./QUICK_START.md)** - すぐに始めたい方向け（3分で読める）
- **[📚 技術ガイド](./TECHNOLOGY_GUIDE.md)** - 使用技術の詳しい説明（初心者向け）
- **[📖 取扱説明書](./USER_MANUAL.md)** - 編集方法の完全ガイド

---

## ✨ 特徴

- 🎨 モダンでレスポンシブなデザイン（スマホ対応）
- 🍝 カテゴリ別メニュー（パスタ、ピッツァ、前菜、ドリンク）
- 📸 ライトボックス付きギャラリー
- 📍 Googleマップ統合
- 📝 予約フォーム
- 🇮🇹 イタリア国旗カラーのデザインアクセント
- 🌐 複数ページ構成（React Router使用）
- ✨ ホバーアニメーション

---

## 🛠️ 技術スタック

| 技術 | バージョン | 用途 |
|------|-----------|------|
| **React** | 18.2.0 | UIライブラリ |
| **Vite** | 5.0.8 | ビルドツール |
| **React Router** | 6.x | ページ遷移 |
| **Tailwind CSS** | 3.3.6 | スタイリング |
| **Lucide React** | 0.294.0 | アイコン |

詳しくは [技術ガイド](./TECHNOLOGY_GUIDE.md) をご覧ください。

---

## 🎨 カラースキーム

イタリア国旗をイメージした配色：

| カラー名 | カラーコード | 用途 |
|---------|------------|------|
| Deep Green | `#2d5016` | メインカラー（店の日除け） |
| Warm Yellow | `#f4e5c3` | 背景色（壁） |
| Wood Brown | `#8b4513` | アクセント（ドア） |
| Soft Cream | `#faf8f3` | ベース色 |

---

## 🚀 はじめ方

### 必要なもの

- Node.js（v16以上）
- npm または yarn

### インストール

```bash
# 1. 依存パッケージをインストール
npm install

# 2. 開発サーバーを起動
npm run dev

# 3. ブラウザで http://localhost:3000 を開く
```

### 本番用ビルド

```bash
# ビルド実行
npm run build

# ビルドされたファイルは dist/ フォルダに生成されます
```

### プレビュー

```bash
npm run preview
```

---

## 📁 サイト構成

| ページ | パス | 説明 |
|--------|------|------|
| **ホーム** | `/` | ヒーローセクションとクイックリンク |
| **メニュー** | `/menu` | 料理の紹介（写真・説明・価格） |
| **私たちについて** | `/about` | お店の物語とシェフ紹介 |
| **ギャラリー** | `/gallery` | 写真ギャラリー |
| **アクセス・予約** | `/access` | 地図・連絡先・予約フォーム |

---

## ✏️ カスタマイズ方法

詳しい編集方法は [取扱説明書](./USER_MANUAL.md) をご覧ください。

### よくある編集

#### 色を変更する

`tailwind.config.js` を編集：

```javascript
colors: {
  'deep-green': '#2d5016',    // ← ここを変更
  'warm-yellow': '#f4e5c3',
  'wood-brown': '#8b4513',
  'soft-cream': '#faf8f3',
}
```

#### メニューを更新する

`src/pages/MenuPage.jsx` の `menuCategories` 配列を編集

#### 連絡先を変更する

`src/pages/AccessPage.jsx` で住所・電話番号・メールアドレス・営業時間を更新

---

## 📂 プロジェクト構造

```
Haifame/
├── public/              # 公開ファイル
│   └── images/         # 画像
├── src/
│   ├── components/     # 再利用可能なコンポーネント
│   │   ├── Navbar.jsx      # ナビゲーションバー
│   │   └── Footer.jsx      # フッター
│   ├── pages/          # 各ページ
│   │   ├── HomePage.jsx    # トップページ
│   │   ├── MenuPage.jsx    # メニュー
│   │   ├── AboutPage.jsx   # 私たちについて
│   │   ├── GalleryPage.jsx # ギャラリー
│   │   └── AccessPage.jsx  # アクセス・予約
│   ├── App.jsx         # ルーティング設定
│   ├── main.jsx        # エントリーポイント
│   └── index.css       # グローバルスタイル
├── QUICK_START.md      # クイックスタートガイド
├── TECHNOLOGY_GUIDE.md # 技術ガイド
├── USER_MANUAL.md      # 取扱説明書
└── README.md           # このファイル
```

---

## 🎓 学習リソース

- [React公式ドキュメント（日本語）](https://ja.react.dev/)
- [Tailwind CSS公式ドキュメント](https://tailwindcss.com/docs)
- [Vite公式ドキュメント](https://ja.vitejs.dev/)

---

## 📝 ライセンス

© 2024 Hai Fame? All rights reserved.

---

## 🆘 困ったときは

1. [クイックスタート](./QUICK_START.md) を確認
2. [取扱説明書](./USER_MANUAL.md) のトラブルシューティングを確認
3. エラーメッセージをGoogle検索
4. [React公式ドキュメント](https://ja.react.dev/) を参照

---

**編集を楽しんでください！** 🎉
