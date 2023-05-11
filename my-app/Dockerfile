# ベースイメージの指定
FROM node:20-alpine

# 作業ディレクトリの設定
WORKDIR /app

# package.jsonとpackage-lock.jsonのコピー
COPY package*.json ./

# パッケージのインストール
RUN npm install

# ソースコードのコピー
COPY . .

# ビルドコマンドの実行
RUN npm run build

# エントリーポイントの設定
CMD ["npm", "start"]
