# Images Directory

このフォルダには、Hai Fame?ウェブサイトで使用する画像を格納します。

## 現在の画像

- **front.jpeg** - レストランの正面写真（Heroセクション、Aboutセクション、ギャラリーで使用）
- **menu1.jpg** - 料理写真（野菜料理）（ギャラリーで使用）

## 画像の追加方法

1. 新しい画像をこのフォルダに追加
2. 適切なコンポーネントで画像パスを更新

### 使用箇所

#### Heroセクション (`src/components/Hero.jsx`)
```javascript
backgroundImage: `url('/images/front.jpeg')`
```

#### Galleryセクション (`src/components/Gallery.jsx`)
```javascript
const images = [
  { url: '/images/front.jpeg', alt: 'Hai Fame? Restaurant Front' },
  { url: '/images/menu1.jpg', alt: 'Italian Vegetable Dish' },
  // 新しい画像をここに追加
]
```

#### Aboutセクション (`src/components/About.jsx`)
```javascript
<img src="/images/front.jpeg" alt="..." />
```

## 推奨される画像の種類

- **料理写真**: パスタ、ピザ、アンティパスト、デザートなど
- **店内写真**: 雰囲気、インテリア、テーブルセッティング
- **食材写真**: 新鮮な野菜、チーズ、ワインなど
- **調理風景**: シェフの作業風景など

## 画像の最適化

- **推奨サイズ**: 横幅 1200-2000px
- **フォーマット**: JPEG, PNG, WebP
- **ファイルサイズ**: できるだけ圧縮（500KB以下推奨）
