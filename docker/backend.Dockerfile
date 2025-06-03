FROM php:8.2-apache

COPY ./backend/php/php.ini /usr/local/etc/php/
COPY ./backend/apache/*.conf /etc/apache2/sites-enabled/

ENV APACHE_DOCUMENT_ROOT /var/www/html/public

RUN apt-get update

RUN apt-get -y update && apt-get --no-install-recommends install -y \
    libzip-dev \
    zip \
    unzip \
    vim \
    curl \
    libpng-dev \
    libwebp-dev \
    bash \
    && docker-php-ext-install pdo_mysql opcache

# composer install
RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" \
    && php -r "if (hash_file('sha384', 'composer-setup.php') === 'dac665fdc30fdd8ec78b38b9800061b4150413ff2e3b6f88543c636f7cd84f6db9189d43a81e5503cda447da73c7e5b6') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;" \
    && php composer-setup.php \
    && mv composer.phar /usr/local/bin/composer

WORKDIR /var/www/html/

RUN a2enmod rewrite
