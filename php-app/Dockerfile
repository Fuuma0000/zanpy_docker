# ベースイメージの設定
FROM php:8.0-apache

# 必要な拡張機能のインストール
RUN docker-php-ext-install pdo pdo_mysql

# Apacheの設定
RUN a2enmod rewrite
COPY php.ini /usr/local/etc/php/

# ドキュメントルートの設定
COPY ./ /var/www/html/

# ポートの公開
EXPOSE 80

# コンテナ起動時に実行するコマンド
CMD ["apache2-foreground"]
