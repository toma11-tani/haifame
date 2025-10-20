# 🚀 クイックスタートガイド

このサイトをすぐに編集したい方向けの簡易ガイドです。

---

## ⚡ 3ステップで始める

### 1️⃣ 開発サーバーを起動

```bash
# ターミナル（コマンドプロンプト）を開く
cd C:\Users\touma\Homepage_practice\Haifame

# サーバー起動
npm run dev
```

ブラウザで `http://localhost:3000` を開く

### 2️⃣ ファイルを編集

VS CodeやCursorでプロジェクトを開き、ファイルを編集

### 3️⃣ 保存して確認

`Ctrl + S` で保存 → ブラウザが自動更新される ✨

---

## 📝 よくある編集

### テキストを変更したい

| 変更内容 | ファイル | 行数 |
|---------|---------|------|
| トップページのキャッチコピー | `src/pages/HomePage.jsx` | 23行目 |
| メニューの料理名・価格 | `src/pages/MenuPage.jsx` | 10-115行目 |
| 営業時間 | `src/pages/AccessPage.jsx` | 79-84行目 |
| 電話番号 | `src/pages/AccessPage.jsx` | 92行目 |
| お店の説明 | `src/pages/AboutPage.jsx` | 31-38行目 |

### 画像を変更したい

1. 新しい画像を `public/images/` に入れる
2. ファイル内の `src="/images/○○.jpg"` を変更
3. 保存して確認

### メニューを追加したい

`src/pages/MenuPage.jsx` を開いて、既存のメニュー項目をコピー＆ペースト

```javascript
{
  name: '新しい料理名',
  nameIt: 'イタリア語名',
  description: '説明文',
  price: '¥1,500',
  image: '画像URL',
},
```

---

## 🎨 色を変えたい

`tailwind.config.js` を開く

```javascript
colors: {
  'deep-green': '#2d5016',    // メインカラー
  'warm-yellow': '#f4e5c3',   // 背景色
  'wood-brown': '#8b4513',    // アクセント
  'soft-cream': '#faf8f3',    // サブ背景
}
```

カラーコードを変更して保存

---

## ❌ エラーが出たら

1. **画面が真っ白** → ブラウザでF12を押してエラー確認
2. **画像が出ない** → パスが `/images/○○.jpg` になっているか確認
3. **変更が反映されない** → `Ctrl + Shift + R` で強制リロード

**最終手段：** サーバーを再起動
```bash
Ctrl + C  # 停止
npm run dev  # 再起動
```

---

## 📚 もっと詳しく知りたい

- **技術の説明:** `TECHNOLOGY_GUIDE.md` を読む
- **詳しい編集方法:** `USER_MANUAL.md` を読む

---

## ✅ 編集前のチェックリスト

- [ ] バックアップを取った
- [ ] 開発サーバーが起動している
- [ ] どのファイルを編集するか分かっている

---

**それでは、編集を楽しんでください！** 🎉
