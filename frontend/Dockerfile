# ベースイメージの設定
FROM node:20-alpine

# 作業ディレクトリの設定
WORKDIR /usr/src/app

# 必要なファイルをコピー
COPY package.json .
COPY package-lock.json .

# 依存関係のインストール
RUN npm ci

# ソースコードをコピー
COPY . .

# ポートの公開
EXPOSE 3000

# ポートの公開
CMD ["npm", "start"]
