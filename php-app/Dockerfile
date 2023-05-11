# ベースイメージの指定
FROM php:7.4-apache

# 作業ディレクトリの設定
WORKDIR /var/www/html

# アプリケーションファイルのコピー
COPY . /var/www/html

# 必要なパッケージのインストール
RUN apt-get update \
    && apt-get install -y \
        libpq-dev \
        && docker-php-ext-install pdo pdo_mysql

# Apacheの設定変更
RUN a2enmod rewrite

# コンテナ起動時にApacheを起動するように設定
CMD ["apache2-foreground"]
