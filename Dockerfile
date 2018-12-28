FROM node:carbon

RUN mkdir -p /var/www/couvertown.com
WORKDIR /var/www/couvertown.com

COPY package.json /var/www/couvertown.com
RUN yarn install --production

COPY . /var/www/couvertown.com
EXPOSE 3000
CMD ["yarn", "start"]
