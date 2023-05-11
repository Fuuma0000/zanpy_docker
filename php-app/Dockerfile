# ベースイメージの設定
FROM php:8.0-apache

# 必要な拡張機能のインストール
RUN docker-php-ext-install mysqli

# Apacheの設定
RUN a2enmod rewrite
COPY php.ini /usr/local/etc/php/

# ドキュメントルートの設定
COPY ./ /var/www/html/
# FROM php:7.4-apache

# COPY php.ini /usr/local/etc/php/
# COPY src/ /var/www/html/

# RUN docker-php-ext-install pdo_mysql mysqli

# EXPOSE 80

# CMD ["apache2-foreground"]
