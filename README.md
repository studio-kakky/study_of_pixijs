# pixi.jsの独習用 レポジトリ
pixi.jsを利用したアニメーション作成独習用

# 開発環境
## コンパイルに必要なパッケージ
- node.js v0.12系
- npm
- gulp
- bower

## 実行環境
Chrome

# 各種コマンド
## 環境セットアップ

```
npm install
```

## プレビューコマンド

```
npm start
```

## 開発タスク

```
npm run develop
```

## ビルドタスク

```
npm run build
```

### ビルド時に作成されるファイル

dest -- html
          |--- js
          |     |--- all.js jsファイル
          |     |--- lib.js 外部ライブラリ
          |
          |--- css
          |     |-- styles.js
          |
          |--- index.js
          |--- study1.html
