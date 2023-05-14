# ベースイメージの指定
FROM node:20-alpine

# 作業ディレクトリの設定
WORKDIR /usr/src/app

# 必要なファイルのコピー
COPY package.json package-lock.json ./

# 依存関係のインストール
RUN npm install

# アプリケーションのソースコードをコピー
COPY . .

# ポートの公開
EXPOSE 3004

# アプリケーションの起動コマンドの指定
CMD ["node", "index.js"]
