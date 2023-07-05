FROM node:20-alpine

RUN apk update --no-cache \
    && apk add --no-cache wget openssl \
    && wget -q -O /usr/bin/wait-for https://raw.githubusercontent.com/eficode/wait-for/v2.2.3/wait-for \
    && apk del wget \
    && chmod +x /usr/bin/wait-for

WORKDIR /usr/src/app

COPY ./package.json ./

RUN npm config rm https-proxy

RUN npm install

COPY ./start.sh ./

RUN chmod +x ./start.sh

COPY ./index.js ./

CMD [ "npm", "start" ]