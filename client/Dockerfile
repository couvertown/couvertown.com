FROM node:carbon

RUN mkdir -p /var/www/couvertown.com
WORKDIR /var/www/couvertown.com

COPY package.json /var/www/couvertown.com
COPY yarn.lock /var/www/couvertown.com
RUN yarn install --production

COPY . /var/www/couvertown.com
RUN yarn build
